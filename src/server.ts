import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import product_routes from './handlers/product.js'; 
import user_routes from './handlers/user.js';
import order_routes from './handlers/order.js'; 

const app: express.Application = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', function (req: Request, res: Response) {
    res.send('Storefront API - Status: Online');
});

// تفعيل المسارات
product_routes(app);
user_routes(app);
order_routes(app); // إذا لسا هون فيه خطأ، بكون السبب من ملف الـ handler نفسه

app.listen(port, function () {
    console.log(`starting app on: localhost:${port}`);
});

export default app;