# Tuần 3: Đấu nối CI với Monorepo

## Thảm họa chia thư mục
Dự án của nhóm là một dạng Monorepo chia làm 2 thư mục con: `backend/` và `frontend/`. File `ci.yml` cũ của tôi chạy `npm install` ở thư mục gốc (Root) nên nó báo lỗi không tìm thấy package.json. Pipeline đỏ lòm suốt 3 ngày!

## Fix lỗi Working Directory
Sau khi tham khảo vô vàn luồng trên StackOverflow và hỏi Copilot, tôi tìm ra thuộc tính `working-directory` trong YAML. Tôi viết lại luồng CI chia làm 2 Job chạy song song (Parallel Jobs): một Job nhảy vào thư mục backend chạy test Jest, một Job nhảy vào thư mục frontend chạy test Vitest. Thời gian chạy CI giảm xuống còn một nửa.