const request = require('supertest');

const server = require('./server');

describe('it should check the environment', () => {
  it('should set db environment to testing', function() {
    expect(process.env.DB_ENV).toBe('testing');
  })
})

describe('server', () => {
  describe('GET /', () => {
    it('should return status code 200', () => {
      return request(server)
      .get('/')
      .then(res => {
        expect(res.status).toBe(200);
      })
    });

    it('should return json formatted data', () => {
      return request(server)
      .get('/')
      .then(res => {
        expect(res.type).toMatch(/json/i);
      })
    });

    it('should return a key api with value sanity check in the body of response', () => {
      return request(server)
      .get('/')
      .then(res => {
        expect(res.body).toEqual({ api: 'sanity check', environment: 'testing' });
        expect(res.body.api).toBe('sanity check');
      })
    });
  });

  describe('GET /blogs', () => {
    it('should return status code 200', () => {
      return request(server)
      .get('/blogs')
      .then(res => {
        // console.log(res);
        expect(res.status).toBe(200);
        expect(res.type).toMatch(/json/i);
        expect(res.body.length).toEqual(2);
      })
      // .catch(err => {
      //   expect(res.status).toBe(200);
      // })
    });

  });

});

