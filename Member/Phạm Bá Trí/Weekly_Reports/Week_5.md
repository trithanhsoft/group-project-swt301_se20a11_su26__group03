# Tuần 5: Thực thi Test (Execution) & Bắt Bug

## Săn Bug
Đây là tuần vui nhất của tôi! Khi chạy tay (Manual Test) kết hợp kịch bản tự động, tôi lôi ra được cả rổ lỗi của Dev. Ví dụ: nhập toàn khoảng trắng (Space) vẫn tạo được Task. Bấm nút Complete 2 lần thì app bị crash. Tôi mở file `Defect_Reports.md` và ghi log từng lỗi một theo đúng chuẩn Jira: Các bước tái hiện, Kết quả mong đợi, Kết quả thực tế.

## Giao tiếp với Dev
Việc báo bug đòi hỏi sự khéo léo. Lúc đầu tôi chê code của Trọng "cùi", Trọng tự ái không thèm sửa. Sau đó Minh Vĩ nhắc nhở, tôi đổi cách nói năng nhẹ nhàng hơn, đính kèm luôn screenshot lỗi và log file. Trọng và Bình sau đó hì hục sửa lỗi rất nhiệt tình. Tôi chạy lại Automation Test, tất cả đều chuyển từ ĐỎ (Fail) sang XANH (Pass).