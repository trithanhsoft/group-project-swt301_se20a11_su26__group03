# Bảng Dữ Liệu Kiểm Thử (Test Data)

Dưới đây là các dữ liệu mẫu được chuẩn bị sẵn cho quá trình kiểm thử tự động và thủ công.

## 1. Valid Input Data (Dữ liệu hợp lệ)
| Dữ liệu | Loại | Mô tả |
|---------|------|-------|
| `title: "Làm bài tập SWT301", description: "Deadline tối thứ 6"` | String | Dữ liệu chuẩn, độ dài bình thường |
| `title: "A", description: "B"` | String | Dữ liệu cực ngắn (1 ký tự) |

## 2. Invalid Input Data (Dữ liệu không hợp lệ)
| Dữ liệu | Loại | Expected Result |
|---------|------|-------|
| `title: "", description: ""` | Empty | API trả về 400 Bad Request, UI báo lỗi |
| `title: null, description: "Hello"` | Null | API trả về 400 Bad Request |
| `title: "A".repeat(500)` | Buffer Overflow | API phải cắt bớt hoặc báo lỗi quá dài |

## 3. SQL Injection Payloads
| Dữ liệu | Mô tả tấn công | Expected Result |
|---------|----------------|-----------------|
| `'; DROP TABLE tasks; --` | Cố gắng xóa bảng trong DB | Lỗi báo 400, không được phép sập server |
| `" OR 1=1 --` | Vượt quyền truy cập | Xử lý bằng Parameterized Query |

## 4. XSS Payloads (Cross-Site Scripting)
| Dữ liệu | Mô tả tấn công | Expected Result |
|---------|----------------|-----------------|
| `<script>alert(1)</script>` | Chèn JS độc hại vào UI | Giao diện React tự động escape HTML, hiện text thuần |