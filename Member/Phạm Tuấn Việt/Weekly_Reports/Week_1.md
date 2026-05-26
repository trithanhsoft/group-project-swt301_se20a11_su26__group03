# Tuần 1: Nhậm chức và Quản lý Git Flow

## Quy tắc thép
Đóng vai trò DevOps và QA Lead, công việc đầu tiên của tôi là dẹp loạn. 4 ông kẹ trong nhóm hễ có code là gõ `git push origin main`. Điều này cực kỳ nguy hiểm nếu code bị lỗi, nó sẽ làm sập toàn bộ dự án. Tôi vào GitHub Settings, thiết lập Rule bảo vệ nhánh `main` (Branch Protection): Cấm push trực tiếp, bắt buộc phải tạo Pull Request (PR) và phải có 1 người review (Approve) mới được merge.

## Đào tạo team
Tôi dành 1 buổi tối để hướng dẫn cả team cách tạo nhánh `feature/xxx`, cách commit message theo chuẩn Conventional Commits (ví dụ `feat: xxx`, `fix: xxx`). Lúc đầu mọi người than phiền vì quá rườm rà, nhưng tôi kiên quyết áp dụng kỷ luật.