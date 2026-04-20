import Client from '../database.js'; // تأكد من إضافة .js في النهاية بسبب إعدادات المشروع

// تعريف شكل المنتج في الكود
export type Product = {
  id?: number;
  name: string;
  price: number;
  category?: string;
};

export class ProductStore {
  // 1. عرض كل المنتجات
  async index(): Promise<Product[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM products';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get products. Error: ${err}`);
    }
  }

  // 2. عرض منتج واحد فقط
  async show(id: string): Promise<Product> {
    try {
      const sql = 'SELECT * FROM products WHERE id=($1)';
      const conn = await Client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find product ${id}. Error: ${err}`);
    }
  }

  // 3. إضافة منتج جديد (مطلوب للـ Rubric)
  async create(p: Product): Promise<Product> {
    try {
      const sql = 'INSERT INTO products (name, price, category) VALUES($1, $2, $3) RETURNING *';
      const conn = await Client.connect();
      const result = await conn.query(sql, [p.name, p.price, p.category]);
      const product = result.rows[0];
      conn.release();
      return product;
    } catch (err) {
      throw new Error(`Could not add new product ${p.name}. Error: ${err}`);
    }
  }
}