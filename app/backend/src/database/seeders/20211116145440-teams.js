/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'teams',
      [
        {
          team_name: 'América-MG',
        },
        {
          team_name: 'Athletico-PR',
        },
        {
          team_name: 'Atlético-MG',
        },
        {
          team_name: 'Bahia',
        },
        {
          team_name: 'Botafogo',
        },
        {
          team_name: 'Bragantino Red Bull',
        },
        {
          team_name: 'Corinthians',
        },
        {
          team_name: 'Coritiba',
        },
        {
          team_name: 'Cruzeiro',
        },
        {
          team_name: 'Cuiabá',
        },
        {
          team_name: 'Flamengo',
        },
        {
          team_name: 'Fluminense',
        },
        {
          team_name: 'Fortaleza',
        },
        {
          team_name: 'Goiás',
        },
        {
          team_name: 'Grêmio',
        },
        {
          team_name: 'Internacional',
        },
        {
          team_name: 'Palmeiras',
        },
        {
          team_name: 'Santos',
        },
        {
          team_name: 'São Paulo',
        },
        {
          team_name: 'Vasco',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('teams', null, {});
  },
};
