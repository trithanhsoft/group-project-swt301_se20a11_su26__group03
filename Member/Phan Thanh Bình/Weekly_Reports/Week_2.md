# Tuần 2: Quản lý State với Hooks

## Cơn ác mộng re-render
Tuần này tôi bắt đầu đưa React Hooks (`useState`) vào Form. Khi tôi gõ chữ vào ô Input, component Form re-render lại toàn bộ danh sách Task ở dưới khiến ứng dụng giật lag kinh hoàng. Sau khi search nát StackOverflow, tôi nhận ra mình đã đặt state `tasks` và state `title` chung một component App mà không chia nhỏ component ra, dẫn đến việc gõ 1 ký tự là re-render cả cây DOM.

## Xử lý Props Drilling
Để tách component, tôi phải truyền state và hàm cập nhật từ App xuống TaskList, rồi từ TaskList xuống TaskItem. Vấn đề "Props Drilling" xuất hiện khiến code rất rối rắm. Tôi có nghĩ đến Redux nhưng Vĩ (PM) bảo dự án nhỏ không cần thiết, cứ dùng Props hoặc Context API là đủ. Cuối cùng tôi chọn cách truyền Props thủ công. 

## Khó khăn khi chưa có API
Vì Trọng (Backend) chưa viết xong API, tôi phải tự tạo một mảng JSON ảo (Mock Data) để hiển thị giao diện. Sự lệch pha giữa Frontend và Backend bắt đầu hiện rõ khi Trọng đặt tên field là `created_at` còn tôi lại code theo field `date`.