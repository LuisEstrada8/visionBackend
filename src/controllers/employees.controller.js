const employeeCtrl ={}

const Employee = require('../models/employee')

employeeCtrl.getEmployees = async (req,res) => {
    const employees = await Employee.find();
    res.json(employees)
}

employeeCtrl.createEmployee = async (req,res) => {
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.send({message:"tamo'bien"});
}

employeeCtrl.getEmployee = async (req,res) => {
    console.log(req.params);
    const employee = await Employee.findOne({_id: req.params.id});
   res.send(employee);
}

employeeCtrl.editEmploye = async (req,res) => {
    const employeUpdate = await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'Ediatao'})
}

employeeCtrl.deleteEmployee = async (req,res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Deleteao papu'})
}


module.exports = employeeCtrl;