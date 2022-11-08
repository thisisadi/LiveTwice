// Imports
const express = require('express')
const app = express()
require("./db/conn");

const User = require("./Models/Users");
const Avail=require("./Models/available");
const Req=require("./Models/request");

const port = 5050

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
app.post('/views/donate_organ1.ejs',async(req,res)=>{
    try{
        const avail=new Avail({
            donor_name: req.body.pname,
            donor_age: req.body.page,
            organ_name: req.body.organ,
            blood_group: req.body.blood,
        })
        const availableorg = await avail.save();
        res.status(201).render('donate_organ2.ejs');
    }catch(error){
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
app.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const pass = req.body.password;
        const userEmail = await User.findOne({ Email: email });
        if (userEmail.Password === pass) {
            res.status(201).render('homepage');
        } else {
            res.send("Invalid Login Credentials");
        }
    } catch (error) {
        res.status(400).send("Invalid Login Credentials");
    }
})

// Listen on Port 3000
app.listen(port, () => console.info(`App listening on port ${port}`))