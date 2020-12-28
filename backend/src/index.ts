import express from 'express';
import {Request, Response} from "express-serve-static-core"
 
const app = express();
const port = 3000;

app.use('/dish', require('./routes/addDish'));
 
app.listen(port, () => console.log(`Server is running on port ${port}`));