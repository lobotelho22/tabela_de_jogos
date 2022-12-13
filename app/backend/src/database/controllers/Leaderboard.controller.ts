import { Request, Response } from 'express';
import LeaderboardService from '../services/Leaderboard.service';

class LeaderboardController {
  public static async HomeStats(req: Request, res: Response) {
    const dataHomeMatches = await LeaderboardService.getDataHomeMatches();
    dataHomeMatches.sort((a, b) => LeaderboardService.sortLeaderboard(a, b));
    return res.status(200).json(dataHomeMatches);
  }

  public static async AwayStats(req: Request, res: Response) {
    const dataAwayMatches = await LeaderboardService.getDataAwayMatches();
    dataAwayMatches.sort((a, b) => LeaderboardService.sortLeaderboard(a, b));
    return res.status(200).json(dataAwayMatches);
  }
}

export default LeaderboardController;
