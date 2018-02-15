//Best code ever
const handlers = { 
    thumbnail : require('../core/thumbnail'),
    review : require('../core/review'),
    auth : require('./authHandler'),
    connection : require('./connectionHandler')
};

module.exports = handlers;
