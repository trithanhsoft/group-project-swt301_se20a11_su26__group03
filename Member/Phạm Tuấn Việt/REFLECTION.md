# Cảm nghĩ cá nhân (6 tuần) - Phạm Tuấn Việt
Vai trò: DevOps / QA Lead

## 1. Vai trò thầm lặng nhưng quyền lực
Trong một nhóm làm đồ án, người ta thường tung hô Backend vì API xịn, khen ngợi Frontend vì UI đẹp, nể phục QA vì viết script test giăng bẫy Dev. Còn DevOps như tôi? Tôi như một người đứng trong bóng tối. Nhưng tôi biết mình nắm giữ "quyền sinh sát" của toàn bộ source code. Quyết định khóa nhánh `main` ở tuần đầu tiên của tôi là quyết định sáng suốt nhất trong đời sinh viên. Nếu cứ để 4 ông bạn thân push code bậy bạ lên cùng lúc, chắc chắn dự án này đã trở thành một đống rác điện tử không thể biên dịch nổi.

## 2. CI/CD - Phép thuật tự động hóa
Thành tựu lớn nhất của tôi là file `ci.yml`. Lần đầu tiên viết YAML, việc thụt lề sai 1 khoảng trắng (space) cũng làm nổ tung cả hệ thống. Tôi đã thức tới 2h sáng chỉ để nhìn cái chấm vàng (đang chạy) trên GitHub chuyển sang màu Xanh (Pass). Cảm giác đó gây nghiện thực sự. Nhờ CI/CD, Trí (QA) không cần phải clone code về máy chạy tay nữa. Mọi thứ được tự động hóa 100%. Tôi nhận ra tương lai của ngành phần mềm chính là Automation.

## 3. Quản trị xung đột (Merge Conflict)
Quản lý máy móc thì dễ, quản lý con người mới khó. Khi Trọng và Bình gây ra Merge Conflict, cả hai đều luống cuống không biết xử lý sao, sợ mất code của nhau. Đứng ở vai trò Lead, tôi phải bình tĩnh mở VSCode, họp chia sẻ màn hình với hai bạn, giải thích cặn kẽ dòng nào của ai, nên giữ cái nào, bỏ cái nào. Khả năng giải quyết vấn đề (Troubleshooting) của tôi đã thăng hạng vượt bậc qua những lần đi "chữa cháy" như thế này.

## 4. Áp lực của người giữ cửa
Có những đêm sát deadline, Backend vừa sửa xong bug, push vội lên tạo PR và giục tôi "Merge đại đi mày, muộn rồi". Nhưng pipeline CI báo đỏ vì thiếu dấu chấm phẩy (Linting error). Tôi đã cương quyết bấm nút Reject (từ chối) và bắt sửa bằng được. Dù bị chửi là cứng nhắc, nhưng nhờ vậy, mã nguồn cuối cùng của nhóm đạt độ hoàn thiện cực cao, không có một warning rác nào. Kỷ luật chính là chìa khóa của thành công.

## 5. Lời Kết
Môn học SWT301 đã cho tôi cơ hội thực hành kỹ năng Ops thực thụ. Tôi tự tin ghi vào CV sau này dòng chữ "Thành thạo Git Flow và GitHub Actions". Xin gửi lời cảm ơn đến anh em team 03 đã chịu đựng tính kỷ luật thép của tôi. Điểm 10 môn này là phần thưởng xứng đáng cho hệ thống hạ tầng mà chúng ta đã xây dựng!