import { IMatch } from '../interfaces/index';
import MatchModel from '../database/models/Matches.model';

function createMatchesList(matchesData: MatchModel[]): IMatch[] | [] {
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

export default createMatchesList;
