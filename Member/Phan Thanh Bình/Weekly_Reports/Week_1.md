# Tuần 1: Khởi tạo React & Phân tích UI

## Khởi tạo dự án
Đầu tuần, sau khi nhận spec, tôi quyết định chọn Vite + React thay vì Create React App (CRA) vì CRA đã bị deprecate và Vite build nhanh hơn rất nhiều. Việc chạy lệnh `npm create vite@latest` diễn ra mượt mà. Tuy nhiên, vì chưa quen với cấu trúc thư mục mới, tôi mất nguyên 1 ngày để dọn dẹp các file CSS mặc định và setup ESLint.

## Phác thảo giao diện
Tôi dùng Figma (bản free) để vẽ nhanh wireframe. Ứng dụng quản lý Task cần 1 form nhập liệu ở trên và danh sách task ở dưới. Tôi thiết kế theo phong cách Neumorphism nhưng ngay lập tức bị Trí (QA) chê là khó nhìn và không hợp chuẩn Accessibility. Thế là tôi đành chuyển về phong cách Flat Design kết hợp Flexbox cơ bản cho an toàn.

## Viết component tĩnh
Cuối tuần, tôi đã code xong HTML/CSS thuần cho component `TaskItem` và `TaskForm` mà chưa móc nối state gì cả. Giao diện trông khá sạch sẽ, đáp ứng được Responsive trên điện thoại. Tôi đẩy code lên nhánh `feature/frontend-setup`.