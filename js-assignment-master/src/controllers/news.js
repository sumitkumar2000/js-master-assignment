const News = require('../models/news');

const createNews = async (params) => {
    const { title, description, matchId, tourId, sportId } = params;

    if (!matchId|| !tourId || !sportId || !title || !description) {
        throw new Error('Missing required parameter');
    }

    return await News.createNews(params);
    
}

const getNewsByMatchId = async params => {
    const { matchId } = params;

    if (!matchId) {
        throw new Error('Missing required parameter: matchId');
    }

    return await News.getNewsByMatchId(params);
}

const getNewsByTourId = async params => {
    const { tourId } = params;

    if (!tourId) {
        throw new Error('Missing required parameter: tourId');
    }

    return await News.getNewsByTourId(params);
}

const getNewsBySportId = async params => {
    const { sportId } = params;

    if (!sportId) {
        throw new Error('Missing required parameter: sportId');
    }

    return await News.getNewsBySportId(params);
}

module.exports = {
    createNews: createNews,
    getNewsByMatchId:getNewsByMatchId,
    getNewsByTourId:getNewsByTourId,
    getNewsBySportId:getNewsBySportId
}