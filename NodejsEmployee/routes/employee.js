const express = require("express");
const {getEmp,getAllEmp,updateEmployee,deleteUser} = require("../controllers/employee.js");
const {verifyToken, verifyUser } = require("../utils/verifyToken.js")

const router = express.Router();

//GET
router.get("/:id", getEmp);
router.get("/",getAllEmp);

//Put
//Update the employee
router.put("/:id",verifyUser,updateEmployee);

//Delete
//Delete Employee
router.delete("/:id",deleteUser);


module.exports = router