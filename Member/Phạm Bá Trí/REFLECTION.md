# Cảm nghĩ cá nhân (6 tuần) - Phạm Bá Trí
Vai trò: QA / Automation Tester

## 1. QA không chỉ là "Người bấm bừa"
Ban đầu, tôi tưởng QA (Quality Assurance) đơn giản là mở trang web lên, bấm lung tung xem có lỗi không rồi báo lại. Nhưng môn học SWT301 đã tát cho tôi một cú tỉnh mộng. QA hiện đại phải viết code (Automation Testing)! Lần đầu nhìn vào thư viện React Testing Library, tôi hoang mang cực độ. Thay vì tư duy "Code làm sao để chức năng chạy", tôi phải đổi não sang "Code làm sao để giả lập người dùng đang gõ phím". Mấy ngày đầu, bộ test của tôi toàn báo Fail không phải vì web lỗi, mà vì tôi code test... sai cú pháp.

## 2. Nghệ thuật "Phá hoại" có hệ thống
Viết Unit Test cho UI phức tạp ở chỗ hệ thống web luôn chạy bất đồng bộ (Async). Khi bấm nút Xóa, API đang gọi mất 1 giây, nhưng script test của tôi chạy cái rẹt trong 1 mili-giây và báo Fail vì "Ủa task vẫn còn trên màn hình nè". Khái niệm `waitFor`, `findByText`, `mocking` đã thực sự cứu rỗi đời tôi. Khi nắm được nguyên lý, tôi bắt đầu say mê việc "phá hoại" phần mềm của nhóm. Tôi chèn SQL Injection vào ô input, tôi nhập chuỗi rỗng 1000 ký tự, tôi ép server trả về mã lỗi 500. Nhìn ứng dụng chống chọi thành công với các chiêu trò đó, tôi thấy tự hào vô cùng.

## 3. Tâm lý học hành vi trong việc Báo Bug
Có một câu nói vui trong giới IT: "Kẻ thù của Developer chính là Tester". Quả thực, khi tôi báo 5 cái bug liên tiếp cho Trọng (Backend), cậu ấy đã tỏ thái độ cực kỳ khó chịu và cãi: "Trên máy tao chạy bình thường mà!". Tôi nhận ra việc ném một dòng chat "Mày ơi lỗi rồi" là một thảm họa giao tiếp. Tôi học cách chụp ảnh màn hình, ghi lại log file, viết Defect Report chuẩn chỉnh gồm các bước: Bước 1 làm gì, Bước 2 làm gì, MONG ĐỢI là gì, THỰC TẾ là gì. Nhìn vào một báo cáo chuyên nghiệp như vậy, Dev không thể cãi được câu nào và ngoan ngoãn đi fix bug.

## 4. Tầm quan trọng của Test Document
Viết file `Test_Plan.docx` dài 19 mục là một cực hình. Nhưng nó chính là kim chỉ nam cho cả team. Nhờ định nghĩa rõ Entry Criteria (Tiêu chí bắt đầu test) là code phải không lỗi syntax, tôi có quyền từ chối test những nhánh code rác của Dev đẩy lên. Nhờ Exit Criteria (Tiêu chí kết thúc), PM Vĩ biết chính xác khi nào dự án đã sẵn sàng nộp bài.

## 5. Cảm ơn và Nhìn lại
Làm QA giúp tôi có một tư duy phản biện sắc bén hơn. Cảm ơn Tuấn Việt đã giúp tôi đấu nối bộ test vào GitHub Actions để nó tự chạy hằng đêm. Nhìn lại 30 Test Cases xanh mướt và 10 con Bug đã được CLOSED, tôi cảm thấy 6 tuần thanh xuân của mình hoàn toàn không bị lãng phí. 10 điểm cho tinh thần của team 03!