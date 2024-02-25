const mysql = require('../lib/mysql');

const createNews = async (params) => {
    const statement = 'INSERT INTO news (title, description, matchId, tourId, sportId) VALUES (?, ?, ?, ?, ?)';
    const parameters = [ params.title, params.description, params.matchId, params.tourId, params.sportId ];
    return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async (params) => {
    const statement = 'SELECT * FROM news WHERE matchId = ?';
    const parameters = [ params.matchId ];
    return await mysql.query(statement, parameters);
}

const getNewsByTourId = async (params) => {
    const statement = 'SELECT * FROM news WHERE tourId = ?';
    const parameters = [ params.tourId ];
    return await mysql.query(statement, parameters);
}

const getNewsBySportId = async (params) => {
    const statement = 'SELECT * FROM news WHERE sportId = ?';
    const parameters = [ params.sportId ];
    return await mysql.query(statement, parameters);
}

module.exports = {
    createNews: createNews,
    getNewsByMatchId:getNewsByMatchId,
    getNewsByTourId:getNewsByTourId,
    getNewsBySportId,getNewsBySportId
}