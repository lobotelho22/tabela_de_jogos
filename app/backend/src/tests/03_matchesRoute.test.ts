import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
// import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import MatchModel from '../database/models/Matches.model';
import { allMatchesMock, matchesDataMock } from './mocks/Mathes.mock';


chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testa a rota /Matches', () => {

  let chaiHttpResponse: Response;

  it('10. A rota matches existe e retorna uma lista de todas as partidas', async () => {

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

})