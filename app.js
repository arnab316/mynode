const express = require('express');
const app = express()
const port = 3005;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.set('views', 'views')
const admin = require('./router/admin');
app.use(admin.routes)

app.use(require('./router/users'))

app.listen(port,()=>{
    console.log(`app lisenting at ${port}`);
})

