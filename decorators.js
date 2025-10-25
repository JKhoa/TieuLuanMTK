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
            borderColor: '#333333',
            navbarBg: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
            navbarBorder: '#444444',
            searchBg: '#111111',
            searchBorder: '#333333',
            btnBg: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
            btnHoverShadow: '0 8px 25px rgba(255, 107, 107, 0.4)',
            btnShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
            statsBg: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
            statsText: '#ffffff',
            tableBg: '#111111',
            tableText: '#ffffff',
            tableHeaderBg: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
            tableHeaderText: '#ffffff',
            tableBorder: '#333333',
            tableHoverBg: '#222222',
            navLinkColor: '#cccccc',
            navLinkHoverBg: 'rgba(255, 107, 107, 0.1)',
            navLinkHoverColor: '#ff6b6b',
            searchText: '#ffffff',
            formText: '#ffffff',
            formBg: '#111111',
            formBorder: '#333333',
            modalBg: '#111111',
            modalText: '#ffffff',
            modalHeaderBg: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
            modalHeaderText: '#ffffff',
            footerText: '#cccccc',
            loadingText: '#ff6b6b',
            paginationBg: '#111111',
            paginationText: '#cccccc',
            paginationBorder: '#333333',
            paginationHoverBg: '#222222',
            paginationActiveBg: '#ff6b6b',
            paginationActiveText: '#ffffff',
            btnDangerBg: 'linear-gradient(45deg, #ff4757, #ff3742)',
            btnWarningBg: 'linear-gradient(45deg, #ffa502, #ff9500)',
            btnDangerShadow: '0 2px 8px rgba(255, 71, 87, 0.3)',
            btnWarningShadow: '0 2px 8px rgba(255, 165, 2, 0.3)',
            btnDangerHoverShadow: '0 4px 12px rgba(255, 71, 87, 0.4)',
            btnWarningHoverShadow: '0 4px 12px rgba(255, 165, 2, 0.4)',
            btnOutlineBg: 'transparent',
            btnOutlineText: '#cccccc',
            btnOutlineBorder: '#444444',
            btnOutlineHoverBg: '#222222',
            btnOutlineHoverText: '#ffffff'
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
            paginationActiveText: '#ffffff',
            btnDangerBg: 'linear-gradient(45deg, #dc3545, #c82333)',
            btnWarningBg: 'linear-gradient(45deg, #ffc107, #e0a800)',
            btnDangerShadow: '0 2px 8px rgba(220, 53, 69, 0.3)',
            btnWarningShadow: '0 2px 8px rgba(255, 193, 7, 0.3)',
            btnDangerHoverShadow: '0 4px 12px rgba(220, 53, 69, 0.4)',
            btnWarningHoverShadow: '0 4px 12px rgba(255, 193, 7, 0.4)',
            btnOutlineBg: '#ffffff',
            btnOutlineText: '#007bff',
            btnOutlineBorder: '#007bff',
            btnOutlineHoverBg: '#007bff',
            btnOutlineHoverText: '#ffffff'
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
            glow: '0 0 20px #00ff00',
            navbarBg: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
            navbarBorder: '#00ff00',
            searchBg: '#0a0a0a',
            searchBorder: '#00ff00',
            btnBg: 'linear-gradient(45deg, #ff00ff, #cc00cc)',
            btnHoverShadow: '0 8px 25px rgba(255, 0, 255, 0.6)',
            btnShadow: '0 4px 15px rgba(255, 0, 255, 0.4)',
            statsBg: 'linear-gradient(45deg, #ff00ff, #cc00cc)',
            statsText: '#000000',
            tableBg: '#0a0a0a',
            tableText: '#00ff00',
            tableHeaderBg: 'linear-gradient(135deg, #ff00ff 0%, #cc00cc 100%)',
            tableHeaderText: '#ffffff',
            tableBorder: '#00ff00',
            tableHoverBg: 'rgba(0, 255, 0, 0.1)',
            navLinkColor: '#00ff00',
            navLinkHoverBg: 'rgba(255, 0, 255, 0.1)',
            navLinkHoverColor: '#ff00ff',
            searchText: '#00ff00',
            formText: '#00ff00',
            formBg: '#0a0a0a',
            formBorder: '#00ff00',
            modalBg: '#0a0a0a',
            modalText: '#00ff00',
            modalHeaderBg: 'linear-gradient(45deg, #ff00ff, #cc00cc)',
            modalHeaderText: '#ffffff',
            footerText: '#00ff00',
            loadingText: '#ff00ff',
            paginationBg: '#0a0a0a',
            paginationText: '#00ff00',
            paginationBorder: '#00ff00',
            paginationHoverBg: 'rgba(0, 255, 0, 0.1)',
            paginationActiveBg: '#ff00ff',
            paginationActiveText: '#ffffff',
            btnDangerBg: 'linear-gradient(45deg, #ff1744, #f50057)',
            btnWarningBg: 'linear-gradient(45deg, #ffeb3b, #ffc107)',
            btnDangerShadow: '0 2px 8px rgba(255, 23, 68, 0.5)',
            btnWarningShadow: '0 2px 8px rgba(255, 235, 59, 0.5)',
            btnDangerHoverShadow: '0 4px 12px rgba(255, 23, 68, 0.7)',
            btnWarningHoverShadow: '0 4px 12px rgba(255, 235, 59, 0.7)',
            btnOutlineBg: 'transparent',
            btnOutlineText: '#00ff00',
            btnOutlineBorder: '#00ff00',
            btnOutlineHoverBg: '#ff00ff',
            btnOutlineHoverText: '#ffffff'
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
        root.style.removeProperty('--btn-outline-bg');
        root.style.removeProperty('--btn-outline-text');
        root.style.removeProperty('--btn-outline-border');
        root.style.removeProperty('--btn-outline-hover-bg');
        root.style.removeProperty('--btn-outline-hover-text');
        
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
            if (theme.btnDangerBg) root.style.setProperty('--btn-danger-bg', theme.btnDangerBg);
            if (theme.btnWarningBg) root.style.setProperty('--btn-warning-bg', theme.btnWarningBg);
            if (theme.btnDangerShadow) root.style.setProperty('--btn-danger-shadow', theme.btnDangerShadow);
            if (theme.btnWarningShadow) root.style.setProperty('--btn-warning-shadow', theme.btnWarningShadow);
            if (theme.btnDangerHoverShadow) root.style.setProperty('--btn-danger-hover-shadow', theme.btnDangerHoverShadow);
            if (theme.btnWarningHoverShadow) root.style.setProperty('--btn-warning-hover-shadow', theme.btnWarningHoverShadow);
            if (theme.btnOutlineBg) root.style.setProperty('--btn-outline-bg', theme.btnOutlineBg);
            if (theme.btnOutlineText) root.style.setProperty('--btn-outline-text', theme.btnOutlineText);
            if (theme.btnOutlineBorder) root.style.setProperty('--btn-outline-border', theme.btnOutlineBorder);
            if (theme.btnOutlineHoverBg) root.style.setProperty('--btn-outline-hover-bg', theme.btnOutlineHoverBg);
            if (theme.btnOutlineHoverText) root.style.setProperty('--btn-outline-hover-text', theme.btnOutlineHoverText);
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
