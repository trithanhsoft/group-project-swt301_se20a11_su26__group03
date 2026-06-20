# Tuần 5: Hỗ trợ Automation Test

## Cơn ác mộng DOM Selectors
Bá Trí (QA) bắt đầu viết test bằng React Testing Library và liên tục "réo tên" tôi. Lý do là Trí dùng class name để tìm phần tử DOM (ví dụ `document.querySelector(".btn-delete")`), nhưng mỗi lần tôi đổi tên class để sửa CSS là test của Trí lại Fail đỏ lòm! Chúng tôi đã phải họp gấp.

## Chuẩn hóa data-testid
Sau buổi họp, tôi nhận nhiệm vụ phải gắn thuộc tính `data-testid` vào tất cả các thẻ HTML quan trọng (ví dụ `<button data-testid="delete-btn-1">`). Việc này cực kỳ tốn thời gian và nhàm chán, nhưng nó đảm bảo bộ test của Trí không bao giờ bị vỡ (brittle) dù tôi có đổi giao diện lộn xộn cỡ nào.

## Đóng băng UI
Cuối tuần, tôi chốt không thêm bất kỳ tính năng mới nào (Code Freeze) để tập trung sửa những lỗi nhỏ nhặt do QA report. Một số bug liên quan đến việc nhập khoảng trắng (space) vào ô input đã được fix triệt để bằng hàm `trim()`.