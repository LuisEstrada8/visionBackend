const costumersCtrl ={}

const Costumer = require('../models/customers')

costumersCtrl.getCostumers = async (req,res) => {
    const costumers = await Costumer.find();
    res.json(costumers)
}

costumersCtrl.createCostumers = async (req,res) => {
    const newCostumers = new Costumer(req.body)
    await newCostumers.save();
    res.send({message:"tamo'bien"});
}

costumersCtrl.getCostumer = async (req,res) => {
    console.log(req.params);
    const costumer = await Costumer.findOne({_id: req.params.id});
   res.send(costumer);
}

costumersCtrl.editCostumer = async (req,res) => {
    const costumerUpdate = await Costumer.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'Ediatao'})
}

costumersCtrl.deleteCostumer = async (req,res) => {
    await Costumer.findByIdAndDelete(req.params.id)
    res.json({status: 'Deleteao papu'})
}

module.exports = costumersCtrl;