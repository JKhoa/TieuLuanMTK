// Shared JavaScript across all pages
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('studentModal');
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButton = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelBtn');

    function openModal() {
        if (!modal) return;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    // Event listeners for modal (open handled later by Add button to reset editing state)
    if (closeModalButton) closeModalButton.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModal();
        });
    }

    // Show toast notification
    function showToast(message, isError = false) {
        const toast = document.createElement('div');
        toast.className = `toast ${isError ? 'error' : ''}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => { toast.remove(); }, 3000);
    }

    // Load students from backend and render
    function resolveApiBase() {
        try {
            const url = new URL(window.location.href);
            const qp = url.searchParams.get('api');
            if (qp) {
                localStorage.setItem('apiBase', qp);
                return qp;
            }
            const saved = localStorage.getItem('apiBase');
            if (saved) return saved;
        } catch (_) {}
        return 'http://localhost:8080';
    }
    const API_BASE = resolveApiBase();
    const tbody = document.getElementById('studentTbody');
    const statusbar = document.querySelector('custom-statusbar');

    async function fetchStudents() {
        try {
            const res = await fetch(`${API_BASE}/students`);
            const data = await res.json();
            renderStudents(Array.isArray(data) ? data : []);
            if (statusbar) {
                statusbar.setAttribute('status', 'connected');
                statusbar.setAttribute('records', String(data.length || 0));
            }
        } catch (e) {
            console.error(e);
            if (statusbar) statusbar.setAttribute('status', 'disconnected');
        }
    }

    let editingId = null;

    function openEdit(student) {
        const modal = document.getElementById('studentModal');
        if (!modal) return;
        const titleEl = modal?.querySelector('h3');
        const nameInput = document.getElementById('studentName');
        const classInput = document.getElementById('studentClass');
        const gpaInput = document.getElementById('studentGPA');
        if (nameInput) nameInput.value = student?.name ?? '';
        if (classInput) classInput.value = student?.className ?? '';
        if (gpaInput) gpaInput.value = student?.gpa ?? '';
        if (titleEl) titleEl.textContent = editingId ? 'Edit Student' : 'Add Student';
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function renderStudents(list) {
        if (!tbody) return;
        tbody.innerHTML = '';
        list.forEach(s => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-gray-50 dark:hover:bg-gray-700';
            tr.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">${s.id ?? ''}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">${s.name ?? ''}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">${s.className ?? ''}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">${s.gpa ?? ''}</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button class="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300 mr-4" title="Edit">
                        <i data-feather="edit" class="w-4 h-4"></i>
                    </button>
                    <button class="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300" title="Delete">
                        <i data-feather="trash-2" class="w-4 h-4"></i>
                    </button>
                </td>`;
            tbody.appendChild(tr);
            const [editBtn, delBtn] = tr.querySelectorAll('button');
            if (editBtn) editBtn.addEventListener('click', () => {
                editingId = s.id;
                openEdit(s);
            });
            if (delBtn) delBtn.addEventListener('click', async() => {
                if (!confirm(`Delete student #${s.id}?`)) return;
                try {
                    await fetch(`${API_BASE}/students/${s.id}`, { method: 'DELETE' });
                    showToast('Deleted');
                    fetchStudents();
                } catch (e) {
                    console.error(e);
                    showToast('Delete failed', true);
                }
            });
        });
        if (window.feather) feather.replace();
    }

    const saveBtn = document.getElementById('saveBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', async function() {
            const name = document.getElementById('studentName').value.trim();
            const className = document.getElementById('studentClass').value.trim();
            const gpa = parseFloat(document.getElementById('studentGPA').value);
            if (!name || !className || Number.isNaN(gpa)) {
                showToast('Please fill all fields correctly', true);
                return;
            }
            try {
                const url = editingId ? `${API_BASE}/students/${editingId}` : `${API_BASE}/students`;
                const method = editingId ? 'PUT' : 'POST';
                const res = await fetch(url, {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, className, gpa })
                });
                if (!res.ok) throw new Error('Failed to save');
                showToast(editingId ? 'Student updated!' : 'Student saved successfully!');
                closeModal();
                editingId = null;
                fetchStudents();
            } catch (e) {
                console.error(e);
                showToast('Error saving student', true);
            }
        });
    }

    // Add Student button (explicit id to avoid ambiguity with Save button)
    const addBtn = document.getElementById('addStudentBtn');
    if (addBtn) addBtn.addEventListener('click', () => { editingId = null; openEdit(); });

    // Refresh button to reload from backend
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) refreshBtn.addEventListener('click', () => { fetchStudents(); });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
        });
    }

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
    }
    // initial load
    fetchStudents();
});

// Debounce function for search
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => { func.apply(this, args); }, delay);
    };
}

// Example search function
const searchInput = document.querySelector('input[type="text"]');
if (searchInput) {
    searchInput.addEventListener('input', debounce(function(e) {
        console.log('Searching for:', e.target.value);
        // Implement actual search functionality here
    }, 300));
}