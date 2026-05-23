# Tuần 1: Khởi tạo và Phân tích Yêu cầu (Detailed)

## Ngày 1-2: Phân tích tài liệu và chọn công nghệ
Trong hai ngày đầu tiên của dự án, tôi đã dành ra tổng cộng 15 giờ để đọc kỹ tài liệu ISTQB v4.0 (file PDF) và yêu cầu đồ án (file DOCX). Việc lựa chọn công nghệ ban đầu gặp rất nhiều tranh cãi. Bạn Bình (Frontend) muốn dùng Firebase cho nhanh, nhưng tôi với tư cách là Backend Developer đã cương quyết bảo vệ việc sử dụng Node.js kết hợp Express và SQLite để có thể tự kiểm soát luồng dữ liệu và viết API chuẩn RESTful.

## Ngày 3-5: Thiết kế Database và ERD
Tôi bắt tay vào thiết kế database. Mặc dù ứng dụng chỉ quản lý Task, nhưng việc tổ chức schema sao cho tối ưu, dễ dàng mở rộng sau này là rất quan trọng. Tôi đã thiết kế bảng `Tasks` với các trường `id` (Primary Key), `title` (Varchar), `description` (Text), `status` (Enum: pending, completed), và `created_at` (Timestamp). Trong quá trình này, tôi đã gặp khó khăn trong việc viết file init.sql, do đó tôi đã sử dụng ChatGPT để hỗ trợ sinh ra câu lệnh CREATE TABLE chuẩn xác.

## Ngày 6-7: Họp nhóm và báo cáo
Cuối tuần, tôi họp qua Discord với toàn nhóm. Tôi đã demo được cấu trúc thư mục backend rỗng, cài đặt xong `package.json` với các thư viện cốt lõi như `express`, `cors`, `sqlite3`. Mọi việc khởi đầu khá suôn sẻ nhưng tôi lường trước được việc ghép API tuần sau sẽ có nhiều lỗi phát sinh.