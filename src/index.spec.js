const request = require('supertest');
const expect = require('chai').expect;
const app = require('./index');

describe('GET /', function () {
  before(() => {
    console.log('before hook');
  });
  after(() => {
    console.log('after hook');
  });
  beforeEach(() => {
    console.log('beforeEach hook');
  });
  afterEach(() => {
    console.log('afterEach hook');
  });

  it('should respond with text message "Hello World"', (done) => {
		request(app)
			.get('/')
			.expect(200)
			.end((err, res) => {
				if (err) {
					done(err);
					return;
				}

				expect(res.text).to.equal('Hello World');
				done();
			});
	});
});