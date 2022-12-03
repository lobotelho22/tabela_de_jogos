import * as express from 'express';
import LoginController from './database/controllers/Login.controller';
import validateLoginData from './middlewares/ValidateLoginData.middleware';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.post('/login', validateLoginData, LoginController.login);
    this.app.get('/login/validate', LoginController.validateRoute);
    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;
