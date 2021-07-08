const {Router} = require('express')
const router = Router(); 


const userCtrl= require('../controllers/user.controllers')
const jwt = require('jsonwebtoken');

router.post('/', userCtrl.createUser)
router.post('/signIn', verifyToken ,userCtrl.signIn)
router.get('/', userCtrl.getUsers)
router.post('/send-email', userCtrl.renviarContra)

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('No autorizado')
    }
    
    const token = req.headers.authorization.split(' ')[1];
    if (token === null) {
        return res.status(401).send('No autorizado')
    }

    const payload = jwt.verify(token, 'secretKey')
    req.userId = payload._id;
    next();
}

module.exports = router;