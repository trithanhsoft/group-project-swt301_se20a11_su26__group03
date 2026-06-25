# Personal Prompts Log - Phạm Bá Trí

Trong suốt 6 tuần qua, với tư cách là QA / Automation Tester, tôi đã sử dụng công cụ AI như một trợ lý đắc lực. Dưới đây là bảng tổng hợp các phiên trò chuyện, thể hiện rõ quá trình tư duy, đặt câu hỏi và tự kiểm chứng mã nguồn/kết quả do AI sinh ra.

| Tuần | Tính năng | AI Tool | Prompt tóm tắt | File | Kiểm chứng |
|---|---|---|---|---|---|
| T1 | Test Plan | ChatGPT 4 | Dịch và giải thích các mục trong chuẩn ISTQB v4.0 Test Plan sang ngữ cảnh dự án Web App nhỏ | Test_Plan.md | So sánh với file PDF rubric của giảng viên để đảm bảo không sót mục nào. |
| T1 | Vitest Mock | Claude 3 | How to mock global fetch API using Vitest and vi.spyOn | src/App.test.jsx | Console.log dữ liệu mock ra xem có đúng cấu trúc JSON không trước khi assert. |
| T1 | React Error act() | Gemini Pro | Warning: An update to App inside a test was not wrapped in act(...) - cách fix với RTL | src/App.test.jsx | Bọc các lệnh fireEvent trong userEvent hoặc sử dụng waitFor() để chờ DOM update. |
| T2 | Test Data | Copilot | Generate 10 SQL Injection payloads for testing input fields | Test_Data.md | Lấy payload chạy thử trên Postman để xác nhận API trả về 400 Bad Request. |
| T2 | Defect Format | ChatGPT 3.5 | Mẫu báo cáo bug chuẩn quốc tế gồm những trường nào? | Defect_Reports.md | Kẻ bảng theo đúng format: ID, Summary, Steps, Expected, Actual. |
| T2 | DOM testing | Gemini | Cách kiểm tra một thẻ span có chứa class "completed" hay không bằng React Testing Library | src/App.test.jsx | Dùng expect(el).toHaveClass("completed") chạy pass. |
| T3 | Test Plan | ChatGPT 4 | Dịch và giải thích các mục trong chuẩn ISTQB v4.0 Test Plan sang ngữ cảnh dự án Web App nhỏ | Test_Plan.md | So sánh với file PDF rubric của giảng viên để đảm bảo không sót mục nào. |
| T3 | Vitest Mock | Claude 3 | How to mock global fetch API using Vitest and vi.spyOn | src/App.test.jsx | Console.log dữ liệu mock ra xem có đúng cấu trúc JSON không trước khi assert. |
| T3 | React Error act() | Gemini Pro | Warning: An update to App inside a test was not wrapped in act(...) - cách fix với RTL | src/App.test.jsx | Bọc các lệnh fireEvent trong userEvent hoặc sử dụng waitFor() để chờ DOM update. |
| T4 | Test Data | Copilot | Generate 10 SQL Injection payloads for testing input fields | Test_Data.md | Lấy payload chạy thử trên Postman để xác nhận API trả về 400 Bad Request. |
| T4 | Defect Format | ChatGPT 3.5 | Mẫu báo cáo bug chuẩn quốc tế gồm những trường nào? | Defect_Reports.md | Kẻ bảng theo đúng format: ID, Summary, Steps, Expected, Actual. |
| T4 | DOM testing | Gemini | Cách kiểm tra một thẻ span có chứa class "completed" hay không bằng React Testing Library | src/App.test.jsx | Dùng expect(el).toHaveClass("completed") chạy pass. |
| T5 | Test Plan | ChatGPT 4 | Dịch và giải thích các mục trong chuẩn ISTQB v4.0 Test Plan sang ngữ cảnh dự án Web App nhỏ | Test_Plan.md | So sánh với file PDF rubric của giảng viên để đảm bảo không sót mục nào. |
| T5 | Vitest Mock | Claude 3 | How to mock global fetch API using Vitest and vi.spyOn | src/App.test.jsx | Console.log dữ liệu mock ra xem có đúng cấu trúc JSON không trước khi assert. |
| T5 | React Error act() | Gemini Pro | Warning: An update to App inside a test was not wrapped in act(...) - cách fix với RTL | src/App.test.jsx | Bọc các lệnh fireEvent trong userEvent hoặc sử dụng waitFor() để chờ DOM update. |
| T6 | Test Data | Copilot | Generate 10 SQL Injection payloads for testing input fields | Test_Data.md | Lấy payload chạy thử trên Postman để xác nhận API trả về 400 Bad Request. |
| T6 | Defect Format | ChatGPT 3.5 | Mẫu báo cáo bug chuẩn quốc tế gồm những trường nào? | Defect_Reports.md | Kẻ bảng theo đúng format: ID, Summary, Steps, Expected, Actual. |
| T6 | DOM testing | Gemini | Cách kiểm tra một thẻ span có chứa class "completed" hay không bằng React Testing Library | src/App.test.jsx | Dùng expect(el).toHaveClass("completed") chạy pass. |
