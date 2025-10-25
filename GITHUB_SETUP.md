# 🚀 Hướng dẫn đưa EduSync Manager lên GitHub

## 📋 Bước 1: Tạo Repository trên GitHub

1. **Truy cập GitHub:** https://github.com
2. **Đăng nhập** vào tài khoản của bạn
3. **Click nút "New"** hoặc "+" để tạo repository mới
4. **Điền thông tin:**
   - **Repository name:** `edusync-manager` hoặc `student-manager-web`
   - **Description:** `Modern Student Management Web Application with Flask`
   - **Visibility:** Public (hoặc Private tùy ý)
   - **Không check** "Add a README file" (vì đã có sẵn)
   - **Không check** "Add .gitignore" (vì đã có sẵn)
5. **Click "Create repository"**

## 📋 Bước 2: Kết nối với GitHub

Sau khi tạo repository, GitHub sẽ hiển thị hướng dẫn. Chạy các lệnh sau:

```bash
# Thêm remote origin (thay YOUR_USERNAME và YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Đổi tên branch chính thành main
git branch -M main

# Push code lên GitHub
git push -u origin main
```

## 📋 Bước 3: Cấu hình Git (nếu chưa có)

Nếu chưa cấu hình Git, chạy:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 📋 Bước 4: Push code lên GitHub

```bash
# Kiểm tra status
git status

# Add tất cả files
git add .

# Commit changes
git commit -m "Add EduSync Manager Web Application"

# Push lên GitHub
git push origin main
```

## 🎯 Kết quả

Sau khi hoàn thành, repository sẽ có:

- ✅ **app.py** - Flask web server
- ✅ **requirements.txt** - Python dependencies
- ✅ **templates/index.html** - Web interface
- ✅ **students.db** - SQLite database
- ✅ **README.md** - Documentation
- ✅ **.gitignore** - Git ignore rules

## 🌐 Live Demo

Sau khi push lên GitHub, bạn có thể:

1. **Deploy lên Heroku, Vercel, hoặc Netlify**
2. **Chia sẻ repository** với người khác
3. **Clone về máy khác** để chạy

## 📱 Repository Features

- 🎨 **Modern UI** với dark theme
- 📊 **Student Management** đầy đủ tính năng
- 🔍 **Search & Filter** functionality
- 📱 **Responsive Design**
- 🗄️ **SQLite Database** với sample data
- 🚀 **Flask Backend** với REST API

---

**Chúc bạn thành công!** 🎉
