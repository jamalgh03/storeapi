import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const up = function(db) {
  return db.createTable('products', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: { type: 'string', length: 255 },
    price: { type: 'int' },
    category: { type: 'string', length: 100 }
  });
};

export const down = function(db) {
  return db.dropTable('products');
};