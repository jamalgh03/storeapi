import supertest from 'supertest';
import app from '../server.js';

const request = supertest(app);

describe('User Handlers', () => {
  it('should return a token when a user is created', async () => {
    const response = await request.post('/users').send({
      firstName: 'Test',
      lastName: 'Admin',
      password: '123'
    });
    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('string'); // التوكن بكون عبارة عن String
  });
});