import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';

import { Response } from 'superagent';
import MatchModel from '../database/models/Matches.model';
import { allMatchesMock, equalTeamsBody, finishMatchOk, invalidIdReturn, invalidTeamBody, matchesDataMock, teamBodyOk, validateTokenFail, validateTokenReturnOk, validToken } from './mocks/Matches.mock';
import validationFunctions from '../middlewares/validations.middleware';
import { JwtPayload } from 'jsonwebtoken';
import { EQUAL_TEAMS_MSG, NO_TEAM_MSG, FINISHED_MESSAGE } from '../utils/globalConstants';
import TeamsService from '../database/services/Teams.service';
import { IReturnInfo } from '../interfaces';
import MatchesService from '../database/services/Matches.service';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testa o endpopint /Matches', () => {

  let chaiHttpResponse: Response;

  it('10. O endpoint matches existe e retorna uma lista de todas as partidas', async () => {

    sinon
    .stub(MatchModel, "findAll")
    .resolves([
      ...matchesDataMock
    ] as any);

    chaiHttpResponse = await chai.request(app).get('/matches');
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(allMatchesMock);

    sinon.restore();
  });

  it('11. O endpoint matches permite buscas pela query "inProgress=false"', async () => {

    sinon
    .stub(MatchModel, "findAll")
    .resolves([
      matchesDataMock[0]
    ] as any);

    chaiHttpResponse = await chai.request(app).get('/matches').query({ inProgress: false });

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal([allMatchesMock[0]]);

    sinon.restore();
  });

  it('12. O endpoint matches permite buscas pela query "inProgress=true"', async () => {

    sinon
    .stub(MatchModel, "findAll")
    .resolves([
      matchesDataMock[1]
    ] as any);

    chaiHttpResponse = await chai.request(app).get('/matches').query({ inProgress: true });

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal([allMatchesMock[1]]);

    // sinon.restore();
  });


  it('13. Verifica que o endopint não aceita um token inválido', async() => {

    sinon
      .stub(TeamsService, "getTeamById")
      .resolves({ statusCode: 200} as IReturnInfo)

    sinon
      .stub(validationFunctions, "validateTokenMid")
      .resolves(validateTokenFail as string)

    chaiHttpResponse = await chai
      .request(app)
      .post('/matches')
      .set("Authorization", 'invalidToken')
      .send(teamBodyOk)

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal({ message: 'Token must be a valid token' });

    sinon.restore();
  })

  it('14. Verifica que não é possível cadastrar uma partida entre times iguais', async() => {

    sinon
      .stub(validationFunctions, "validateTokenMid")
      .resolves(validateTokenReturnOk as JwtPayload)

    chaiHttpResponse = await chai
      .request(app)
      .post('/matches')
      .set("Authorization", validToken)
      .send(equalTeamsBody)

    expect(chaiHttpResponse.status).to.be.equal(422);
    expect(chaiHttpResponse.body).to.deep.equal(EQUAL_TEAMS_MSG);

    sinon.restore();
  })

  it('15. Verifica que não é possível cadastrar uma partida com um time inválido', async() => {

    sinon
      .stub(validationFunctions, "validateTokenMid")
      .resolves(validateTokenReturnOk as JwtPayload)

    sinon
      .stub(TeamsService, "getTeamById")
      .resolves(invalidIdReturn as any)

    chaiHttpResponse = await chai
      .request(app)
      .post('/matches')
      .set("Authorization", validToken)
      .send(invalidTeamBody)

    expect(chaiHttpResponse.status).to.be.equal(404); 
    expect(chaiHttpResponse.body).to.deep.equal(NO_TEAM_MSG);

    sinon.restore();
  })

  it('16. Testa se endpoint "matches/:id/finish" finaliza uma partida', async () => {
    sinon
      .stub(MatchesService, "finishMatch")
      .resolves(finishMatchOk as IReturnInfo)
    
    chaiHttpResponse = await chai
      .request(app)
      .patch('/matches/16/finish')
    
    expect(chaiHttpResponse.status).to.be.equal(200); 
    expect(chaiHttpResponse.body).to.deep.equal(FINISHED_MESSAGE);
  })
})