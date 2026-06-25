# Cảm nghĩ cá nhân (6 tuần) - Phan Thanh Bình
Vai trò: Frontend Developer

## 1. Hành trình đi từ "Ảo mộng" đến "Thực tế"
Khi bắt đầu dự án, tôi nghĩ làm Frontend chỉ đơn giản là vẽ giao diện cho đẹp, gắn vài cái thẻ HTML, tô vài dòng CSS màu mè là xong. Tôi từng tự tin thiết kế một wireframe siêu phức tạp với đủ loại hiệu ứng animation. Nhưng đời không như mơ! Khi bắt tay vào gõ dòng code React đầu tiên, việc quản lý State, Lifecycle (vòng đời component) và Hooks đã giáng cho tôi một đòn đau. Ảo mộng về một giao diện lấp lánh sụp đổ, thay vào đó là thực tế phải làm sao để ứng dụng KHÔNG BỊ CRASH khi người dùng click chuột quá nhanh!

## 2. Ám ảnh mang tên Bất đồng bộ (Async) & CORS
Nếu hỏi điều gì khiến tôi stress nhất trong 6 tuần qua, đó chính là việc ghép nối Frontend với Backend. Đoạn code `fetch("http://localhost:5000/api/tasks")` thoạt nhìn cực kỳ đơn giản, nhưng nó lại kéo theo vô vàn rắc rối. Tôi đã cãi nhau nảy lửa với Hoàng Trọng (Backend) vì lỗi CORS. Tôi bảo do server cùi, Trọng bảo do client gọi ngu. Mất nguyên một ngày trời dỗi nhau, cuối cùng cả hai mới phát hiện ra chỉ cần thêm một dòng `app.use(cors())` bên Node.js. Qua vụ này, tôi nhận ra sự kiêu ngạo của bản thân và tầm quan trọng của việc Developer hai bờ (Front-Back) phải ngồi lại đọc log cùng nhau.

## 3. Quản lý State: Khi Mảng Không Còn Là Mảng
Việc cập nhật UI ở React đòi hỏi tư duy Immutable (Bất biến). Có lần tôi báo cáo với team là làm xong nút "Add Task" rồi. Nhưng khi QA Trí vào test, Trí bảo: "Anh gõ xong bấm Add chả thấy hiện gì cả, F5 mới hiện". Tôi kiểm tra lại code và phát hiện mình đã dùng `tasks.push()`. Trong JS thuần thì đúng, nhưng trong React thì nó không kích hoạt render lại màn hình. Tôi đã phải ngồi đập đi xây lại toàn bộ luồng xử lý dữ liệu bằng Spread Operator. Đó là một bài học xương máu về React mà tôi sẽ không bao giờ quên.

## 4. Tương tác với QA và DevOps
Làm việc với Phạm Bá Trí (QA) cũng là một trải nghiệm "đau não". Trí liên tục than phiền test case bị vỡ do tôi đổi tên Class CSS. Để làm hài lòng QA, tôi phải ngoan ngoãn chèn `data-testid` vào từng cái thẻ HTML một. Lúc đầu thấy phiền phức, nhưng khi Tuấn Việt (DevOps) thiết lập CI/CD chạy test tự động, tôi mới thấy giá trị của việc này. Dù tôi có xáo trộn toàn bộ file CSS, bộ test tự động vẫn chạy xanh mượt vì nó tìm element dựa trên testid cố định.

## 5. Lời Kết
Dự án này đã bào mòn tôi về mặt thể lực (thức khuya fix CSS responsive) nhưng lại bồi đắp cho tôi một lượng kiến thức khổng lồ về React và quy trình phối hợp nhóm. Tôi đã biết cách làm một Web App hoàn chỉnh từ lúc khởi tạo đến lúc build production. Xin cảm ơn các thành viên trong nhóm, đặc biệt là PM Minh Vĩ đã kiên nhẫn thúc giục deadline mỗi ngày. Điểm 10 là xứng đáng cho nỗ lực của tập thể!