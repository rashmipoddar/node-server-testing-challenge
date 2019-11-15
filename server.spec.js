const request = require('supertest');

const server = require('./server');
const db = require('./data/dbConfig');

describe('it should check the environment', () => {
  it('should set db environment to testing', function() {
    expect(process.env.DB_ENV).toBe('testing');
  })
})

describe('server endpoints testing', () => {
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
        expect(res.body.length).toEqual(2);
      })
      // .catch(err => {
      //   expect(res.status).toBe(200);
      // })  
    });

    it('should return json formatted data', async() => {
      const res = await request(server).get('/blogs');
      expect(res.type).toMatch(/json/i);
    });

    it('should return array of blogs', async () => {
      const res = await request(server).get('/blogs');
      expect(res.body.length).toBeDefined();
      expect(res.body[0]).toHaveProperty('title');
    });

  });

  describe('add a blog', () => {
    describe('POST /blogs', () => {
      const blog = {title: 'Blog 1'};
        beforeEach(async () => {
            await db('blogs').truncate();
        });

        it('should return status 201', async () => {
          const res = await request(server)
              .post('/blogs')
              .send(blog);
          expect(res.status).toBe(201);
      });
    })
  });

});

