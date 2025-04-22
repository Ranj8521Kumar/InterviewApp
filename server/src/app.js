import express, { json } from 'express';
import { connect } from 'mongoose';
import interviewRoutes from './routes/interview.routes.js';

const app = express();

app.use(json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/interview', interviewRoutes);


connect(process.env.MONGO_URI).then(
    () => {
        console.log('Connected to MongoDB');
    },
    (err) => {
        console.log('Error connecting to MongoDB', err);
    }
)

export default app;