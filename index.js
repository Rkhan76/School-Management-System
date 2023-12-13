const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('veiws', path.resolve('./views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    return res.render('login')
})

app.listen(port, () => console.log(`Server is running on port ${port}`))