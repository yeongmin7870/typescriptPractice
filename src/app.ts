import express, { NextFunction, Request, Response } from 'express'

const app = express();

app.use(express.json());

const middleware =
    ({ name }: { name: string }) =>
        (req: Request, res: Response, next: NextFunction) => {
            // @ts-ignore
            req.name = name
            next();
        }

function handleGetBooTwo(req: Request, res: Response, next: NextFunction) {
    console.log('second handler');

    return res.send(req.params);
}

app.use(middleware({ name: 'TomDoesTech' }));

app.get(
    '/api/books/:bookId/:authorId',
    (req: Request, res: Response, next: NextFunction) => {
        //@ts-ignore
        console.log(req.name);
        //@ts-ignore
        res.send(req.name);
    }
);



app.get('/health', (req, res) => res.sendStatus(200));
app.get('/ab*cd', (req, res) => res.send('/ab*cd'))
app.get(/abc/, (req, res) => res.send('abc'));

app.route('/')
    .get((req: Request, res: Response) => {
        return res.send('You make a Get request');
    })
    .post((req: Request, res: Response) => {
        return res.send('You make a post request');
    })
    .put((req: Request, res: Response) => {
        return res.send('You make a put request');
    })
    .all((req: Request, res: Response) => {
        return res.send('You make an x request')
    });

app.listen(3000, () => {
    console.log(`this server is running http://localhost:3000`);
});