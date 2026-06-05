# Tuần 3: Ghép nối API & Xử lý Bất đồng bộ

## Lần đầu fetch API
Trọng báo đã có API. Tôi dùng `fetch()` trong `useEffect` để gọi API lấy danh sách. Và bùm! Lỗi CORS đỏ rực console. Tôi đã cực kỳ bực mình và đổ lỗi cho Trọng vì API của cậu ấy cùi bắp. Phải cãi nhau mất 1 ngày, Trọng mới chịu cài thư viện CORS bên Node.js. Chuyện này rút kinh nghiệm sâu sắc cho việc giao tiếp nội bộ.

## Promise và Async/Await
Lấy được data rồi thì gặp lỗi không render được vì mảng trả về rỗng, tôi quên không kiểm tra điều kiện `tasks.length > 0`. Hơn nữa, việc gọi API tốn thời gian (delay), nên tôi phải thêm state `isLoading` để hiển thị spinner xoay xoay. Đây là lúc tôi học được cách xử lý Promise trong React, phải bọc trong một hàm `async` bên trong `useEffect`.

## Optimistic UI
Khi bấm "Xóa Task", nếu đợi API trả về 200 OK rồi mới xóa trên giao diện thì rất chậm. Tôi đã áp dụng kỹ thuật Optimistic UI: Xóa mảng ở local ngay lập tức, gọi API ngầm, nếu API báo lỗi thì Rollback (khôi phục) lại state ban đầu. Code phức tạp lên gấp đôi nhưng trải nghiệm mượt mà hơn hẳn.