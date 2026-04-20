import { ProductStore } from '../../models/product.js';

const store = new ProductStore();

describe("Product Model", () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('create method should add a product', async () => {
    const result = await store.create({
      name: 'Test Coffee',
      price: 15,
      category: 'Drinks'
    });
    expect(result.name).toEqual('Test Coffee');
  });

  it('index method should return a list of products', async () => {
    const result = await store.index();
    expect(result.length).toBeGreaterThan(0);
  });
});