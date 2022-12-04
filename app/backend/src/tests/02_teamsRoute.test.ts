import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
// import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import TeamModel from '../database/models/Teams.model';
import { teamListMock, teamListOk, teamMock } from './mocks/Teams.mocks'

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testa a rota /teams', () => {

  let chaiHttpResponse: Response;

  it('7. A rota teams existe e retorna uma lista de times', async () => {
    sinon
    .stub(TeamModel, "findAll")
    .resolves( [...teamListMock] as Array<any>);

    chaiHttpResponse = await chai.request(app).get('/teams');
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(teamListOk);

    sinon.restore();
  });

  it('8. A rota teams/:id retorna erro para id inexistente', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams/18');
    
    expect(chaiHttpResponse.body).to.deep.equal({ message: 'Incorrect team id' });
    expect(chaiHttpResponse.status).to.be.equal(400);
  });


  it('9. A rota teams/:id retorna informação de um time', async () => {
    sinon
    .stub(TeamModel, "findOne")
    .resolves( { ...teamMock } as any);

    chaiHttpResponse = await chai.request(app).get('/teams/1');

    expect(chaiHttpResponse.body).to.deep.equal({ id: 1, teamName: 'Avaí/Kindermann' });
    expect(chaiHttpResponse.status).to.be.equal(200);

    sinon.restore()
  });
})