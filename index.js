const express = require('express')
const path = require('path')

const PORajkdajkdladn = 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORajkdajkdladn, () => console.log(`Listening on ${ PORajkdajkdladn }`))
