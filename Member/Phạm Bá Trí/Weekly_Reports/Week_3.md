# Tuần 3: Viết Automation Script (Phần 1 - UI Tĩnh)

## Test giao diện cơ bản
Bình đẩy code giao diện tĩnh (chưa có API) lên. Tôi bắt đầu viết file `App.test.jsx`. Việc đầu tiên là test xem chữ "Task Management System" có xuất hiện trên màn hình hay không bằng hàm `render(<App/>)` và `screen.getByText()`. Test pass rất nhanh. 

## Vấn đề với CSS Selectors
Tôi viết tiếp test cho nút "Add Task". Tôi dùng `document.querySelector(".btn-add")` để tìm nút và dùng `fireEvent.click()` để bấm. Tuy nhiên, qua hôm sau Bình đổi class thành `.button-primary`, toàn bộ test của tôi báo đỏ (FAIL). Tôi rất cáu và yêu cầu Bình phải gắn thuộc tính `data-testid` vào mọi component. Từ đó về sau, tôi chỉ dùng `screen.getByTestId("add-task-btn")` - test không bao giờ vỡ nữa.