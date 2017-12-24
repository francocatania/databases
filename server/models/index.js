var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (cb) { 
      db.connection.query('SELECT * FROM messages', (err, result, fields) => {
        if (err) throw err;
        if (result.length !== 0) {
          cb(result);
        } else {
          console.log('No data found!');
        }

      });
    }, 


    post: function (username, msgText, room) {
      // a function which can be used to insert a message into the database

      postQuery = `INSERT INTO messages (username, msg_text, room) VALUES ('${username}', '${msgText}' , '${room}');`;
      db.connection.query(postQuery, (err, result) => {
        if (err) throw err;
        console.log('New record inserted in DB');
      });

    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


// module.exports.messages.get();




