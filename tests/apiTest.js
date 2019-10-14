const request = require('supertest');

const app = require('../src/app');

/**
 * Base route test
 */
describe('GET /', function () {
    it('respond 200', function (done) {
        request(app)
            .get('/')
            .expect(200, done);
    });
});
