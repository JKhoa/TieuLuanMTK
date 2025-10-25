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

### Triển khai GitHub Pages (Frontend tĩnh)

Repo đã được cấu hình để xuất bản GitHub Pages từ nhánh `main` tại thư mục gốc (root).

- URL dự kiến: `https://jkhoa.github.io/TieuLuanMTK/`
- Frontend tĩnh (`index.html`, `script.js`, `style.css`, `components/*`) sẽ được phục vụ trực tiếp.

Lưu ý về backend/API:
- GitHub Pages chạy trên HTTPS. Trình duyệt sẽ chặn gọi API HTTP (mixed content) đến `http://localhost:8080`.
- Bạn có 3 cách để dùng được API từ trang Pages:
	1) Triển khai backend có HTTPS (Render/Railway/Fly/…); sau đó mở trang với tham số `?api=https://your-api.example.com`
	2) Dùng tunnel HTTPS cho server local (ngrok/Cloudflare Tunnel) rồi dùng `?api=https://<public-tunnel>`
	3) Phát triển cục bộ: chạy `run_ui.bat` để mở UI tĩnh tại `http://localhost:5500` (không có mixed content) khi backend chạy `http://localhost:8080`.

`script.js` hỗ trợ override API:

```
https://jkhoa.github.io/TieuLuanMTK/?api=https://your-api.example.com
```

Hoặc lưu cố định qua LocalStorage (tự động khi dùng `?api=` lần đầu).

## 📁 Cấu trúc project

```
├── app.py                 # Flask web server
├── requirements.txt       # Python dependencies
├── templates/
│   └── index.html        # Giao diện web chính
└── students.db           # SQLite database
├── index.html             # Frontend tĩnh cho GitHub Pages
├── script.js              # Logic UI + gọi API (hỗ trợ ?api= override)
├── style.css              # Styles chung + dark theme
├── components/            # Web components (navbar/footer/statusbar)
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