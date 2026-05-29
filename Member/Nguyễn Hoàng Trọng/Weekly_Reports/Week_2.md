# Tuần 2: Setup Boilerplate & API GET/POST (Detailed)

## Cơn ác mộng CORS
Tuần này, tôi bắt đầu code những dòng logic đầu tiên. Tôi viết API `POST /api/tasks` để thêm task vào SQLite in-memory. Mọi thứ test trên Postman đều trả về `201 Created` rất đẹp. Tuy nhiên, khi Bình (Frontend) gọi API từ React app (chạy port 5173) sang server của tôi (chạy port 5000), trình duyệt lập tức chặn lại với lỗi "CORS policy blocked". Tôi và Bình đã cãi nhau hơn 1 tiếng vì Bình cho rằng lỗi do backend code sai, còn tôi thì không hiểu CORS là gì. Cuối cùng, tôi đã nhờ Copilot giải thích và cài đặt thư viện `cors()`. Mọi thứ đã được giải quyết.

## Quản lý Memory SQLite
Một vấn đề lớn khác là SQLite đang được tôi cấu hình chạy `:memory:`. Điều này có nghĩa là mỗi khi tôi dùng `nodemon` để lưu file, server khởi động lại và mất sạch dữ liệu! Bá Trí (QA) đã than phiền rất nhiều vì bạn ấy không thể test được nếu cứ 5 phút dữ liệu lại biến mất. Tôi đã phải viết một đoạn script seed data giả mỗi khi server start để làm dịu tình hình.

## Tổng kết tuần
Tôi đã hoàn thành 2 API cơ bản: Lấy danh sách task và tạo task mới. Tôi cũng học được cách kiểm tra tính hợp lệ của đầu vào (validate input) như kiểm tra chuỗi rỗng trước khi insert vào DB để tránh rác hệ thống.