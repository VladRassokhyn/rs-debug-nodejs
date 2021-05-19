###Compiling errors
1. controllers/usercontroller.js - 1 строка неверный импорт роутера, заменил на require('express').Router();

2. package.json - 10 строка не верная зависимость. Пакет 'bcryptjs' аменил на 'bcrypt'

3. controllers/usercontroller.js - 5 строка. Неверный импорт. Исправил на require('../models/user')

4. controllers/gamecontroller.js - 2 строка. Неверный импорт. Заменил на require('../models/game')

5. models/game.js - 1 строка. Не выполнен экспорт. Экспортировал с module.exports 

6. controllers/gamecontroller.js - 116 строка. Опечатка в экспорте, заменил 'routers' на 'router'

7. db.js - 19 строка. Не выполнен экспорт sequelize. Экспортировал с module.exports 

8. middleware/validate-session.js - 2 строка. Не верный импорт. заменил на require('../models/user')

###Logic errors
1. Добавлен порт listen-а в app.js 13 строка
2. Исправлен middleware парсера  app.js 14 строка
3. Исправлена опечатка в passwordHash controllers/usercontroller.js 13 строка

##Refactor
1. var-ы заменены на const/let
2. Установлено строгое сравнение в middleware/validate-session.js строка 5
3. try/catch заменил модель проверки подключения к бд. Перенес проверку в app.js.
4. /signup роутер в controllers/sercontroller.js - убрал .then-ы, добавил try/catch блок 
5. Заменил статус код 504 на 401 при неудачной аторизации в /signin роутере в controllers/sercontroller.js
