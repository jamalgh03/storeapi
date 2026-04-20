import { UserStore } from '../models/user.js';

const store = new UserStore();

describe("User Model", () => {
  it('should create a user and hash the password', async () => {
    const result = await store.create({
      firstName: 'Jamal',
      lastName: 'Ghazawneh',
      password: 'password123'
    });
    expect(result.password).not.toBe('password123');
  });

  it('should authenticate user with correct password', async () => {
    const result = await store.authenticate('Jamal', 'Ghazawneh', 'password123');
    expect(result).not.toBeNull();
  });
});