// back-end의 시작점. 

const express =require(`express`)
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://scott:tiger@boilderplate.asxrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopoLogy: true, useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected....'))
  .catch(err => console.log(err))


app.get('/', (req,res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))