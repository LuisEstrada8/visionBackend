const {Router} = require('express')
const router = Router(); 

const costumersCtrl= require('../controllers/customers.controllers')

router.get('/', costumersCtrl.getCostumers)
router.post('/', costumersCtrl.createCostumers)
router.get('/:id', costumersCtrl.getCostumer)
router.put('/:id', costumersCtrl.editCostumer)
router.delete('/:id', costumersCtrl.deleteCostumer)





module.exports = router;