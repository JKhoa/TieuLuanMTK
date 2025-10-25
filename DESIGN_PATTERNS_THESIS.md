# DESIGN PATTERNS THESIS
## STUDENT MANAGEMENT WEB APPLICATION USING SINGLETON AND DECORATOR PATTERNS

---

## TABLE OF CONTENTS

1. [INTRODUCTION](#1-introduction)
2. [THEORETICAL FOUNDATION](#2-theoretical-foundation)
3. [SYSTEM ANALYSIS AND DESIGN](#3-system-analysis-and-design)
4. [SINGLETON PATTERN IMPLEMENTATION](#4-singleton-pattern-implementation)
5. [DECORATOR PATTERN IMPLEMENTATION](#5-decorator-pattern-implementation)
6. [RESULTS AND EVALUATION](#6-results-and-evaluation)
7. [CONCLUSION AND FUTURE WORK](#7-conclusion-and-future-work)

---

## 1. INTRODUCTION

### 1.1. Background
In the era of rapidly developing information technology, student management in educational institutions requires modern, flexible, and user-friendly web applications. Student management applications need not only basic functionality but also beautiful interfaces, customization capabilities, and excellent user experience.

### 1.2. Objectives
- Build a student management web application using Python Flask
- Apply Singleton Pattern for database connection management
- Apply Decorator Pattern for themes, animations, and notifications management
- Create a flexible, extensible, and maintainable system

### 1.3. Scope of Research
- Singleton Pattern in database connection management
- Decorator Pattern in UI/UX enhancements
- Web application development with Flask and SQLite
- Frontend development with HTML, CSS, JavaScript

---

## 2. THEORETICAL FOUNDATION

### 2.1. Design Patterns

#### 2.1.1. Singleton Pattern
**Definition**: Singleton Pattern ensures that a class has only one instance and provides a global access point to that instance.

**Characteristics**:
- Only one instance exists
- Self-creating instance
- Provides global access point
- Lazy initialization

**Applications**: Database connections, logging, configuration management

#### 2.1.2. Decorator Pattern
**Definition**: Decorator Pattern allows adding new functionality to an object without altering its structure.

**Characteristics**:
- Wrapper pattern
- Composition over inheritance
- Runtime behavior modification
- Flexible functionality addition

**Applications**: UI themes, animations, notifications, feature toggles

### 2.2. Technologies Used

#### 2.2.1. Backend
- **Python Flask**: Lightweight and flexible web framework
- **SQLite**: Embedded database, no separate installation required
- **RESTful API**: Standard API architecture

#### 2.2.2. Frontend
- **HTML5**: Web page structure
- **CSS3**: Styling and animations
- **JavaScript ES6+**: Logic and interactions
- **Bootstrap 5**: Responsive UI framework

---

## 3. SYSTEM ANALYSIS AND DESIGN

### 3.1. Overall Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (Client-side)                   │
├─────────────────────────────────────────────────────────────┤
│  HTML5 + CSS3 + JavaScript + Bootstrap 5                   │
│  ├── Theme Management (Decorator Pattern)                  │
│  ├── Animation System (Decorator Pattern)                  │
│  └── Notification System (Decorator Pattern)               │
└─────────────────────────────────────────────────────────────┘
                                │
                                │ HTTP/REST API
                                │
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND (Server-side)                    │
├─────────────────────────────────────────────────────────────┤
│  Python Flask + SQLite                                      │
│  ├── Database Connection (Singleton Pattern)               │
│  ├── Student Management API                                │
│  └── Data Persistence                                      │
└─────────────────────────────────────────────────────────────┘
```

### 3.2. Directory Structure

```
TieuLuanMTK/
├── app.py                    # Flask application (Singleton)
├── students.db              # SQLite database
├── index.html              # Main UI template
├── decorators.js           # Decorator Pattern implementation
├── decorator-styles.css    # CSS variables for themes
├── data.json              # Static data for GitHub Pages
├── requirements.txt       # Python dependencies
└── README.md             # Documentation
```

### 3.3. Main Features

#### 3.3.1. Student Management
- View student list
- Add new student
- Edit student information
- Delete student
- Search and filter students
- Data pagination

#### 3.3.2. User Interface
- 4 themes: Default, Dark, Light (Lavender), Neon
- Animations: FadeIn, SlideIn, Bounce
- Notifications: Success, Error, Warning, Info
- Responsive design
- Modern UI/UX

---

## 4. SINGLETON PATTERN IMPLEMENTATION

### 4.1. Problem Statement
In web applications, database connection management is a critical challenge:
- Avoid creating unnecessary connections
- Ensure data consistency
- Optimize performance
- Efficient resource management

### 4.2. Singleton Design for Database Connection

#### 4.2.1. Implementation in Flask

```python
import sqlite3
from flask import Flask, render_template, request, jsonify
import json
from datetime import datetime

app = Flask(__name__)

# Database configuration
DATABASE = 'students.db'

def get_db_connection():
    """
    Singleton pattern implementation for database connection
    Ensures only one database connection exists
    """
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """Initialize the database with sample data"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Create students table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            class_name TEXT NOT NULL,
            gpa REAL NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Check if table is empty and add sample data
    cursor.execute('SELECT COUNT(*) FROM students')
    count = cursor.fetchone()[0]
    
    if count == 0:
        sample_students = [
            ('Nguyễn Văn An', 'CTK46', 3.50),
            ('Trần Thị Bình', 'CTK46', 3.80),
            ('Lê Hoàng Cường', 'CTK47', 3.20),
            ('Phạm Thu Dung', 'CTK47', 3.00),
            ('Võ Minh Em', 'CTK48', 3.65)
        ]
        
        cursor.executemany(
            'INSERT INTO students (name, class_name, gpa) VALUES (?, ?, ?)',
            sample_students
        )
        print(f"Added {len(sample_students)} sample students to database")
    
    conn.commit()
    conn.close()
```

#### 4.2.2. API Endpoints using Singleton

```python
@app.route('/api/students', methods=['GET'])
def get_students():
    """Get all students using singleton database connection"""
    conn = get_db_connection()  # Singleton instance
    students = conn.execute('SELECT * FROM students ORDER BY id').fetchall()
    conn.close()
    
    students_list = []
    for student in students:
        students_list.append({
            'id': student['id'],
            'name': student['name'],
            'class_name': student['class_name'],
            'gpa': student['gpa'],
            'created_at': student['created_at']
        })
    
    return jsonify(students_list)

@app.route('/api/students', methods=['POST'])
def add_student():
    """Add a new student using singleton database connection"""
    data = request.get_json()
    
    if not data or not all(k in data for k in ('name', 'class_name', 'gpa')):
        return jsonify({'error': 'Missing required fields'}), 400
    
    try:
        conn = get_db_connection()  # Singleton instance
        cursor = conn.execute(
            'INSERT INTO students (name, class_name, gpa) VALUES (?, ?, ?)',
            (data['name'], data['class_name'], float(data['gpa']))
        )
        student_id = cursor.lastrowid
        conn.commit()
        conn.close()
        
        return jsonify({
            'id': student_id,
            'name': data['name'],
            'class_name': data['class_name'],
            'gpa': float(data['gpa']),
            'message': 'Student added successfully'
        }), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
```

### 4.3. Benefits of Singleton Pattern in Application

#### 4.3.1. Efficient Resource Management
- Only one database connection created
- Prevents memory leaks and connection pool exhaustion
- Optimizes application performance

#### 4.3.2. Consistency
- Ensures all operations use the same connection
- Prevents conflicts and race conditions
- Easy transaction management

#### 4.3.3. Maintainability
- Centralized database management
- Easy to change database configuration
- Clean and organized code

---

## 5. DECORATOR PATTERN IMPLEMENTATION

### 5.1. Problem Statement
Modern web applications need:
- Multiple themes for different users
- Smooth and attractive animations
- Smart and user-friendly notifications
- Flexible interface customization

### 5.2. Decorator Pattern Design

#### 5.2.1. Theme Management System

```javascript
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

// Light Theme Decorator (Lavender Purple)
class LightThemeDecorator {
    constructor(theme) {
        this.theme = theme;
    }
    
    apply() {
        const base = this.theme.apply();
        return {
            ...base,
            background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
            textColor: '#4a148c',
            accent: '#9c27b0',
            cardBackground: 'rgba(255, 255, 255, 0.95)',
            borderColor: '#ce93d8'
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
```

#### 5.2.2. Theme Manager

```javascript
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
            document.body.classList.remove('dark-theme', 'light-theme', 'neon-theme');
            
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
        
        // Clear all existing CSS variables first
        root.style.removeProperty('--bg-primary');
        root.style.removeProperty('--text-primary');
        root.style.removeProperty('--accent-primary');
        // ... clear other variables
        
        // Apply new theme properties
        root.style.setProperty('--bg-primary', theme.background);
        root.style.setProperty('--text-primary', theme.textColor);
        root.style.setProperty('--accent-primary', theme.accent);
        // ... apply other properties
    }
}
```

#### 5.2.3. Animation Management System

```javascript
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

// Animation Manager
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
```

#### 5.2.4. Notification Management System

```javascript
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

// Notification Manager
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
```

### 5.3. CSS Variables System

#### 5.3.1. Root Variables

```css
:root {
    --bg-primary: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    --text-primary: #e2e8f0;
    --accent-primary: #667eea;
    --card-bg: rgba(30, 41, 59, 0.98);
    --border-primary: #334155;
    --navbar-bg: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    --btn-bg: linear-gradient(45deg, #667eea, #764ba2);
    --stats-bg: linear-gradient(45deg, #667eea, #764ba2);
    --table-bg: #0f172a;
    --table-header-bg: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    /* ... many other variables */
}
```

#### 5.3.2. Theme-specific Overrides

```css
/* Light Theme (Lavender Purple) */
body.light-theme {
    --bg-primary: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
    --text-primary: #4a148c;
    --accent-primary: #9c27b0;
    --card-bg: rgba(255, 255, 255, 0.95);
    --border-primary: #ce93d8;
    --navbar-bg: linear-gradient(135deg, #ffffff 0%, #f3e5f5 100%);
    --btn-bg: linear-gradient(45deg, #9c27b0, #7b1fa2);
    --stats-bg: linear-gradient(45deg, #9c27b0, #7b1fa2);
    --table-bg: #ffffff;
    --table-header-bg: linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%);
    /* ... other variables */
}

/* Dark Theme */
body.dark-theme {
    --bg-primary: #000000;
    --text-primary: #ffffff;
    --accent-primary: #ff6b6b;
    --card-bg: rgba(0, 0, 0, 0.9);
    --border-primary: #333333;
    /* ... other variables */
}

/* Neon Theme */
body.neon-theme {
    --bg-primary: #0a0a0a;
    --text-primary: #00ff00;
    --accent-primary: #ff00ff;
    --card-bg: rgba(0, 255, 0, 0.1);
    --border-primary: #00ff00;
    --glow-effect: 0 0 20px #00ff00;
    /* ... other variables */
}
```

### 5.4. Usage in Application

```javascript
// Initialize managers
const themeManager = new ThemeManager();
const animationManager = new AnimationManager();
const notificationManager = new NotificationManager();

// Load saved theme
themeManager.loadSavedTheme();

// Apply animation to stats cards
document.querySelectorAll('.stats-card').forEach(card => {
    animationManager.animate(card, 'fadeIn');
});

// Theme switching
function changeTheme(themeName) {
    themeManager.setTheme(themeName);
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.theme-btn.${themeName}`).classList.add('active');
    notificationManager.show(`Switched to ${themeName} theme!`, 'success');
}

// Enhanced notifications
function showAlert(message, type) {
    notificationManager.show(message, type);
}
```

---

## 6. RESULTS AND EVALUATION

### 6.1. Achieved Results

#### 6.1.1. Singleton Pattern Implementation
- ✅ **Database Connection Management**: Efficient database connection management
- ✅ **Resource Optimization**: Optimized resources and performance
- ✅ **Data Consistency**: Ensured data consistency
- ✅ **Clean Architecture**: Clean and maintainable code architecture

#### 6.1.2. Decorator Pattern Implementation
- ✅ **4 Complete Themes**: Default, Dark, Light (Lavender), Neon
- ✅ **Animation System**: FadeIn, SlideIn, Bounce animations
- ✅ **Notification System**: Success, Error, Warning, Info notifications
- ✅ **Dynamic Theme Switching**: Smooth theme transitions
- ✅ **CSS Variables System**: Flexible CSS variable system

#### 6.1.3. User Experience
- ✅ **Responsive Design**: Responsive interface on all devices
- ✅ **Modern UI/UX**: Modern and attractive design
- ✅ **Smooth Animations**: Smooth and professional effects
- ✅ **Intuitive Navigation**: Intuitive and easy-to-use navigation

### 6.2. Effectiveness Evaluation

#### 6.2.1. Singleton Pattern
**Advantages**:
- Efficient resource management
- Ensures consistency
- Easy to maintain and extend
- Optimizes performance

**Disadvantages**:
- Can create global state
- Difficult to test in unit testing environment
- May violate Single Responsibility Principle

#### 6.2.2. Decorator Pattern
**Advantages**:
- High flexibility in combining functionality
- Follows Open/Closed Principle
- Easy to add/modify/remove functionality
- Supports runtime configuration

**Disadvantages**:
- Can create many small objects
- Code can become complex with many decorators
- Difficult to debug with many layers

### 6.3. Comparison with Other Approaches

#### 6.3.1. Singleton vs Connection Pool
| Aspect | Singleton | Connection Pool |
|--------|-----------|-----------------|
| Complexity | Simple | More complex |
| Performance | Good for small apps | Better for large apps |
| Resource Management | Basic | Advanced |
| Scalability | Limited | Better |

#### 6.3.2. Decorator vs Inheritance
| Aspect | Decorator | Inheritance |
|--------|-----------|-------------|
| Flexibility | High | Lower |
| Runtime Behavior | Can change | Cannot change |
| Code Reuse | Good | Good |
| Complexity | Medium | Simpler |

---

## 7. CONCLUSION AND FUTURE WORK

### 7.1. Conclusion

#### 7.1.1. Success of Design Patterns
The application of Singleton and Decorator Patterns in the Student Management Web application has brought positive results:

1. **Singleton Pattern**:
   - Efficient database connection management
   - Ensures consistency and optimizes resources
   - Creates clean and maintainable backend architecture

2. **Decorator Pattern**:
   - Creates flexible theme management system
   - Provides powerful animation and notification systems
   - Significantly enhances user experience

#### 7.1.2. Lessons Learned
- Design patterns help code become organized and maintainable
- Combining multiple patterns can create powerful systems
- CSS Variables combined with JavaScript create effective dynamic theming systems
- User experience is an important factor in application design

### 7.2. Future Work

#### 7.2.1. Short-term
- **Add new themes**: Ocean, Forest, Sunset, etc.
- **Expand animation system**: Rotate, Scale, Flip animations
- **Improve notification system**: Sound effects, custom positioning
- **Add features**: Export/Import data, Advanced search, Charts

#### 7.2.2. Long-term
- **Microservices Architecture**: Separate services
- **Real-time Features**: WebSocket for real-time updates
- **Mobile App**: React Native or Flutter
- **AI Integration**: Smart recommendations, Auto-categorization

#### 7.2.3. Technical Improvements
- **Database Migration**: PostgreSQL or MongoDB
- **Caching System**: Redis for performance optimization
- **Testing**: Unit tests, Integration tests, E2E tests
- **CI/CD Pipeline**: Automated deployment

### 7.3. Community Contribution

#### 7.3.1. Open Source
- Publish source code on GitHub
- Create detailed documentation
- Setup and deployment guides
- Contributing guidelines

#### 7.3.2. Knowledge Sharing
- Write blog posts about implementation
- Create video tutorials
- Participate in tech conferences
- Mentor new developers

---

## REFERENCES

1. Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1994). *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley.

2. Freeman, E., & Freeman, E. (2004). *Head First Design Patterns*. O'Reilly Media.

3. Grinberg, M. (2018). *Flask Web Development: Developing Web Applications with Python*. O'Reilly Media.

4. MDN Web Docs. (2023). *CSS Custom Properties (Variables)*. https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

5. Bootstrap Team. (2023). *Bootstrap 5 Documentation*. https://getbootstrap.com/docs/5.3/

6. SQLite Development Team. (2023). *SQLite Documentation*. https://www.sqlite.org/docs.html

---

## APPENDICES

### A. Source Code Repository
- **GitHub**: https://github.com/JKhoa/TieuLuanMTK
- **Live Demo**: https://jkhoa.github.io/TieuLuanMTK/

### B. Installation Guide
```bash
# Clone repository
git clone https://github.com/JKhoa/TieuLuanMTK.git
cd TieuLuanMTK

# Install dependencies
pip install -r requirements.txt

# Run application
python app.py
```

### C. API Documentation
- **GET /api/students**: Get student list
- **POST /api/students**: Add new student
- **PUT /api/students/{id}**: Update student
- **DELETE /api/students/{id}**: Delete student
- **GET /api/students/search**: Search students

---

**Author**: [Student Name]  
**Class**: [Class Name]  
**Subject**: Design Patterns  
**Instructor**: [Instructor Name]  
**Completion Date**: [Date]
