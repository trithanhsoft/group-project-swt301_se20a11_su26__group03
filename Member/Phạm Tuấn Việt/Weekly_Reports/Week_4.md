# Tuần 4: Giải quyết Conflict và Caching

## Kẹt xe ở nhánh Main
Tuần này, Trọng (Backend) và Bình (Frontend) cùng sửa một file README và cùng đẩy PR lên. Hậu quả là xảy ra Merge Conflict chí mạng. Bình không rành Git nên suýt nữa xóa sạch code của Trọng. Tôi phải nhảy vào, dùng Visual Studio Code mở chế độ 3-way merge, cẩn thận nhặt từng dòng code của cả hai bên để gộp lại. 

## Tối ưu hóa CI/CD
Tôi nhận thấy mỗi lần chạy GitHub Actions mất đến 2 phút chỉ để chạy lệnh `npm install`. Quá lâu! Tôi tìm hiểu kỹ thuật Caching và sử dụng action `actions/cache@v3` để lưu lại thư mục `node_modules` giữa các lần chạy. Nhờ vậy, pipeline giờ chỉ tốn khoảng 30 giây để hoàn tất.