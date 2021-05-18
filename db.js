const Sequelize = require('sequelize');
const user = require('./ignore/user');
const Op = Sequelize.Op;

const sequelize = new Sequelize(
    user.db_name,
    user.name,
    user.password,
    {
        host: 'localhost',
        dialect: 'postgres',
        operatorsAliases: {
            $and: Op.and,
            $or: Op.or,
            $eq: Op.eq,
            $gt: Op.gt,
            $lt: Op.lt,
            $lte: Op.lte,
            $like: Op.like
        }

    })

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)

module.exports = sequelize;