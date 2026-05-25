# Tuần 1: Nhập môn QA & Nghiên cứu ISTQB

## Đọc hiểu tài liệu
Với vai trò QA Tester, công việc tuần đầu của tôi không phải là code, mà là ĐỌC. Tôi tải file `12_05...pdf` và đọc ngấu nghiến toàn bộ chuẩn ISTQB v4.0. Khái niệm Test Plan, Entry/Exit criteria, Test Matrix cứ bay lượn trong đầu. Để hiểu rõ cấu trúc, tôi nhờ ChatGPT tóm tắt lại các mục quan trọng nhất áp dụng cho Web App.

## Chọn công cụ Test
Dự án nhóm chọn Node.js và React. Tôi được giao nhiệm vụ viết test tự động (Automation). Đối với React, cộng đồng khuyên dùng Jest + Enzyme (đã cũ) hoặc Vitest + React Testing Library (RTL). Do Bình dùng Vite, tôi quyết định chọn Vitest để tương thích tốt nhất. Mất 2 ngày để setup môi trường chạy lệnh `npm test` thành công mà không báo lỗi syntax JSX.