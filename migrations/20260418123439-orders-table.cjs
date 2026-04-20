exports.up = function(db) {
  return db.createTable('orders', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    status: { type: 'string', length: 20 },
    user_id: { type: 'int', foreignKey: { name: 'orders_user_id_fk', table: 'users', mapping: 'id', rules: { onDelete: 'CASCADE' } } }
  });
};
exports.down = function(db) { return db.dropTable('orders'); };