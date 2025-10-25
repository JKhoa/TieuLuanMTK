# EduSync Manager - Web Application

## 🌐 Student Management Web Application

Ứng dụng quản lý sinh viên hiện đại với giao diện web đẹp mắt và tính năng đầy đủ.

## ✨ Tính năng

- **Quản lý sinh viên:** Thêm, sửa, xóa sinh viên
- **Tìm kiếm & Lọc:** Tìm kiếm theo tên, lọc theo lớp học
- **Giao diện hiện đại:** Dark theme với responsive design
- **Database:** SQLite với dữ liệu mẫu có sẵn
- **API RESTful:** Backend Flask với API endpoints

## 🚀 Cách chạy

### Yêu cầu hệ thống
- Python 3.7+
- Flask 2.3.3+

### Cài đặt và chạy

1. **Cài đặt dependencies:**
```bash
pip install -r requirements.txt
```

2. **Chạy ứng dụng:**
```bash
python app.py
```

3. **Truy cập web app:**
Mở trình duyệt và truy cập: `http://localhost:5000`

## 📁 Cấu trúc project

```
├── app.py                 # Flask web server
├── requirements.txt       # Python dependencies
├── templates/
│   └── index.html        # Giao diện web chính
└── students.db           # SQLite database
```

## 🎯 API Endpoints

- `GET /` - Trang chủ
- `GET /api/students` - Lấy danh sách sinh viên
- `POST /api/students` - Thêm sinh viên mới
- `PUT /api/students/<id>` - Cập nhật sinh viên
- `DELETE /api/students/<id>` - Xóa sinh viên
- `GET /api/students/search` - Tìm kiếm sinh viên

## 📊 Dữ liệu mẫu

Ứng dụng có sẵn 5 sinh viên mẫu:
1. Nguyễn Văn An - CTK46 - GPA: 3.50
2. Trần Thị Bình - CTK46 - GPA: 3.80
3. Lê Hoàng Cường - CTK47 - GPA: 3.20
4. Phạm Thu Dung - CTK47 - GPA: 3.00
5. Võ Minh Em - CTK48 - GPA: 3.65

## 🎨 Giao diện

- **Dark Theme:** Giao diện tối hiện đại
- **Responsive:** Tương thích mọi thiết bị
- **Bootstrap 5:** UI framework hiện đại
- **Font Awesome:** Icons chuyên nghiệp
- **Gradient Design:** Thiết kế đẹp mắt

## 🔧 Công nghệ sử dụng

- **Backend:** Python Flask
- **Frontend:** HTML5, CSS3, JavaScript
- **Database:** SQLite
- **UI Framework:** Bootstrap 5
- **Icons:** Font Awesome 6

## 📱 Responsive Design

- **Desktop:** Giao diện đầy đủ
- **Tablet:** Tối ưu cho màn hình vừa
- **Mobile:** Giao diện thân thiện

---

**EduSync Manager** - Quản lý sinh viên hiệu quả với giao diện web hiện đại! 🎓