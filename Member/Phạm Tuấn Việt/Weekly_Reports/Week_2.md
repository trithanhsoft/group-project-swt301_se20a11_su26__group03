# Tuần 2: Setup GitHub Actions (Mức Cơ bản)

## Khám phá CI/CD
Yêu cầu của giảng viên có phần CI/CD. Tôi mở docs của GitHub Actions ra đọc và tạo thư mục `.github/workflows`. Tôi viết một file `ci.yml` đơn giản để Checkout code và cài đặt Node.js. Chạy thử pipeline đầu tiên, nhìn thấy biểu tượng tick Xanh (Passed) xuất hiện cạnh commit, cả nhóm đều ồ lên thích thú.

## Quản lý Pull Request Template
Để PM và QA dễ theo dõi việc Dev làm gì, tôi tạo file `.github/PULL_REQUEST_TEMPLATE.md`. Bất kỳ ai mở PR đều phải tích vào checklist: Đã test local chưa? Có xài AI không? Fix issue số mấy? Nhờ có template này, chất lượng code đẩy lên được kiểm soát gắt gao hơn hẳn.