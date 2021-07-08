require('./database')
const app = require('./app.js')



app.listen(app.get('port'))
console.log(`server port on ${app.get('port')}`);

