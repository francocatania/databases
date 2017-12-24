var models = require('../models');





var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};



module.exports = {
  messages: {

    get: function (req, res) {
      models.messages.get((result) => {
        res.writeHead(200, defaultCorsHeaders);
        var mappedResults = result.map((eachValue) => {
          return {
            username: eachValue.username,
            text: eachValue.msg_text,
            roomname: eachValue.room 
          }
        })
        res.end(JSON.stringify({results: mappedResults}));
      })
    },


    post: function (req, res) {
      console.log('req.body = ', req.body);
      req.on('data', function (chunk) {
        var parsedData = JSON.parse(chunk);
        console.log(parsedData);
        models.messages.post(parsedData.username, parsedData.text, parsedData.roomname);
      });
      res.end('{}');
    }
  },


  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

