import express from 'express';
import {Request, Response} from 'express-serve-static-core';

const router = express.Router();

router.get('/add', (request: Request, response: Response) => {
  response.send('Hello world!');
});

// Export the router
export = router;