import * as express from 'express';
import LeaderboardController from './database/controllers/Leaderboard.controller';
import LoginController from './database/controllers/Login.controller';
import MatchesController from './database/controllers/Matches.controller';
import TeamsController from './database/controllers/Teams.controller';
import validateLoginData from './middlewares/ValidateLoginData.middleware';
import validationFunctions from './middlewares/validations.middleware';

const { validateTeamsId, validateTokenMid } = validationFunctions;

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.post('/login', validateLoginData, LoginController.login);
    this.app.get('/login/validate', LoginController.validateRoute);

    this.app.get('/teams', TeamsController.listAllTeams);
    this.app.get('/teams/:id', TeamsController.listOneTeam);

    this.app.get('/matches', MatchesController.listMatches);
    this.app.post('/matches', validateTeamsId, validateTokenMid, MatchesController.saveMatchInfo);

    this.app.patch('/matches/:id/finish', MatchesController.finishMatchById);
    this.app.patch('/matches/:id', MatchesController.editMatchScore);

    this.app.get('/leaderboard/home', LeaderboardController.HomeStats);
    this.app.get('/leaderboard/away', LeaderboardController.AwayStats);
    this.app.get('/leaderboard', LeaderboardController.AllStats);
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
