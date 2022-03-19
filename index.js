//시작점 = root directory
const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://huijeong:gksmfdltldj@boilerplate.gv54k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

//download
//expressjs -> mongoDB -> mongoose
//mongoDB application code

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//1.node다운후에 expressjs를 활용하여 간단한 어플리케이션(APP) 작동
//2.APP에 mongoDB연결하기
