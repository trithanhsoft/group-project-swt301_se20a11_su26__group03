# Tuần 4: Viết Automation Script (Phần 2 - Mocking API)

## Trận chiến Bất Đồng Bộ
Trọng đã viết xong API, Bình đã ghép vào UI. Nhưng tôi không thể test UI bằng cách gọi API thật được (vì CSDL thật có thể bị rác dữ liệu). Tôi phải học cách Mock (Làm giả) hàm `fetch()`. Tôi sử dụng `vi.spyOn(global, "fetch")` để ép hàm fetch trả về một mảng JSON tĩnh tự chế.

## Lỗi act(...) trong React
Khi tôi test tính năng bấm nút "Delete", test pass nhưng console ném ra một dòng cảnh báo đỏ rực: `Warning: An update to App inside a test was not wrapped in act(...)`. Tôi mất nguyên 2 ngày đọc docs để hiểu rằng do component re-render bất đồng bộ sau khi bấm nút. Tôi phải dùng `await waitFor(() => expect(...))` để giải quyết. Quá trình này thực sự vắt kiệt não bộ của một QA.