const request = require('supertest');
const { app, db } = require('../app');

// Clean up DB before testing
beforeAll((done) => {
    db.serialize(() => {
        db.run("DELETE FROM tasks", done);
    });
});

afterAll((done) => {
    db.close(done);
});

describe('Task API Integration Tests', () => {
    let taskId;

    // Unit test case equivalent
    it('should create a new task successfully', async () => {
        const response = await request(app)
            .post('/api/tasks')
            .send({
                title: 'Test Task 1',
                description: 'Description for Test Task 1'
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe('Test Task 1');
        expect(response.body.status).toBe('pending');
        
        taskId = response.body.id;
    });

    it('should not create a task without title', async () => {
        const response = await request(app)
            .post('/api/tasks')
            .send({
                description: 'Missing title'
            });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Title is required');
    });

    // Integration test case
    it('should retrieve all tasks', async () => {
        const response = await request(app).get('/api/tasks');
        
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0].title).toBe('Test Task 1');
    });

    it('should update task status', async () => {
        const response = await request(app)
            .put(`/api/tasks/${taskId}`)
            .send({
                status: 'completed'
            });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Task updated successfully');
        
        // Verify update
        const getResponse = await request(app).get(`/api/tasks/${taskId}`);
        expect(getResponse.body.status).toBe('completed');
    });

    it('should delete a task', async () => {
        const response = await request(app).delete(`/api/tasks/${taskId}`);
        
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Task deleted successfully');

        // Verify delete
        const getResponse = await request(app).get(`/api/tasks/${taskId}`);
        expect(getResponse.status).toBe(404);
    });
});
