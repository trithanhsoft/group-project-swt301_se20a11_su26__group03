# Tuần 3: Hoàn thiện CRUD & Xử lý lỗi (Detailed)

## Hoàn thiện DELETE và PUT
Tuần này tôi viết tiếp 2 API còn lại. API xóa task `DELETE /api/tasks/:id` khá đơn giản, nhưng API update `PUT /api/tasks/:id` lại rắc rối hơn vì phải xử lý trường hợp task không tồn tại (trả về 404). Tôi đã dùng Gemini để tham khảo cách viết error handling middleware sao cho code gọn gàng, tránh việc copy-paste try/catch ở khắp mọi nơi.

## Refactoring Code
Lúc đầu, toàn bộ code từ route, controller đến logic DB đều nằm chung trong file `app.js`. Nhìn file dài gần 300 dòng thật kinh khủng. Minh Vĩ (PM) đã nhắc nhở về tiêu chuẩn Clean Code. Thế là tôi dành hẳn 2 ngày để tách code ra thành mô hình MVC (Routes - Controllers - Services). Việc này cực kỳ vất vả vì lúc copy code sang file mới bị lỗi `require` vòng vo (circular dependency), nhưng sau khi fix xong, tôi thấy trình độ Node.js của mình lên một tầm cao mới.

## Cãi vã về chuẩn RESTful
Trong một buổi họp, Tuấn Việt (DevOps) phàn nàn rằng API của tôi trả về JSON không đồng nhất (lúc thì có `{ data: ... }`, lúc thì trả về array trực tiếp). Tôi đã mất một đêm để chuẩn hóa lại toàn bộ response format, đảm bảo mọi API đều trả về dạng `{ status, data, error }`.