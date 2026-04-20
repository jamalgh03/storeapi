import express, { Request, Response } from 'express';
import { User, UserStore } from '../models/user.js';
import { verifyAuthToken } from './auth.js';
import jwt from 'jsonwebtoken';

const store = new UserStore();

const create = async (req: Request, res: Response) => {
    const user: User = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
    };
    try {
        const newUser = await store.create(user);
        const token = jwt.sign({ user: newUser }, process.env.TOKEN_SECRET as string);
        res.json(token); 
    } catch (err) {
        res.status(400).json(err);
    }
};

const index = async (_req: Request, res: Response) => {
    try {
        const users = await store.index();
        res.json(users);
    } catch (err) {
        res.status(400).json(err);
    }
};

const user_routes = (app: express.Application) => {
    app.post('/users', create);
    app.get('/users', verifyAuthToken, index); 
};

export default user_routes;