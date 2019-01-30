const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);

describe('file list requests', function () {
  it('Should respond with a file with the title "aplication / json" and status 200', function (done) {
    chai.request('http://localhost:3300')
      .get('/list')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res).to.have.header('Content-Type', 'aplication/json');
        done();
      });
  });

  it('Should answer status 404 not found', function (done) {
    chai.request('http://localhost:3300')
      .post('/list')
      .end(function (err, res) {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe('file creation requests', function () {
  it('Should answer status 201 created', function (done) {
    chai.request('http://localhost:3300')
      .post('/create')
      .send({ fileName: "super.js", fileData: "12345" })
      .end(function (err, res) {
        expect(res).to.have.status(201);
        done();
      });
  });

  it('Should answer status 404', function (done) {
    chai.request('http://localhost:3300')
      .get('/create')
      .end(function (err, res) {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe('file edit requests', function () {
  it('Should answer status 200 ok', function (done) {
    chai.request('http://localhost:3300')
      .put('/update')
      .send({ fileName: "super.js", fileData: "1111111" })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Should answer status 400', function (done) {
    chai.request('http://localhost:3300')
      .put('/update')
      .send({ fileName: "supeeeer.js", fileData: "1111111" })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        done();
      });
  });
});

describe('file delete requests', function () {
  it('Should answer status 200 ok', function (done) {
    chai.request('http://localhost:3300')
      .delete('/delete')
      .send({ fileName: "super.js" })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Should answer status 400', function (done) {
    chai.request('http://localhost:3300')
      .delete('/delete')
      .send({ fileName: "super.js" })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        done();
      });
  });
});