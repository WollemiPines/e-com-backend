const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

sequelize.sync({ force: false }).then(() => { 
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
 })

