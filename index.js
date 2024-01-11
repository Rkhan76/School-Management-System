const express = require('express')
const path = require('path')

const app = express()
const port = 8000

app.set('view engine', 'ejs')
app.set('veiws', path.resolve('./views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    return res.render('dashboard/parents_dashboard')
})

app.get('/login', (req, res)=>{
    return res.render('login')
})

app.get('/signup', (req, res)=>{
    return res.render('signup')
})

app.get('/student_signup', (req, res)=>{
    return res.render('student_signup')
})

app.get('/parents_signup', (req, res)=>{
    return res.render('parents_signup')
})

app.get('/teacher_signup', (req, res) => {
  return res.render('teacher_signup')
})

app.get('/admin_signup', (req, res) => {
  return res.render('admin_signup')
})

app.get('/student_dashboard', (req, res) => {
  return res.render('student_dashboard')
})

app.listen(port, () => console.log(`Server is running on port ${port}`))