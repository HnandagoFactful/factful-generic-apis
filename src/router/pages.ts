import Express from 'express';

const pagesRouter = Express.Router();

pagesRouter.get('/', (req: Express.Request, res: Express.Response, next) => {
    res.send('true')
})

export default pagesRouter; 