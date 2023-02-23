process.stdout.write('\033c');//only using in mode dev

const server = require('./src/app.js');
const {db} = require('./src/db.js');
const fs = require('fs');
const path = require('path');
const port = process.env.DB_PORT || 7000;

// Syncing all the models at once.

db.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`Database and Server running on port ${port}`); // eslint-disable-line no-console
  });
});




 const Load =require('./src/Utils/Load.js')
 Load()



