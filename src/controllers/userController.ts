import { Request, Response } from 'express';
import { User } from '../models/User';
import { asyncHandler } from '../middleware/errorMiddleware';

export const getUsers = asyncHandler(async (req: Request, res: Response) => {
    const users = User.findAll();
    res.json({ success: true, count: users.length, data: users });
});

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
    const user = User.findById(Number(req.params.id));
    if (!user) {
        res.status(404);
        throw new Error('Usuario no encontrado');
    }
    res.json({ success: true, data: user });
});

export const createUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        res.status(400);
        throw new Error('Por favor proporciona name, email y age');
    }
    const user = User.create({ name, email, age });
    res.status(201).json({ success: true, data: user });
});

export const updateUser = asyncHandler(async (req: Request, res: Response) => {
    const user = User.update(Number(req.params.id), req.body);
    if (!user) {
        res.status(404);
        throw new Error('Usuario no encontrado');
    }
    res.json({ success: true, data: user });
});

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
    const deleted = User.delete(Number(req.params.id));
    if (!deleted) {
        res.status(404);
        throw new Error('Usuario no encontrado');
    }
    res.json({ success: true, message: 'Usuario eliminado' });
});
