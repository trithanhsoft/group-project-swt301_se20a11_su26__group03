# Personal Prompts Log - Phạm Tuấn Việt

Trong suốt 6 tuần qua, với tư cách là DevOps / QA Lead, tôi đã sử dụng công cụ AI như một trợ lý đắc lực. Dưới đây là bảng tổng hợp các phiên trò chuyện, thể hiện rõ quá trình tư duy, đặt câu hỏi và tự kiểm chứng mã nguồn/kết quả do AI sinh ra.

| Tuần | Tính năng | AI Tool | Prompt tóm tắt | File | Kiểm chứng |
|---|---|---|---|---|---|
| T1 | Branch Protection | ChatGPT 3.5 | How to block direct push to main branch on GitHub repository | GitHub UI | Thử mở terminal gõ git push origin main và nhận được lỗi cấm quyền từ GitHub. |
| T1 | PR Template | Gemini Pro | Write a professional Markdown Pull Request template for software engineering class | .github/PULL_REQUEST_TEMPLATE.md | Mở PR mới, kiểm tra xem checkbox có hiển thị đúng chuẩn Markdown không. |
| T1 | YAML CI | Copilot | GitHub action YAML to run tests in multiple working directories | ci.yml | Thêm thẻ working-directory, kiểm tra logs trên GitHub thấy lệnh cd chạy đúng. |
| T2 | Action Caching | Claude 3 | How to use actions/cache for node_modules in Monorepo | ci.yml | Chạy pipeline lần 2, kiểm tra dòng log "Cache hit" và thời gian build giảm rõ rệt. |
| T2 | Git Conflict | ChatGPT 4 | Giải thích cách đọc dấu <<<<<<< HEAD và >>>>>>> trong git merge conflict | Terminal | Áp dụng để xóa các dòng thừa, giữ lại code đúng, git add và commit thành công. |
| T2 | CI Badge | Gemini | Lấy link ảnh Status Badge của GitHub Actions dán vào README | README.md | Load lại file README trên trình duyệt thấy hiện chữ passing màu xanh lá. |
| T3 | Branch Protection | ChatGPT 3.5 | How to block direct push to main branch on GitHub repository | GitHub UI | Thử mở terminal gõ git push origin main và nhận được lỗi cấm quyền từ GitHub. |
| T3 | PR Template | Gemini Pro | Write a professional Markdown Pull Request template for software engineering class | .github/PULL_REQUEST_TEMPLATE.md | Mở PR mới, kiểm tra xem checkbox có hiển thị đúng chuẩn Markdown không. |
| T3 | YAML CI | Copilot | GitHub action YAML to run tests in multiple working directories | ci.yml | Thêm thẻ working-directory, kiểm tra logs trên GitHub thấy lệnh cd chạy đúng. |
| T4 | Action Caching | Claude 3 | How to use actions/cache for node_modules in Monorepo | ci.yml | Chạy pipeline lần 2, kiểm tra dòng log "Cache hit" và thời gian build giảm rõ rệt. |
| T4 | Git Conflict | ChatGPT 4 | Giải thích cách đọc dấu <<<<<<< HEAD và >>>>>>> trong git merge conflict | Terminal | Áp dụng để xóa các dòng thừa, giữ lại code đúng, git add và commit thành công. |
| T4 | CI Badge | Gemini | Lấy link ảnh Status Badge của GitHub Actions dán vào README | README.md | Load lại file README trên trình duyệt thấy hiện chữ passing màu xanh lá. |
| T5 | Branch Protection | ChatGPT 3.5 | How to block direct push to main branch on GitHub repository | GitHub UI | Thử mở terminal gõ git push origin main và nhận được lỗi cấm quyền từ GitHub. |
| T5 | PR Template | Gemini Pro | Write a professional Markdown Pull Request template for software engineering class | .github/PULL_REQUEST_TEMPLATE.md | Mở PR mới, kiểm tra xem checkbox có hiển thị đúng chuẩn Markdown không. |
| T5 | YAML CI | Copilot | GitHub action YAML to run tests in multiple working directories | ci.yml | Thêm thẻ working-directory, kiểm tra logs trên GitHub thấy lệnh cd chạy đúng. |
| T6 | Action Caching | Claude 3 | How to use actions/cache for node_modules in Monorepo | ci.yml | Chạy pipeline lần 2, kiểm tra dòng log "Cache hit" và thời gian build giảm rõ rệt. |
| T6 | Git Conflict | ChatGPT 4 | Giải thích cách đọc dấu <<<<<<< HEAD và >>>>>>> trong git merge conflict | Terminal | Áp dụng để xóa các dòng thừa, giữ lại code đúng, git add và commit thành công. |
| T6 | CI Badge | Gemini | Lấy link ảnh Status Badge của GitHub Actions dán vào README | README.md | Load lại file README trên trình duyệt thấy hiện chữ passing màu xanh lá. |
