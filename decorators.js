// Decorator Pattern Implementation for Student Management Web App

// Base Theme Class
class BaseTheme {
    apply() {
        return {
            background: '#0f172a',
            textColor: '#e2e8f0',
            accent: '#667eea',
            cardBackground: 'rgba(30, 41, 59, 0.98)',
            borderColor: '#334155'
        };
    }
}

// Dark Theme Decorator
class DarkThemeDecorator {
    constructor(theme) {
        this.theme = theme;
    }
    
    apply() {
        const base = this.theme.apply();
        return {
            ...base,
            background: '#000000',
            textColor: '#ffffff',
            accent: '#ff6b6b',
            cardBackground: 'rgba(0, 0, 0, 0.9)',
            borderColor: '#333333'
        };
    }
}

// Light Theme Decorator
class LightThemeDecorator {
    constructor(theme) {
        this.theme = theme;
    }
    
    apply() {
        const base = this.theme.apply();
        return {
            ...base,
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            textColor: '#212529',
            accent: '#007bff',
            cardBackground: 'rgba(255, 255, 255, 0.95)',
            borderColor: '#dee2e6',
            navbarBg: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            navbarBorder: '#dee2e6',
            searchBg: '#ffffff',
            searchBorder: '#dee2e6',
            btnBg: 'linear-gradient(45deg, #007bff, #0056b3)',
            btnHoverShadow: '0 8px 25px rgba(0, 123, 255, 0.4)',
            btnShadow: '0 4px 15px rgba(0, 123, 255, 0.3)',
            statsBg: 'linear-gradient(45deg, #007bff, #0056b3)',
            statsText: '#ffffff',
            tableBg: '#ffffff',
            tableText: '#212529',
            tableHeaderBg: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
            tableHeaderText: '#ffffff',
            tableBorder: '#dee2e6',
            tableHoverBg: '#f8f9fa',
            navLinkColor: '#6c757d',
            navLinkHoverBg: 'rgba(0, 123, 255, 0.1)',
            navLinkHoverColor: '#007bff',
            searchText: '#212529',
            formText: '#212529',
            formBg: '#ffffff',
            formBorder: '#dee2e6',
            modalBg: '#ffffff',
            modalText: '#212529',
            modalHeaderBg: 'linear-gradient(45deg, #007bff, #0056b3)',
            modalHeaderText: '#ffffff',
            footerText: '#6c757d',
            loadingText: '#007bff',
            paginationBg: '#ffffff',
            paginationText: '#6c757d',
            paginationBorder: '#dee2e6',
            paginationHoverBg: '#f8f9fa',
            paginationActiveBg: '#007bff',
            paginationActiveText: '#ffffff'
        };
    }
}

// Neon Theme Decorator
class NeonThemeDecorator {
    constructor(theme) {
        this.theme = theme;
    }
    
    apply() {
        const base = this.theme.apply();
        return {
            ...base,
            background: '#0a0a0a',
            textColor: '#00ff00',
            accent: '#ff00ff',
            cardBackground: 'rgba(0, 255, 0, 0.1)',
            borderColor: '#00ff00',
            glow: '0 0 20px #00ff00'
        };
    }
}

// Base Animation Class
class BaseAnimation {
    apply(element) {
        return element;
    }
}

// Fade In Animation Decorator
class FadeInDecorator {
    constructor(animation) {
        this.animation = animation;
    }
    
    apply(element) {
        const result = this.animation.apply(element);
        result.style.opacity = '0';
        result.style.transition = 'opacity 0.5s ease-in';
        setTimeout(() => {
            result.style.opacity = '1';
        }, 100);
        return result;
    }
}

// Slide In Animation Decorator
class SlideInDecorator {
    constructor(animation) {
        this.animation = animation;
    }
    
    apply(element) {
        const result = this.animation.apply(element);
        result.style.transform = 'translateY(-20px)';
        result.style.transition = 'transform 0.3s ease-out';
        setTimeout(() => {
            result.style.transform = 'translateY(0)';
        }, 100);
        return result;
    }
}

// Bounce Animation Decorator
class BounceDecorator {
    constructor(animation) {
        this.animation = animation;
    }
    
    apply(element) {
        const result = this.animation.apply(element);
        result.style.animation = 'bounce 0.6s ease-in-out';
        return result;
    }
}

// Base Notification Class
class BaseNotification {
    show(message, type = 'info') {
        console.log(`[${type.toUpperCase()}] ${message}`);
    }
}

// Success Notification Decorator
class SuccessNotificationDecorator {
    constructor(notification) {
        this.notification = notification;
    }
    
    show(message) {
        this.notification.show(message, 'success');
        this.createToast(message, 'success');
    }
    
    createToast(message, type) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
            </div>
        `;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Error Notification Decorator
class ErrorNotificationDecorator {
    constructor(notification) {
        this.notification = notification;
    }
    
    show(message) {
        this.notification.show(message, 'error');
        this.createToast(message, 'error');
    }
    
    createToast(message, type) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas fa-exclamation-triangle"></i>
                <span>${message}</span>
            </div>
        `;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Warning Notification Decorator
class WarningNotificationDecorator {
    constructor(notification) {
        this.notification = notification;
    }
    
    show(message) {
        this.notification.show(message, 'warning');
        this.createToast(message, 'warning');
    }
    
    createToast(message, type) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas fa-exclamation-circle"></i>
                <span>${message}</span>
            </div>
        `;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Base Button Class
class BaseButton {
    constructor(text, onClick) {
        this.text = text;
        this.onClick = onClick;
    }
    
    render() {
        const button = document.createElement('button');
        button.textContent = this.text;
        button.onclick = this.onClick;
        button.className = 'btn btn-primary';
        return button;
    }
}

// Gradient Button Decorator
class GradientButtonDecorator {
    constructor(button) {
        this.button = button;
    }
    
    render() {
        const button = this.button.render();
        button.className = 'btn btn-custom';
        button.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
        return button;
    }
}

// Glow Button Decorator
class GlowButtonDecorator {
    constructor(button) {
        this.button = button;
    }
    
    render() {
        const button = this.button.render();
        button.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.5)';
        button.style.transition = 'all 0.3s ease';
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = '0 0 30px rgba(102, 126, 234, 0.8)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.5)';
        });
        return button;
    }
}

// Theme Manager Class
class ThemeManager {
    constructor() {
        this.currentTheme = new BaseTheme();
        this.themes = {
            'default': new BaseTheme(),
            'dark': new DarkThemeDecorator(new BaseTheme()),
            'light': new LightThemeDecorator(new BaseTheme()),
            'neon': new NeonThemeDecorator(new BaseTheme())
        };
    }
    
    setTheme(themeName) {
        if (this.themes[themeName]) {
            this.currentTheme = this.themes[themeName];
            
            // Force remove all existing theme classes
            document.body.classList.remove('dark-theme', 'light-theme', 'neon-theme');
            
            // Add new theme class if not default
            if (themeName !== 'default') {
                document.body.classList.add(`${themeName}-theme`);
            }
            
            // Force style recalculation
            document.body.offsetHeight;
            
            this.applyTheme();
            localStorage.setItem('selectedTheme', themeName);
        }
    }
    
    applyTheme() {
        const theme = this.currentTheme.apply();
        const root = document.documentElement;
        
        // Clear all existing CSS variables first
        root.style.removeProperty('--bg-primary');
        root.style.removeProperty('--text-primary');
        root.style.removeProperty('--accent-primary');
        root.style.removeProperty('--card-bg');
        root.style.removeProperty('--border-primary');
        root.style.removeProperty('--glow-effect');
        root.style.removeProperty('--navbar-bg');
        root.style.removeProperty('--navbar-border');
        root.style.removeProperty('--search-bg');
        root.style.removeProperty('--search-border');
        root.style.removeProperty('--btn-bg');
        root.style.removeProperty('--btn-hover-shadow');
        root.style.removeProperty('--btn-shadow');
        root.style.removeProperty('--stats-bg');
        root.style.removeProperty('--stats-text');
        root.style.removeProperty('--table-bg');
        root.style.removeProperty('--table-text');
        root.style.removeProperty('--table-header-bg');
        root.style.removeProperty('--table-header-text');
        root.style.removeProperty('--table-border');
        root.style.removeProperty('--table-hover-bg');
        root.style.removeProperty('--nav-link-color');
        root.style.removeProperty('--nav-link-hover-bg');
        root.style.removeProperty('--nav-link-hover-color');
        root.style.removeProperty('--search-text');
        root.style.removeProperty('--form-text');
        root.style.removeProperty('--form-bg');
        root.style.removeProperty('--form-border');
        root.style.removeProperty('--modal-bg');
        root.style.removeProperty('--modal-text');
        root.style.removeProperty('--modal-header-bg');
        root.style.removeProperty('--modal-header-text');
        root.style.removeProperty('--footer-text');
        root.style.removeProperty('--loading-text');
        root.style.removeProperty('--pagination-bg');
        root.style.removeProperty('--pagination-text');
        root.style.removeProperty('--pagination-border');
        root.style.removeProperty('--pagination-hover-bg');
        root.style.removeProperty('--pagination-active-bg');
        root.style.removeProperty('--pagination-active-text');
        
        // Force style recalculation
        document.body.offsetHeight;
        
        // Wait a bit then apply new theme
        setTimeout(() => {
            root.style.setProperty('--bg-primary', theme.background);
            root.style.setProperty('--text-primary', theme.textColor);
            root.style.setProperty('--accent-primary', theme.accent);
            root.style.setProperty('--card-bg', theme.cardBackground);
            root.style.setProperty('--border-primary', theme.borderColor);
            
            if (theme.glow) {
                root.style.setProperty('--glow-effect', theme.glow);
            } else {
                root.style.setProperty('--glow-effect', 'none');
            }
            
            // Apply additional theme properties if available
            if (theme.navbarBg) root.style.setProperty('--navbar-bg', theme.navbarBg);
            if (theme.navbarBorder) root.style.setProperty('--navbar-border', theme.navbarBorder);
            if (theme.searchBg) root.style.setProperty('--search-bg', theme.searchBg);
            if (theme.searchBorder) root.style.setProperty('--search-border', theme.searchBorder);
            if (theme.btnBg) root.style.setProperty('--btn-bg', theme.btnBg);
            if (theme.btnHoverShadow) root.style.setProperty('--btn-hover-shadow', theme.btnHoverShadow);
            if (theme.btnShadow) root.style.setProperty('--btn-shadow', theme.btnShadow);
            if (theme.statsBg) root.style.setProperty('--stats-bg', theme.statsBg);
            if (theme.statsText) root.style.setProperty('--stats-text', theme.statsText);
            if (theme.tableBg) root.style.setProperty('--table-bg', theme.tableBg);
            if (theme.tableText) root.style.setProperty('--table-text', theme.tableText);
            if (theme.tableHeaderBg) root.style.setProperty('--table-header-bg', theme.tableHeaderBg);
            if (theme.tableHeaderText) root.style.setProperty('--table-header-text', theme.tableHeaderText);
            if (theme.tableBorder) root.style.setProperty('--table-border', theme.tableBorder);
            if (theme.tableHoverBg) root.style.setProperty('--table-hover-bg', theme.tableHoverBg);
            if (theme.navLinkColor) root.style.setProperty('--nav-link-color', theme.navLinkColor);
            if (theme.navLinkHoverBg) root.style.setProperty('--nav-link-hover-bg', theme.navLinkHoverBg);
            if (theme.navLinkHoverColor) root.style.setProperty('--nav-link-hover-color', theme.navLinkHoverColor);
            if (theme.searchText) root.style.setProperty('--search-text', theme.searchText);
            if (theme.formText) root.style.setProperty('--form-text', theme.formText);
            if (theme.formBg) root.style.setProperty('--form-bg', theme.formBg);
            if (theme.formBorder) root.style.setProperty('--form-border', theme.formBorder);
            if (theme.modalBg) root.style.setProperty('--modal-bg', theme.modalBg);
            if (theme.modalText) root.style.setProperty('--modal-text', theme.modalText);
            if (theme.modalHeaderBg) root.style.setProperty('--modal-header-bg', theme.modalHeaderBg);
            if (theme.modalHeaderText) root.style.setProperty('--modal-header-text', theme.modalHeaderText);
            if (theme.footerText) root.style.setProperty('--footer-text', theme.footerText);
            if (theme.loadingText) root.style.setProperty('--loading-text', theme.loadingText);
            if (theme.paginationBg) root.style.setProperty('--pagination-bg', theme.paginationBg);
            if (theme.paginationText) root.style.setProperty('--pagination-text', theme.paginationText);
            if (theme.paginationBorder) root.style.setProperty('--pagination-border', theme.paginationBorder);
            if (theme.paginationHoverBg) root.style.setProperty('--pagination-hover-bg', theme.paginationHoverBg);
            if (theme.paginationActiveBg) root.style.setProperty('--pagination-active-bg', theme.paginationActiveBg);
            if (theme.paginationActiveText) root.style.setProperty('--pagination-active-text', theme.paginationActiveText);
        }, 50);
    }
    
    loadSavedTheme() {
        const savedTheme = localStorage.getItem('selectedTheme') || 'default';
        this.setTheme(savedTheme);
    }
}

// Animation Manager Class
class AnimationManager {
    constructor() {
        this.animations = {
            'fadeIn': new FadeInDecorator(new BaseAnimation()),
            'slideIn': new SlideInDecorator(new BaseAnimation()),
            'bounce': new BounceDecorator(new BaseAnimation())
        };
    }
    
    animate(element, animationType) {
        if (this.animations[animationType]) {
            return this.animations[animationType].apply(element);
        }
        return element;
    }
}

// Notification Manager Class
class NotificationManager {
    constructor() {
        this.baseNotification = new BaseNotification();
        this.notifications = {
            'success': new SuccessNotificationDecorator(this.baseNotification),
            'error': new ErrorNotificationDecorator(this.baseNotification),
            'warning': new WarningNotificationDecorator(this.baseNotification)
        };
    }
    
    show(message, type = 'info') {
        if (this.notifications[type]) {
            this.notifications[type].show(message);
        } else {
            this.baseNotification.show(message, type);
        }
    }
}

// Export for use in main application
window.DecoratorPattern = {
    ThemeManager,
    AnimationManager,
    NotificationManager,
    BaseButton,
    GradientButtonDecorator,
    GlowButtonDecorator
};
