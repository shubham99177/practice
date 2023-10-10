require('dotenv').config()
const express = require('express')
// import { Express } from 'express'           //both are same
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twiter', (req, res) => {
    res.send('shubham Rathore!')
  })

  app.get('/login', (req, res) => {
    res.send('<h1>shubham</h1>')
  })


  app.get('/youtube', (req, res) => {
    res.send('<h1>Chai or code</h1>')
  })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})