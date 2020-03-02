const {join} = require('path')
const express = require('express')

const app = express()

const { json, urlencoded, static } = express

app.use(json())
app.use(urlencoded({ extended: false }))

app.use(static(join(__dirname, 'public')))

module.exports = app