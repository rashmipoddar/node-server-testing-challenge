const request = require('supertest');

const server = require('./server');

describe('it should check the environment', () => {
  it('should set db environment to testing', function() {
    expect(process.env.DB_ENV).toBe('testing');
  })
})