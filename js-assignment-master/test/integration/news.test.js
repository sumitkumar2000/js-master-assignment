const request = require('supertest');
const { app } = require('../../index');
const News = require('../../src/models/news');

jest.mock('../../src/models/news');

describe('News API', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should create news', async () => {
    const mockNews = { title: 'Test title', description: 'Test description', matchId: 1, tourId: 1, sportId: 1 };
    await News.createNews.mockResolvedValue(mockNews);

    const response = await request(server)
      .post('/news')
      .send(mockNews);
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual("News created successfully");
  });

  it('should get news by match id', async () => {
    const mockNews = [{ title: 'Test title', description: 'Test description', matchId: 1, tourId: 1, sportId: 1 }];
    News.getNewsByMatchId.mockResolvedValue(mockNews);

    const response = await request(server).get('/news/match/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockNews);
  });

  it('should get news by tour id', async () => {
    const mockNews = [{ title: 'Test title', description: 'Test description', matchId: 1, tourId: 1, sportId: 1 }];
    News.getNewsByTourId.mockResolvedValue(mockNews);

    const response = await request(server).get('/news/tour/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockNews);
  });

  it('should get news by sport id', async () => {
    const mockNews = [{ title: 'Test title', description: 'Test description', matchId: 1, tourId: 1, sportId: 1 }];
    News.getNewsBySportId.mockResolvedValue(mockNews);

    const response = await request(server).get('/news/sport/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockNews);
  });
});