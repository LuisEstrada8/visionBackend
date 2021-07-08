const userCtrl ={};

const User = require('../models/user');

const jwt = require('jsonwebtoken');
const user = require('../models/user');
const nodemailer = require('nodemailer');

userCtrl.createUser = async (req,res) => {
    const newUser = new User(req.body)
    await newUser.save();
    const token = jwt.sign({_id: newUser._id}, 'secretKey');
    res.status(200).json({token})
}

userCtrl.signIn = async(req,res) => {
    const {email, password} = req.body;
    const saveUser = await User.findOne({email});
    if(!saveUser) return res.status(400).send("no existe");
    if(saveUser.password !== password)return res.status(401).send("contraseña erronea");

   const token = jwt.sign({_id: saveUser._id},'secretKey');
   res.status(200).json({token})
}

userCtrl.getUsers = async (req,res) => {
    const newUser = await User.find();
    res.json(newUser)
}

userCtrl.renviarContra = async (req, res) =>{
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'hospital.immss.mante@gmail.com',
            pass: 'eutymbpaykuemegr'
        }
});

var mailOptions = {
    from: "Remitente",
    to: "hospital.immss.mante@gmail.com",
    subject:"Recuperacion de Contraseña",
    text: " Admin1234."
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
       res.status(500).send(error.message)
    } else {
        console.log("Email Enviado");
        res.status(200).jsonp(req.body)
    }
})


}

module.exports = userCtrl;