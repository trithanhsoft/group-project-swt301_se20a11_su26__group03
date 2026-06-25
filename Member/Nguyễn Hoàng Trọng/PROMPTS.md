# Personal Prompts Log - Nguyễn Hoàng Trọng

Trong suốt 6 tuần qua, với tư cách là Backend Developer / API Testing, tôi đã sử dụng công cụ AI như một trợ lý đắc lực. Dưới đây là bảng tổng hợp các phiên trò chuyện, thể hiện rõ quá trình tư duy, đặt câu hỏi và tự kiểm chứng mã nguồn/kết quả do AI sinh ra.

| Tuần | Tính năng | AI Tool | Prompt tóm tắt | File | Kiểm chứng |
|---|---|---|---|---|---|
| T1 | Setup Express | ChatGPT 4 | Viết mã khởi tạo server Nodejs Express với SQLite in-memory | app.js | Chạy thử npm start và kiểm tra port 5000 bằng trình duyệt |
| T1 | Lỗi CORS | Gemini Pro | Tại sao fetch từ localhost:5173 sang 5000 bị chặn CORS, cách sửa nghiệm thu? | app.js | Sử dụng app.use(cors()) và verify request OPTION bằng Postman |
| T1 | SQL Injection | Copilot | Làm sao để chống SQL Injection trong thư viện sqlite3 nodejs | app.js | Sử dụng placeholder (?) thay vì nối chuỗi trực tiếp |
| T2 | Jest Setup | ChatGPT 3.5 | Hướng dẫn viết Unit test cho Express API bằng Jest và Supertest | tests/api.test.js | Áp dụng code mẫu vào dự án, sửa lại đường dẫn, test pass |
| T2 | Jest Error | Claude 3 | Jest has detected the following 1 open handle potentially keeping Jest from exiting | tests/api.test.js | Thêm hook afterAll() để close db connection, hết lỗi đỏ |
| T2 | MVC Refactor | ChatGPT 4 | Cách chia thư mục MVC cho Node.js Express chuẩn nhất | backend/* | Di chuyển file và test lại toàn bộ API đảm bảo không break logic |
| T3 | Setup Express | ChatGPT 4 | Viết mã khởi tạo server Nodejs Express với SQLite in-memory | app.js | Chạy thử npm start và kiểm tra port 5000 bằng trình duyệt |
| T3 | Lỗi CORS | Gemini Pro | Tại sao fetch từ localhost:5173 sang 5000 bị chặn CORS, cách sửa nghiệm thu? | app.js | Sử dụng app.use(cors()) và verify request OPTION bằng Postman |
| T3 | SQL Injection | Copilot | Làm sao để chống SQL Injection trong thư viện sqlite3 nodejs | app.js | Sử dụng placeholder (?) thay vì nối chuỗi trực tiếp |
| T4 | Jest Setup | ChatGPT 3.5 | Hướng dẫn viết Unit test cho Express API bằng Jest và Supertest | tests/api.test.js | Áp dụng code mẫu vào dự án, sửa lại đường dẫn, test pass |
| T4 | Jest Error | Claude 3 | Jest has detected the following 1 open handle potentially keeping Jest from exiting | tests/api.test.js | Thêm hook afterAll() để close db connection, hết lỗi đỏ |
| T4 | MVC Refactor | ChatGPT 4 | Cách chia thư mục MVC cho Node.js Express chuẩn nhất | backend/* | Di chuyển file và test lại toàn bộ API đảm bảo không break logic |
| T5 | Setup Express | ChatGPT 4 | Viết mã khởi tạo server Nodejs Express với SQLite in-memory | app.js | Chạy thử npm start và kiểm tra port 5000 bằng trình duyệt |
| T5 | Lỗi CORS | Gemini Pro | Tại sao fetch từ localhost:5173 sang 5000 bị chặn CORS, cách sửa nghiệm thu? | app.js | Sử dụng app.use(cors()) và verify request OPTION bằng Postman |
| T5 | SQL Injection | Copilot | Làm sao để chống SQL Injection trong thư viện sqlite3 nodejs | app.js | Sử dụng placeholder (?) thay vì nối chuỗi trực tiếp |
| T6 | Jest Setup | ChatGPT 3.5 | Hướng dẫn viết Unit test cho Express API bằng Jest và Supertest | tests/api.test.js | Áp dụng code mẫu vào dự án, sửa lại đường dẫn, test pass |
| T6 | Jest Error | Claude 3 | Jest has detected the following 1 open handle potentially keeping Jest from exiting | tests/api.test.js | Thêm hook afterAll() để close db connection, hết lỗi đỏ |
| T6 | MVC Refactor | ChatGPT 4 | Cách chia thư mục MVC cho Node.js Express chuẩn nhất | backend/* | Di chuyển file và test lại toàn bộ API đảm bảo không break logic |
