import { OrderStore } from '../models/order.js';

const store = new OrderStore();

describe("Order Model", () => {
  // فحص وجود الميثود بالاسم الجديد
  it('should have a currentOrder method', () => {
    expect(store.currentOrder).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });

  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  // اختبار عملي لإنشاء طلب (اختياري بس بقوي مشروعك)
  it('create method should add an order', async () => {
    const result = await store.create({
      status: 'active',
      user_id: '1' // تأكد إن يوزر رقم 1 موجود في قاعدة بيانات التست
    });
    expect(result.status).toBe('active');
  });
});