const Employee = require("../models/employee.js");
const {verifyToken, verifyUser } = require("../utils/verifyToken.js")

const getEmp = async (req, res, next) => {
    try {
      const emp = await Employee.findById(req.params.id);
      res.status(200).json(emp);
    } catch (err) {
      next(err);
    }
  };

   const getAllEmp = async (req, res, next) => {
    try {
      const users = await Employee.find();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  };

  const updateEmployee = async (req, res, next) => {
    try {
      console.log(req.params);
      const updatedEmp = await Employee.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedEmp);
    } catch (err) {
      next(err);
    }
  };

  const deleteUser = async (req, res, next) => {
    try {
      await Employee.findByIdAndDelete(req.params.id),
        res.status(200).json("User has been deleted");
    } catch (err) {
      next(err);
    }
  };

   


  module.exports = {getEmp,getAllEmp,updateEmployee,deleteUser}