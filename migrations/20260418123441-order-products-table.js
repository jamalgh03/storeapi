export const up = function(db) {
  return db.createTable('order_products', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    quantity: { type: 'int', notNull: true },
    order_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'order_products_order_id_fk',
        table: 'orders',
        rules: { onDelete: 'CASCADE', onUpdate: 'RESTRICT' },
        mapping: 'id'
      }
    },
    product_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'order_products_product_id_fk',
        table: 'products',
        rules: { onDelete: 'CASCADE', onUpdate: 'RESTRICT' },
        mapping: 'id'
      }
    }
  });
};

export const down = function(db) {
  return db.dropTable('order_products');
};