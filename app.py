from flask import Flask, render_template, request, jsonify, redirect, url_for
import sqlite3
import json
from datetime import datetime

app = Flask(__name__)

# Database configuration
DATABASE = 'students.db'

def init_db():
    """Initialize the database with sample data"""
    conn = sqlite3.connect(DATABASE)
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

def get_db_connection():
    """Get database connection"""
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    """Main page"""
    return render_template('index.html')

@app.route('/api/students', methods=['GET'])
def get_students():
    """Get all students"""
    conn = get_db_connection()
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
    """Add a new student"""
    data = request.get_json()
    
    if not data or not all(k in data for k in ('name', 'class_name', 'gpa')):
        return jsonify({'error': 'Missing required fields'}), 400
    
    try:
        conn = get_db_connection()
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

@app.route('/api/students/<int:student_id>', methods=['PUT'])
def update_student(student_id):
    """Update a student"""
    data = request.get_json()
    
    if not data or not all(k in data for k in ('name', 'class_name', 'gpa')):
        return jsonify({'error': 'Missing required fields'}), 400
    
    try:
        conn = get_db_connection()
        cursor = conn.execute(
            'UPDATE students SET name = ?, class_name = ?, gpa = ? WHERE id = ?',
            (data['name'], data['class_name'], float(data['gpa']), student_id)
        )
        
        if cursor.rowcount == 0:
            conn.close()
            return jsonify({'error': 'Student not found'}), 404
        
        conn.commit()
        conn.close()
        
        return jsonify({
            'id': student_id,
            'name': data['name'],
            'class_name': data['class_name'],
            'gpa': float(data['gpa']),
            'message': 'Student updated successfully'
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/students/<int:student_id>', methods=['DELETE'])
def delete_student(student_id):
    """Delete a student"""
    try:
        conn = get_db_connection()
        cursor = conn.execute('DELETE FROM students WHERE id = ?', (student_id,))
        
        if cursor.rowcount == 0:
            conn.close()
            return jsonify({'error': 'Student not found'}), 404
        
        conn.commit()
        conn.close()
        
        return jsonify({'message': 'Student deleted successfully'})
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/students/search', methods=['GET'])
def search_students():
    """Search students by name or class"""
    query = request.args.get('q', '').strip()
    class_filter = request.args.get('class', '').strip()
    
    conn = get_db_connection()
    
    if query and class_filter:
        students = conn.execute(
            'SELECT * FROM students WHERE (name LIKE ? OR class_name LIKE ?) AND class_name = ? ORDER BY id',
            (f'%{query}%', f'%{query}%', class_filter)
        ).fetchall()
    elif query:
        students = conn.execute(
            'SELECT * FROM students WHERE name LIKE ? OR class_name LIKE ? ORDER BY id',
            (f'%{query}%', f'%{query}%')
        ).fetchall()
    elif class_filter:
        students = conn.execute(
            'SELECT * FROM students WHERE class_name = ? ORDER BY id',
            (class_filter,)
        ).fetchall()
    else:
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

if __name__ == '__main__':
    print("Initializing Student Manager Web Application...")
    init_db()
    print("Database initialized with sample data")
    print("Starting web server on http://localhost:5000")
    print("Student Manager is ready!")
    
    app.run(debug=True, host='0.0.0.0', port=5000)
