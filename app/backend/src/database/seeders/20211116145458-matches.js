/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'matches',
      [
        {
          home_team: 17,
          home_team_goals: 2,
          away_team: 10,
          away_team_goals: 1,
          in_progress: false,
        },
        {
          home_team: 1,
          home_team_goals: 0,
          away_team: 12,
          away_team_goals: 3,
          in_progress: false,
        },
        {
          home_team: 5,
          home_team_goals: 2,
          away_team: 19,
          away_team_goals: 1,
          in_progress: false,
        },
        {
          home_team: 6,
          home_team_goals: 2,
          away_team: 4,
          away_team_goals: 1,
          in_progress: false,
        },
        {
          home_team: 2,
          home_team_goals: 2,
          away_team: 14,
          away_team_goals: 0,
          in_progress: false,
        },
        {
          home_team: 13,
          home_team_goals: 1,
          away_team: 16,
          away_team_goals: 1,
          in_progress: false,
        },
        {
          home_team: 3,
          home_team_goals: 1,
          away_team: 20,
          away_team_goals: 2,
          in_progress: false,
        },
        {
          home_team: 11,
          home_team_goals: 3,
          away_team: 8,
          away_team_goals: 0,
          in_progress: false,
        },
        {
          home_team: 7,
          home_team_goals: 2,
          away_team: 9,
          away_team_goals: 1,
          in_progress: false,
        },
        {
          home_team: 15,
          home_team_goals: 1,
          away_team: 18,
          away_team_goals: 0,
          in_progress: false,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('matches', null, {});
  },
};
