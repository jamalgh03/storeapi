import express, { Request, Response } from 'express';
import { Product, ProductStore } from '../models/product.js';
import { verifyAuthToken } from './auth.js';

const store = new ProductStore();

const index = async (_req: Request, res: Response) => {
  try {
    const products = await store.index();
    res.json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    // استخدمنا as string لحل مشكلة النوع اللي واجهتنا قبل شوي
    const product = await store.show(req.params.id as string);
    res.json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const product: Product = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };
    const newProduct = await store.create(product);
    res.json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
};

const product_routes = (app: express.Application) => {
  app.get('/products', index);
  app.get('/products/:id', show);
  app.post('/products', verifyAuthToken, create);
};

// السطر اللي كان ناقص ومسبب الخطأ:
export default product_routes;