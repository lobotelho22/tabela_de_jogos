import { IMatch } from '../../interfaces/index';
import MatchModel from '../models/Matches.model';
import TeamModel from '../models/Teams.model';

class MatchesService {
  public static async getAllMatches(): Promise<IMatch[] | []> {
    const matchesData = await MatchModel.findAll({ include: [
      { model: TeamModel, as: 'home_team' },
      { model: TeamModel, as: 'away_team' },
    ] });

    const matchesList = matchesData.map((match) => {
      const { id, homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress } = match.dataValues;

      return { id,
        homeTeam,
        homeTeamGoals,
        awayTeam,
        awayTeamGoals,
        inProgress,
        teamHome: { teamName: match.dataValues.home_team.teamName },
        teamAway: { teamName: match.dataValues.away_team.teamName },
      };
    });

    return matchesList;
  }
}

export default MatchesService;
