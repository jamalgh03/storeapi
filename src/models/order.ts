import Client from '../database.js';

export type Order = {
  id?: number;
  status: string;
  user_id: string; 
};

export class OrderStore {
  // تم تغيير الاسم من getOrdersByUser إلى currentOrder ليطابق الـ Handler
  async currentOrder(userId: string): Promise<Order[]> {
    try {
      const conn = await Client.connect();
      // في العادة الـ current order هو اللي حالته 'active'
      const sql = 'SELECT * FROM orders WHERE user_id=($1) AND status=($2)';
      const result = await conn.query(sql, [userId, 'active']);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get current orders for user ${userId}. Error: ${err}`);
    }
  }

  // ميثود لإنشاء طلب جديد
  async create(o: Order): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql = 'INSERT INTO orders (status, user_id) VALUES($1, $2) RETURNING *';
      const result = await conn.query(sql, [o.status, o.user_id]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Could not add new order. Error: ${err}`);
    }
  }

  // ميثود إضافية لجلب كل الطلبات (Index) عشان مشروعك يكون كامل
  async index(): Promise<Order[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM orders';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get orders. Error: ${err}`);
    }
  }
}

