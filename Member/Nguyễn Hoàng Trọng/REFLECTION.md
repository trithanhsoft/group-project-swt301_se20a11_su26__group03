# Cảm nghĩ cá nhân (6 tuần) - Nguyễn Hoàng Trọng
Vai trò: Backend Developer

## 1. Những Bỡ Ngỡ Ban Đầu
Nhìn lại chặng đường 6 tuần, cảm xúc đọng lại rõ nét nhất chính là sự "sốc nhiệt" ở tuần 1 và tuần 2. Khi nhận đề tài, tôi tự tin nhận phần Backend vì nghĩ rằng chỉ là mấy cái API CRUD cơ bản. Thế nhưng, thực tế không hề màu hồng. Việc setup một cấu trúc thư mục chuẩn, cấu hình các biến môi trường, và đặc biệt là làm quen với tư duy bất đồng bộ (asynchronous) của Node.js đã khiến tôi phải thức trắng mấy đêm. Có những lỗi rất ngớ ngẩn như quên gọi `res.json()` khiến server treo vô hạn, hoặc lỗi Callback Hell khi truy vấn SQLite liên tục. Mọi thứ ban đầu rối tinh rối mù.

## 2. Drama Xung Đột Trong Nhóm
Không thể không nhắc đến những lần "chí chóe" với Phan Thanh Bình (Frontend). Lúc thì Bình kêu ca API trả về data sai cấu trúc, lúc thì chê API chậm, lúc thì dính lỗi CORS kinh điển. Những cuộc cãi vã trên Discord có lúc khá gay gắt, thậm chí Minh Vĩ (PM) phải can thiệp để hòa giải. Tuy nhiên, qua những lần cãi vã đó, tôi mới hiểu ra tầm quan trọng của việc "Thống nhất API Contract" trước khi code. Nếu chúng tôi vẽ chung một file thiết kế JSON từ đầu, mọi chuyện đã không rắc rối đến vậy.

## 3. Khó Khăn Lớn Nhất: Testing
Đây chính là "con trùm cuối" của dự án. Viết code cho chạy được là một chuyện, viết code để TEST được lại là đẳng cấp hoàn toàn khác. Việc cấu hình Jest kết hợp Supertest để test API khiến tôi mất gần 1 tuần lễ. Khái niệm Mocking database, Tear-down, Setup-before-all nghe lạ hoắc. Có những lúc tôi muốn bỏ cuộc vì viết 15 test case thì Fail cả 15. Nhưng nhờ sự động viên của QA Bá Trí và việc tận dụng các công cụ AI như ChatGPT, tôi đã gỡ từng nút thắt một. Khi dòng chữ `Test Suites: 1 passed, 1 total` hiện lên màu xanh, cảm giác thật sự rất sung sướng.

## 4. Trải Nghiệm CI/CD Tuyệt Vời
Khi Tuấn Việt gắn GitHub Actions vào repo, tôi đã có cơ hội chứng kiến sức mạnh của tự động hóa. Trước đây, mỗi lần muốn test, tôi phải tự gõ lệnh ở terminal. Giờ đây, chỉ cần Push code lên GitHub, một con bot tự động cấp phát máy ảo, cài Node.js, chạy lệnh test và báo cáo kết quả ngay lập tức trên PR. Nó xịn sò đến mức tôi cảm thấy mình đang làm việc trong một công ty công nghệ lớn chứ không phải đang làm đồ án môn học nữa.

## 5. Bài Học Xương Máu Rút Ra
- **Đừng tin vào input của User:** Mọi dữ liệu đẩy lên qua API POST/PUT đều có thể chứa mã độc hoặc rác. Việc Validation (ràng buộc dữ liệu) là tối quan trọng.
- **Sức mạnh của AI là không thể chối cãi:** Dù đôi lúc AI đưa code bị lỗi thời (deprecated), nhưng nếu biết cách đặt câu hỏi (prompt engineering), nó sẽ là một người thầy tuyệt vời giúp giải thích các khái niệm phức tạp như Promise, Event Loop, SQLite bindings.
- **Làm việc nhóm là nghệ thuật:** Hạ cái tôi xuống, chịu khó lắng nghe Frontend và QA nói, dự án mới có thể đi xa được.

Tổng kết lại, môn học SWT301 đã mang lại cho tôi những kiến thức thực chiến vô giá. Tôi tự hào về những dòng code Backend mà mình đã viết, và tự hào về sự nỗ lực của cả nhóm 03!