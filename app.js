const express = require('express');
const app = express();
const sequelize = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller');
const json = require('body-parser').json;
const sessionValidator = require('./middleware/validate-session');


try {
    sequelize.authenticate()
        .then(() => console.log("Connected to DB"))
} catch (err) {
    console.log(`Error: ${err}`);
}
sequelize.sync();
app.use(json());
app.use('/api/auth', user);
app.use(sessionValidator);
app.use('/api/game', game);
app.listen(4000, function () {
    console.log("App is listening on 4000");
})
