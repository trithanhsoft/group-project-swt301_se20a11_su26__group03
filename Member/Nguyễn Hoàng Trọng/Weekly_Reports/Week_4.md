# Tuần 4: Viết Unit Test với Jest (Detailed)

## Lần đầu chạm ngõ Jest
Đây là tuần kinh khủng nhất! Tôi chưa bao giờ viết Unit Test cho Backend. Theo yêu cầu của môn học, độ bao phủ code (Coverage) phải cao. Tôi cài đặt `jest` và `supertest`. Lúc viết test case đầu tiên cho `GET /tasks`, tôi chạy lệnh `npm test` và nhận về lỗi đỏ chót do server Express không chịu tắt (open handles). Tôi đã phải lên StackOverflow và dùng ChatGPT liên tục để tìm hiểu hàm `beforeAll` và `afterAll` nhằm khởi tạo và đóng server đúng cách.

## Bùng nổ số lượng Test Cases
QA Bá Trí đưa cho tôi một danh sách 15 test cases bắt buộc phải pass. Trong đó có những case rất dị như "Gửi POST với body là null", "Gửi PUT với ID là chữ cái". Tôi đã phải quay lại sửa code ở file `app.js` để thêm các lớp chặn lỗi (validation) dùng thư viện `Joi`. Nhờ quá trình viết test này, tôi phát hiện ra API của mình bị dính lỗi SQL Injection nếu không dùng tham số ràng buộc `?` trong SQLite. Thật hú vía!

## Kết quả
Đến cuối tuần, tôi đã có 15 test cases chạy PASS xanh lét. Cảm giác nhìn dòng chữ `Coverage: 95%` thật sự rất thoả mãn.