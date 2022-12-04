import createMatchesList from '../../utils/createMatchesList';
import { IMatch } from '../../interfaces/index';
import MatchModel from '../models/Matches.model';
import TeamModel from '../models/Teams.model';

class MatchesService {
  public static async getAllMatches(): Promise<IMatch[] | []> {
    const matchesData = await MatchModel.findAll({ include: [
      { model: TeamModel, as: 'home_team' },
      { model: TeamModel, as: 'away_team' },
    ] });

    const matchesList = createMatchesList(matchesData);

    return matchesList;
  }

  public static async getMatchesInProgress() {
    const matchesData = await MatchModel.findAll({ include: [
      { model: TeamModel, as: 'home_team' },
      { model: TeamModel, as: 'away_team' },
    ],
    where: { inProgress: true },
    });

    const matchesList = createMatchesList(matchesData);

    return matchesList;
  }

  public static async getMatchesNotInProgress() {
    const matchesData = await MatchModel.findAll({ include: [
      { model: TeamModel, as: 'home_team' },
      { model: TeamModel, as: 'away_team' },
    ],
    where: { inProgress: false },
    });

    const matchesList = createMatchesList(matchesData);

    return matchesList;
  }
}

export default MatchesService;
