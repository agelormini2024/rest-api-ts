import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({ success: true, message: 'Servidor OK' });
});

export default router;
