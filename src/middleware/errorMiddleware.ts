import { Request, Response, NextFunction } from 'express';

export const asyncHandler =
<<<<<<< HEAD
    (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
=======
    (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) => 
    (req: Request, res: Response, next: NextFunction) =>
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
        Promise.resolve(fn(req, res, next)).catch(next);

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404);
    next(new Error(`Ruta no encontrada - ${req.originalUrl}`));
};

<<<<<<< HEAD
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
=======
export const errorHandler = (err: Error, req: Request, res: Response) => {
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        success: false,
        error: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
};
