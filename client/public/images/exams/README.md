# Hướng dẫn thêm ảnh cho đề thi

## Cấu trúc thư mục

```
images/
└── exams/
    ├── 2025/
    │   ├── 0101/
    │   │   ├── cau1.png
    │   │   ├── cau4.png
    │   │   └── cau10.jpg
    │   ├── 0103/
    │   └── 0105/
    ├── 2024/
    └── 2023/
```

## Cách thêm ảnh vào câu hỏi

### 1. Lưu ảnh vào thư mục
- Tải ảnh từ đề thi
- Đặt tên: `cau1.png`, `cau2.jpg`, `cau10.png`
- Lưu vào thư mục tương ứng: `images/exams/[năm]/[mã đề]/`

### 2. Thêm vào code

Trong file `src/data/exams.js`:

```javascript
{
  id: 4,
  question: "Cho đồ thị hàm số như hình vẽ:<br/><img src='/images/exams/2025/0101/cau4.png' alt='Đồ thị' style='max-width: 100%; height: auto; margin: 10px 0;'/><br/>Hàm số đồng biến trên khoảng nào?",
  image: "/images/exams/2025/0101/cau4.png",
  options: [...],
  correctAnswer: "C",
  explanation: "..."
}
```

### 3. Format ảnh khuyên dùng
- **PNG**: Cho đồ thị, hình vẽ toán học (nét rõ)
- **JPG**: Cho ảnh chụp từ sách, tài liệu
- **Kích thước**: Tối đa 500KB/ảnh
- **Độ phân giải**: 800x600px hoặc nhỏ hơn

## Lưu ý
- Ảnh phải có trong thư mục `public/` để truy cập được
- Đường dẫn bắt đầu bằng `/images/...` (không có `public/`)
- Nên đặt tên file rõ ràng: `cau4.png`, không nên `img1.png`
