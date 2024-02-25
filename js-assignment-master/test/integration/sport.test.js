const { getAllSportsToursAndMatches } = require('../../src/controllers/sport');
const Sport = require('../../src/models/sport');

jest.mock('../../src/models/sport');

describe('getAllSportsToursAndMatches function', () => {
  it('should return a structured object of sports, tours and matches', async () => {
    const mockMatches = [
      { sportName: 'Cricket', tourName: 'IPL', matchName: 'RCB vs MI', matchId: 1, startTime: '2022-04-01T10:00:00Z', format: 'T20' },
      { sportName: 'Cricket', tourName: 'IPL', matchName: 'KKR vs CSK', matchId: 2, startTime: '2022-04-02T10:00:00Z', format: 'T20' },
    ];
    Sport.getAllSportsToursAndMatches.mockResolvedValue(mockMatches);

    const result = await getAllSportsToursAndMatches();

    expect(result).toEqual({
      Cricket: {
        IPL: [
          { matchName: 'RCB vs MI', matchId: 1, startTime: '2022-04-01T10:00:00Z', format: 'T20' },
          { matchName: 'KKR vs CSK', matchId: 2, startTime: '2022-04-02T10:00:00Z', format: 'T20' },
        ],
      },
    });
  });
});