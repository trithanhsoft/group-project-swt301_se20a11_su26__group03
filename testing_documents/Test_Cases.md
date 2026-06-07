# APPENDIX A - TEST CASES

| Test Case ID | Module | Preconditions | Test Data | Test Steps | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|---|
| TC_API_001 | Task API | Server is running | title="", description="Desc" | 1. Send POST /api/tasks<br>2. Attach body data | Status 400 Bad Request | Status 400 Bad Request | PASS |
| TC_API_002 | Task API | Server is running | title="Valid Task", description="Desc" | 1. Send POST /api/tasks<br>2. Attach body data | Status 201 Created | Status 201 Created | PASS |
| TC_API_003 | Task API | Server is running | title="", description="Desc" | 1. Send POST /api/tasks<br>2. Attach body data | Status 400 Bad Request | Status 400 Bad Request | PASS |
| TC_API_004 | Task API | Server is running | title="Valid Task", description="Desc" | 1. Send POST /api/tasks<br>2. Attach body data | Status 201 Created | Status 201 Created | PASS |
| TC_API_005 | Task API | Server is running | title="", description="Desc" | 1. Send POST /api/tasks<br>2. Attach body data | Status 400 Bad Request | Status 400 Bad Request | PASS |
| TC_API_006 | Task API | Server is running | title="Valid Task", description="Desc" | 1. Send POST /api/tasks<br>2. Attach body data | Status 201 Created | Status 201 Created | PASS |
| TC_API_007 | Task API | Server is running | title="", description="Desc" | 1. Send POST /api/tasks<br>2. Attach body data | Status 400 Bad Request | Status 400 Bad Request | PASS |
| TC_API_008 | Task API | Server is running | title="Valid Task", description="Desc" | 1. Send POST /api/tasks<br>2. Attach body data | Status 201 Created | Status 201 Created | PASS |
| TC_API_009 | Task API | Server is running | title="", description="Desc" | 1. Send POST /api/tasks<br>2. Attach body data | Status 400 Bad Request | Status 400 Bad Request | PASS |
| TC_API_010 | Task API | Server is running | title="Valid Task", description="Desc" | 1. Send POST /api/tasks<br>2. Attach body data | Status 201 Created | Status 201 Created | PASS |
| TC_API_011 | Task API | Server is running | title="", description="Desc" | 1. Send POST /api/tasks<br>2. Attach body data | Status 400 Bad Request | Status 400 Bad Request | PASS |
| TC_API_012 | Task API | Server is running | title="Valid Task", description="Desc" | 1. Send POST /api/tasks<br>2. Attach body data | Status 201 Created | Status 201 Created | PASS |
| TC_API_013 | Task API | Server is running | title="", description="Desc" | 1. Send POST /api/tasks<br>2. Attach body data | Status 400 Bad Request | Status 400 Bad Request | PASS |
| TC_API_014 | Task API | Server is running | title="Valid Task", description="Desc" | 1. Send POST /api/tasks<br>2. Attach body data | Status 201 Created | Status 201 Created | PASS |
| TC_API_015 | Task API | Server is running | title="", description="Desc" | 1. Send POST /api/tasks<br>2. Attach body data | Status 400 Bad Request | Status 400 Bad Request | PASS |
| TC_UI_001 | Dashboard UI | App is running on localhost:5173 | Input text: Task 1 | 1. Open browser<br>2. Type into input<br>3. Click Add | Task appears in list | Task appears in list | PASS |
| TC_UI_002 | Dashboard UI | App is running on localhost:5173 | Input text: Task 2 | 1. Open browser<br>2. Type into input<br>3. Click Add | Task appears in list | Task appears in list | PASS |
| TC_UI_003 | Dashboard UI | App is running on localhost:5173 | Input text: Task 3 | 1. Open browser<br>2. Type into input<br>3. Click Add | Task appears in list | Task appears in list | PASS |
| TC_UI_004 | Dashboard UI | App is running on localhost:5173 | Input text: Task 4 | 1. Open browser<br>2. Type into input<br>3. Click Add | Task appears in list | Task appears in list | PASS |
| TC_UI_005 | Dashboard UI | App is running on localhost:5173 | Input text: Task 5 | 1. Open browser<br>2. Type into input<br>3. Click Add | Task appears in list | Task does not appear (React state issue) | FAIL |
| TC_UI_006 | Dashboard UI | App is running on localhost:5173 | Input text: Task 6 | 1. Open browser<br>2. Type into input<br>3. Click Add | Task appears in list | Task appears in list | PASS |
| TC_UI_007 | Dashboard UI | App is running on localhost:5173 | Input text: Task 7 | 1. Open browser<br>2. Type into input<br>3. Click Add | Task appears in list | Task appears in list | PASS |
| TC_UI_008 | Dashboard UI | App is running on localhost:5173 | Input text: Task 8 | 1. Open browser<br>2. Type into input<br>3. Click Add | Task appears in list | Task appears in list | PASS |
| TC_UI_009 | Dashboard UI | App is running on localhost:5173 | Input text: Task 9 | 1. Open browser<br>2. Type into input<br>3. Click Add | Task appears in list | Task appears in list | PASS |
| TC_UI_010 | Dashboard UI | App is running on localhost:5173 | Input text: Task 10 | 1. Open browser<br>2. Type into input<br>3. Click Add | Task appears in list | Task appears in list | PASS |
| TC_UI_011 | Dashboard UI | App is running on localhost:5173 | Input text: Task 11 | 1. Open browser<br>2. Type into input<br>3. Click Add | Task appears in list | Task appears in list | PASS |
| TC_UI_012 | Dashboard UI | App is running on localhost:5173 | Input text: Task 12 | 1. Open browser<br>2. Type into input<br>3. Click Add | Task appears in list | Task appears in list | PASS |
| TC_UI_013 | Dashboard UI | App is running on localhost:5173 | Input text: Task 13 | 1. Open browser<br>2. Type into input<br>3. Click Add | Task appears in list | Task appears in list | PASS |
| TC_UI_014 | Dashboard UI | App is running on localhost:5173 | Input text: Task 14 | 1. Open browser<br>2. Type into input<br>3. Click Add | Task appears in list | Task appears in list | PASS |
| TC_UI_015 | Dashboard UI | App is running on localhost:5173 | Input text: Task 15 | 1. Open browser<br>2. Type into input<br>3. Click Add | Task appears in list | Task appears in list | PASS |
