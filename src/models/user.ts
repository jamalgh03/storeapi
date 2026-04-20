import Client from '../database.js';
import bcrypt from 'bcrypt';

const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;

export type User = {
  id?: number;
  firstName: string;
  lastName: string;
  password?: string;
};

export class UserStore {
  // ميثود الإنشاء (Create) - ضرورية جداً للتست تبعك
  async create(u: User): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = 'INSERT INTO users (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *';
      
      // تشفير الباسورد قبل الحفظ
      const hash = bcrypt.hashSync(`${u.password}${BCRYPT_PASSWORD}`, parseInt(SALT_ROUNDS as string));
      
      const result = await conn.query(sql, [u.firstName, u.lastName, hash]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(`Could not add new user ${u.firstName}. Error: ${err}`);
    }
  }

  // ميثود الـ Authenticate اللي ضفناها قبل
  async authenticate(firstName: string, lastName: string, password: string): Promise<User | null> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users WHERE firstName=($1) AND lastName=($2)';
      const result = await conn.query(sql, [firstName, lastName]);

      if (result.rows.length) {
        const user = result.rows[0];
        if (bcrypt.compareSync(`${password}${BCRYPT_PASSWORD}`, user.password)) {
          return user;
        }
      }
      conn.release();
      return null;
    } catch (err) {
      throw new Error(`Could not authenticate user. Error: ${err}`);
    }
  }

  // ميثود الـ Index (اختيارية بس مفيدة للمشروع)
  async index(): Promise<User[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT id, firstName, lastName FROM users';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get users. Error: ${err}`);
    }
  }
}