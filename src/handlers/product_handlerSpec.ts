import supertest from 'supertest';
import app from '../server.js';

const request = supertest(app);

describe('Product Endpoints', () => {
  it('gets the index endpoint (/products)', async () => {
    const response = await request.get('/products');
    expect(response.status).toBe(200);
  });

  it('gets the show endpoint (/products/:id)', async () => {
    const response = await request.get('/products/1'); 
    expect(response.status).toBe(200);
  });
  it('should fail to create a product without a token', async () => {
  const response = await request.post('/products').send({
    name: 'Unprotected Coffee',
    price: 10,
    category: 'Test'
  });
  expect(response.status).toBe(401); // 401 يعني غير مصرح له
});
});