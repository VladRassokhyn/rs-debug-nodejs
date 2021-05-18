1. controllers/usercontroller.js - 1 строка неверный импорт роутера, заменил на require('express').Router();

2. package.json - 10 строка не верная зависимость. Пакет 'bcryptjs' аменил на 'bcrypt'

3. controllers/usercontroller.js - 5 строка. Неверный импорт. Исправил на require('../models/user')

4. controllers/gamecontroller.js - 2 строка. Неверный импорт. Заменил на require('../models/game')

5. models/game.js - 1 строка. Не выполнен экспорт. Экспортировал с module.exports 

6. controllers/gamecontroller.js - 116 строка. Опечатка в экспорте, заменил 'routers' на 'router'

7. db.js - 19 строка. Не выполнен экспорт sequelize. Экспортировал с module.exports 

8. middleware/validate-session.js - 2 строка. Не верный импорт. заменил на require('../models/user')

