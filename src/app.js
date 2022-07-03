const express = require('express')
const path = require('path')
const hbs=require('hbs')
const app = express()
//public static path
const static_path = path.join(__dirname, '../public')
const template_path=path.join(__dirname,'../templates/views')
const partial_path=path.join(__dirname,'../templates/partials')

hbs.registerPartials(partial_path)
app.use(express.static(static_path))
/*---view Engine-----*/
app.set('view engine','hbs')
app.set('views',template_path)
//routing
app.get('/', (req, res) => {
    // res.send('Hello Node!')
    res.render('index')
})
app.get('/about', (req, res) => {
    // res.send('Hello About!')
    res.render('about')
})
app.get('/weather', (req, res) => {
    // res.send('Hello Weather!')
    res.render('weather')
})
app.get('*', (req, res) => {
    res.render('404error')
})

app.listen(8000, () => {
    console.log('Listening to port 8000---')
})