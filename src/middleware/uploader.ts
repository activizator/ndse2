import multer from 'multer';

const storage = multer.diskStorage({
    destination (req, file, cb) {
        cb(null, 'books');
    },
    filename (req, file, cb) {
        const { id } = req.params;
        cb(null, `${id}.txt`);
    }
});

const allowedTypes = ['text/plain'];

const fileFilter = (req: any, file: any, cb: any) => {
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

export const fileMiddleware = multer({
    storage, fileFilter
});
