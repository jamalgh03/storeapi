import express, { Request, Response } from 'express';
import { OrderStore, Order } from '../models/order.js';

const store = new OrderStore();

const currentOrder = async (req: Request, res: Response) => {
  try {
    // حل مشكلة الـ Type عن طريق تحويله لـ string صريحة
    const userId = req.params.userId as string;
    const orders = await store.currentOrder(userId);
    res.json(orders);
  } catch (err) {
    res.status(400).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const order: Order = {
      status: req.body.status,
      user_id: req.body.user_id
    };
    const newOrder = await store.create(order);
    res.json(newOrder);
  } catch (err) {
    res.status(400).json(err);
  }
};

const order_routes = (app: express.Application) => {
  app.get('/orders/:userId', currentOrder);
  app.post('/orders', create);
};

// هذا السطر هو اللي بحل مشكلة الـ server.ts
export default order_routes;