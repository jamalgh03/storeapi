exports.up = function(db) {
  return db.createTable('products', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: { type: 'string', length: 255 },
    price: { type: 'int' },
    category: { type: 'string', length: 100 }
  });
};
exports.down = function(db) { return db.dropTable('products'); };