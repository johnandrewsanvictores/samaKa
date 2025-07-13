import express from 'express';
import passport from './controllers/auth.js'
import session from 'express-session';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import barangayRoutes from './routes/barangay.js';
import rewardRoutes from './routes/rewards.js';
import eventRoutes from './routes/events.js';


//import emailRoutes from './routes/email.js';
import cookieParser from "cookie-parser";
import { URL } from 'url';
import connectDbB from "./config/db.js";
import path from "path";

dotenv.config();
const app = express();

connectDbB();



app.use(express.urlencoded({ extended: true }));
app.use('/rewards', express.static(path.join(process.cwd(), 'uploads', 'rewards')));
app.use('/eventCover', express.static(path.join(process.cwd(), 'uploads', 'eventCover')));
app.use('/receipt', express.static(path.join(process.cwd(), 'uploads', 'receipt')));

app.use(express.json());


const allowedOrigins = [process.env.FRONTEND_BASE_URL || 'http://localhost:5173'];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin like mobile apps or curl requests
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(cookieParser());


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 1000 * 60 * 60
    }
}));

app.use(passport.initialize());
app.use(passport.session());


// app.use((req, res, next) => {
//     const allowed = new Set([
//         'http://localhost:5173',
//         'https://johnandrew.vercel.app',
//     ]);
//     const source = req.get('Origin') || req.get('Referer') || '';
//     let origin;
//     try {
//         origin = new URL(source).origin;   // normalises trailing slash, paths, etc.
//     } catch {
//         return res.status(403).json({ status: 'fail', msg: 'Bad Origin header' });
//     }
//     if (!allowed.has(origin)) {
//         return res.status(403).json({ status: 'fail', msg: 'Forbidden request origin' });
//     }
//     next();
// });

app.use("/auth", authRoutes);
app.use("/barangay", barangayRoutes);
app.use("/reward", rewardRoutes);
app.use("/event", eventRoutes);

//app.use("/mail", emailRoutes)

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
