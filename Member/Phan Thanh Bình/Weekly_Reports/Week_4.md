# Tuần 4: Refactor UI & Xử lý Bug hiển thị

## Chỉnh sửa CSS cồng kềnh
File `App.css` của tôi phình to lên hơn 500 dòng. Các class bị đụng độ nhau (CSS collision) do tôi không dùng CSS Modules hay Styled Components. Khi Trí test trên màn hình iPad, nút Complete bị đè lên nút Delete. Tôi đã phải đập đi viết lại phần CSS layout sử dụng CSS Grid thay vì Flexbox để canh chỉnh chính xác hơn trên nhiều thiết bị.

## Xử lý mảng State Immutable
Một bug nghiêm trọng do QA phát hiện: Cập nhật tên Task không thay đổi trên UI trừ khi F5. Tôi xem lại code và phát hiện mình đã dùng `tasks.push(newTask)`! Đây là lỗi cấm kỵ trong React (Mutation State). Tôi phải dùng prompt AI hỏi cách clone mảng an toàn và sửa lại thành `setTasks([...tasks, newTask])`. Mọi thứ mới hoạt động đúng quy chuẩn.

## Thêm hiệu ứng
Để được điểm cộng phần UX, tôi thêm thư viện `framer-motion` để làm hiệu ứng fade-in khi thêm task mới. Giao diện trở nên sống động và bắt mắt hơn rất nhiều.