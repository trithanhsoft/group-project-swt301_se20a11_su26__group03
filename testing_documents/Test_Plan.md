TEST PLAN (ISTQB v4.0)
Project Name: Task Management System
Version: v1.0
Date: 26/06/2026

1. INTRODUCTION
Tài liệu Test Plan này định nghĩa phương pháp tiếp cận, phạm vi, lịch trình, tài nguyên, công cụ và các hoạt động kiểm thử. Nó được thiết kế dựa trên tiêu chuẩn ISTQB v4.0. Mục đích là để đảm bảo toàn bộ hệ thống Task Management hoạt động đúng đắn, không có lỗi nghiêm trọng trước khi ra mắt.

2. PROJECT OVERVIEW
Dự án Task Management System là một ứng dụng web nhỏ gọn hỗ trợ người dùng tạo, quản lý công việc. Hệ thống bao gồm 2 phần: Frontend sử dụng React/Vite, Backend sử dụng Node.js/Express và SQLite in-memory.

3. TEST OBJECTIVES
- Đảm bảo 100% các tính năng nghiệp vụ cốt lõi hoạt động đúng.
- Xác thực API xử lý đúng các trường hợp đầu vào (Kể cả chuỗi rỗng, null, SQL Injection).
- Tối ưu hóa UI để không bị vỡ trên các thiết bị.

4. TEST SCOPE
- IN SCOPE: Module Quản lý Task (CRUD), API Endpoints, Giao diện Web Dashboard.
- OUT OF SCOPE: Security Testing chuyên sâu (Penetration Test), Performance Testing (Load/Stress).

5. TEST ITEMS
- Task API (GET, POST, PUT, DELETE).
- Dashboard UI (Thêm task, Xóa task, Đánh dấu hoàn thành).

6. TEST TYPES
- Unit Testing: Test các hàm xử lý logic riêng lẻ.
- Integration Testing: Test việc nối API backend và DB.
- UI/Component Testing: Test việc render của React Component.

7. TEST APPROACH / TEST STRATEGY
- Backend: Sử dụng thư viện Jest kết hợp Supertest để bắn request trực tiếp vào Express App.
- Frontend: Sử dụng Vitest kết hợp React Testing Library để giả lập thao tác người dùng (click, type).
- Tự động hóa: Mọi file test sẽ được cấu hình chạy tự động mỗi khi có lệnh push code thông qua GitHub Actions (CI/CD).

8. ENTRY CRITERIA
- Mã nguồn không lỗi syntax.
- Đã cài đặt xong npm packages.
- Môi trường Node 20 sẵn sàng.

9. EXIT CRITERIA
- 100% Test Case bắt buộc (Priority High) đều Pass.
- Code Coverage > 80%.
- Không có Defect nào ở mức Critical hoặc High chưa được xử lý.

10. TEST ENVIRONMENT
- Local: Node.js v22, npm 10, Chrome Latest.
- CI/CD: Ubuntu-latest trên GitHub Actions, Node 20.

11. TEST TOOLS
- Backend: Jest, Supertest.
- Frontend: Vitest, React Testing Library.
- Automation: GitHub Actions.
- Management: GitHub Projects/Issues.

12. TEST DATA MANAGEMENT
- Dữ liệu test (Test Data) được quản lý thông qua file mock, sử dụng SQLite in-memory nên mỗi lần chạy test data sẽ bị reset.
- Bảng Test Data chi tiết vui lòng xem phụ lục Test_Data.md.

13. ROLES AND RESPONSIBILITIES
- QA Lead: Phạm Tuấn Việt (Quản lý quy trình test, CI/CD).
- QA Tester: Phạm Bá Trí (Viết script test Vitest).
- API Tester: Nguyễn Hoàng Trọng (Viết script test Jest).
- Dev: Phan Thanh Bình (Sửa lỗi UI).
- PM: Trần Minh Vĩ (Giám sát tiến độ, duyệt Test Plan).

14. TEST SCHEDULE
- Tuần 3: Bắt đầu viết Unit Test.
- Tuần 4: Viết Integration Test.
- Tuần 5: Execute Test và Bug Fixing.
- Tuần 6: Ký duyệt và Nộp báo cáo.

15. DEFECT MANAGEMENT PROCESS
- QA báo bug trên GitHub Issues.
- Dev nhận issue, tạo branch fix/bug-xxx.
- Dev sửa xong, tạo PR, QA review và chạy lại test.
- Pass thì merge, đóng Issue (Status: CLOSED).

16. RISKS AND MITIGATION
- Rủi ro 1: Dev quên chạy test ở local. Giải pháp: Ép chạy CI/CD trên PR.
- Rủi ro 2: Thiếu data test. Giải pháp: Tạo file mock data chuẩn bị sẵn.
- Rủi ro 3: Server sập khi gọi nhiều API. Giải pháp: Cấu hình connection pooling cho SQLite.

17. TEST DELIVERABLES
- Test Plan (Tài liệu này).
- Test Cases (Appendix A).
- Defect Reports (Appendix B).
- Báo cáo chạy test tự động trên GitHub Actions.

18. COMMUNICATION PLAN
- Giao tiếp hàng ngày qua Discord Voice Channel.
- Giao tiếp chính thức bằng Comment trên GitHub Pull Requests.

19. APPROVALS
- Người duyệt: PM Trần Minh Vĩ.
- Ngày duyệt: 26/06/2026.
- Trạng thái: APPROVED.