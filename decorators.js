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
            borderColor: '#dee2e6'
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
            
            // Remove all existing theme classes
            document.body.className = document.body.className.replace(/theme-\w+/g, '');
            
            // Add new theme class if not default
            if (themeName !== 'default') {
                document.body.classList.add(`${themeName}-theme`);
            }
            
            this.applyTheme();
            localStorage.setItem('selectedTheme', themeName);
        }
    }
    
    applyTheme() {
        const theme = this.currentTheme.apply();
        const root = document.documentElement;
        
        root.style.setProperty('--bg-primary', theme.background);
        root.style.setProperty('--text-primary', theme.textColor);
        root.style.setProperty('--accent-primary', theme.accent);
        root.style.setProperty('--card-bg', theme.cardBackground);
        root.style.setProperty('--border-primary', theme.borderColor);
        
        if (theme.glow) {
            root.style.setProperty('--glow-effect', theme.glow);
        }
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
