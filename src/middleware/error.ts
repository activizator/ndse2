export const errorMiddleware = (req: any, res: any) => {
    res.status(404);
    res.json({ title: '404 | страница не найдена' });
};
