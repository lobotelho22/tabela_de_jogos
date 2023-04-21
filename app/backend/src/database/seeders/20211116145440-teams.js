/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'teams',
      [
        {
          team_name: 'América-MG',
          image: 'app/frontend/src/images/club_logos/america_mg.svg'
        },
        {
          team_name: 'Athletico-PR',
          image: 'app/frontend/src/images/club_logos/athletico_pr.svg'
        },
        {
          team_name: 'Atlético-MG',
          image: 'app/frontend/src/images/club_logos/atletico_mg.svg'
        },
        {
          team_name: 'Bahia',
          image: 'app/frontend/src/images/club_logos/bahia.svg'
        },
        {
          team_name: 'Botafogo',
          image: 'app/frontend/src/images/club_logos/botafogo.svg'
        },
        {
          team_name: 'Bragantino Red Bull',
          image: 'app/frontend/src/images/club_logos/bragantino.svg'
        },
        {
          team_name: 'Corinthians',
          image: 'app/frontend/src/images/club_logos/corinthians.svg'
        },
        {
          team_name: 'Coritiba',
          image: 'app/frontend/src/images/club_logos/coritiba.svg'
        },
        {
          team_name: 'Cruzeiro',
          image: 'app/frontend/src/images/club_logos/cruzeiro.svg'
        },
        {
          team_name: 'Cuiabá',
          image: 'app/frontend/src/images/club_logos/cuiaba.svg'
        },
        {
          team_name: 'Flamengo',
          image: 'app/frontend/src/images/club_logos/flamengo.svg'
        },
        {
          team_name: 'Fluminense',
          image: 'app/frontend/src/images/club_logos/fluminense.svg'
        },
        {
          team_name: 'Fortaleza',
          image: 'app/frontend/src/images/club_logos/fortaleza.svg'
        },
        {
          team_name: 'Goiás',
          image: 'app/frontend/src/images/club_logos/goias.svg'
        },
        {
          team_name: 'Grêmio',
          image: 'app/frontend/src/images/club_logos/gremio.svg'
        },
        {
          team_name: 'Internacional',
          image: 'app/frontend/src/images/club_logos/internacional.svg'
        },
        {
          team_name: 'Palmeiras',
          image: 'app/frontend/src/images/club_logos/palmeiras.svg'
        },
        {
          team_name: 'Santos',
          image: 'app/frontend/src/images/club_logos/santos.svg'
        },
        {
          team_name: 'São Paulo',
          image: 'app/frontend/src/images/club_logos/sao_paulo.svg'
        },
        {
          team_name: 'Vasco',
          image: 'app/frontend/src/images/club_logos/vasco.svg'
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('teams', null, {});
  },
};
