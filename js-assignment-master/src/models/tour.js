const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
    //pagination for fetching data decrease the load on server
    const pageSize = params.pageSize || 10; // default page size is 10
    const pageNumber = params.pageNumber || 1; // default to page 1
    const offset = (pageNumber - 1) * pageSize;
    const statement = 'select m.name ,m.tourId, m.format, m.startTime, m.endTime from matches m inner join tours on m.tourId = tours.id where tours.name = ? limit ? offset ?';
    const parameters = [ params.name, parseInt(pageSize), parseInt(offset) ];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}