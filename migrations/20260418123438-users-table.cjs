exports.up = function(db) {
  return db.createTable('users', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    firstName: { type: 'string', length: 100 },
    lastName: { type: 'string', length: 100 },
    password: { type: 'string' }
  });
};
exports.down = function(db) { return db.dropTable('users'); };