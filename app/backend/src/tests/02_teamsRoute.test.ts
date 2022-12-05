import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
// import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import TeamModel from '../database/models/Teams.model';
import { infoTeamOk, teamListMock, teamListOk, teamMock } from './mocks/Teams.mocks'
import { ERROR_TEAM_ID } from '../utils/globalConstants';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testa o endpoint /teams', () => {

  let chaiHttpResponse: Response;

  it('7. O endpoint teams existe e retorna uma lista de times', async () => {
    sinon
    .stub(TeamModel, "findAll")
    .resolves( [...teamListMock] as Array<any>);

    chaiHttpResponse = await chai.request(app).get('/teams');
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(teamListOk);

    sinon.restore();
  });

  it('8. O endpoint teams/:id retorna erro para id inexistente', async () => {
    sinon
    .stub(TeamModel, "findOne")
    .resolves( null as any);
    
    chaiHttpResponse = await chai.request(app).get('/teams/18');
    
    expect(chaiHttpResponse.body).to.deep.equal(ERROR_TEAM_ID);
    expect(chaiHttpResponse.status).to.be.equal(400);
    
    sinon.restore();
  });


  it('9. O endpoint teams/:id retorna informação de um time', async () => {
    sinon
    .stub(TeamModel, "findOne")
    .resolves( { ...teamMock } as any);

    chaiHttpResponse = await chai.request(app).get('/teams/1');

    expect(chaiHttpResponse.body).to.deep.equal(infoTeamOk);
    expect(chaiHttpResponse.status).to.be.equal(200);

    sinon.restore()
  });
})