import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        console.error('JWT Error:', err);
        res.status(401).json({ error: 'Invalid token' });
    }
};

export default auth;