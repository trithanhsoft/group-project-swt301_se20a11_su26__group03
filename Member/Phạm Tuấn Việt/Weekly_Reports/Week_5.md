# Tuần 5: Phối hợp QA và Test Plan

## Đóng vai trò QA Lead
Dù Trí là người viết script test trực tiếp, nhưng tôi là người duyệt Test Plan. Tôi rà soát lại file `Test_Plan.md` để đảm bảo phần Test Environment ghi đúng cấu hình của GitHub Actions (Ubuntu-latest, Node 20). Tôi cũng là người nhấn nút "Rerun all jobs" mỗi khi pipeline chạy fail ảo do lag server.

## Giám sát tiến độ Fix Bug
Tôi theo dõi bảng Defect Reports của Trí. Có 3 bug ở trạng thái OPEN quá 2 ngày. Tôi tag tên thẳng Dev vào các Issue trên GitHub và cảnh báo nếu không fix sẽ không cho merge code mới. Áp lực của CI/CD bắt đầu ép các Dev vào khuôn khổ làm việc chuyên nghiệp.