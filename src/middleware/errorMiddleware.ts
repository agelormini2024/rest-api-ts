import { Request, Response, NextFunction } from 'express';

export const asyncHandler =
    (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) => 
    (req: Request, res: Response, next: NextFunction) =>
        Promise.resolve(fn(req, res, next)).catch(next);

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404);
    next(new Error(`Ruta no encontrada - ${req.originalUrl}`));
};

export const errorHandler = (err: Error, req: Request, res: Response) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        success: false,
        error: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
};
