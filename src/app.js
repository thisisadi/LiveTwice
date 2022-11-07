// Imports
const express = require('express')
const app = express()
require("./db/conn");

const User = require("./Models/Users");

const port = 5000

// Static Files
app.use(express.static('public'))
app.use('/JS', express.static(__dirname + 'public/JS'))
app.use('/pics', express.static(__dirname + 'public/pics'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('signin')
})

app.post('/views/signin.ejs', async (req, res) => {
    try {
        const pass = req.body.password;
        const cPass = req.body.confirmPassword;
        if (pass === cPass) {

            const user = new User({
                Name: req.body.name,
                Age: req.body.age,
                BloodGroup: req.body.bloodGroup,
                Email: req.body.email,
                Password: pass,
            })

            const registeredUser = await user.save();
            res.status(201).render('homepage');

        } else {
            console.log("Password doesn't match!");
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

app.get('/views/requestmade.ejs', (req, res) => {
    res.render('requestmade')
})

app.get('/views/request_organ1.ejs', (req, res) => {
    res.render('request_organ1')
})

app.get('/views/request_organ2.ejs', (req, res) => {
    res.render('request_organ2')
})

app.get('/views/login.ejs', (req, res) => {
    res.render('login')
})

app.get('/views/homepage.ejs', (req, res) => {
    res.render('homepage')
})

app.get('/views/donateorgan.ejs', (req, res) => {
    res.render('donateorgan')
})

app.get('/views/donate_organ1.ejs', (req, res) => {
    res.render('donate_organ1')
})

app.get('/views/donate_organ2.ejs', (req, res) => {
    res.render('donate_organ2')
})

app.get('/views/available_organs.ejs', (req, res) => {
    res.render('available_organs')
})

app.get('/views/acceptorgan.ejs', (req, res) => {
    res.render('acceptorgan')
})

// Listen on Port 3000
app.listen(port, () => console.info(`App listening on port ${port}`))