# Tuần 5: Integration Test & CI (Detailed)

## Đưa code lên CI/CD cùng DevOps
Việc chạy test ở local máy tôi thì pass, nhưng khi đẩy lên GitHub Actions (do Tuấn Việt thiết lập), pipeline lại tạch liên tục. Nguyên nhân là do trên môi trường Ubuntu của GitHub, đường dẫn file phân tách bằng dấu `/` trong khi Windows máy tôi dùng dấu `\`. Lỗi này làm cả nhóm mất nửa ngày debug. Cuối cùng tôi dùng module `path` của Node.js để fix triệt để.

## Xử lý Integration Test
Tôi bắt đầu viết các kịch bản test tích hợp (Integration Test), mô phỏng một luồng hoàn chỉnh: Tạo task -> Lấy id -> Update task đó -> Verify đã update -> Xóa task -> Verify đã xóa. Việc này giúp đảm bảo cơ sở dữ liệu SQLite hoạt động trơn tru với các thao tác liên tiếp mà không bị khóa (database lock).

## Tối ưu hóa hiệu năng (Performance)
Mặc dù là dự án nhỏ, nhưng tôi đã tập dùng công cụ `autocannon` để bắn phá API thử xem server chịu được bao nhiêu request. Nhờ bật connection pooling cơ bản của SQLite, server đã xử lý mượt mà. Tuy việc này không có trong yêu cầu môn học, nhưng nó giúp tôi có thêm tự tin vào code của mình.