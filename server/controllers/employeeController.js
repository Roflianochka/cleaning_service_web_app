const { Employees } = require('../models/models'); 
const ApiError = require("../error/ApiError");
class EmployeeController {
  async getAllEmployees(req,res, next) {
    try {
      const employees = await Employees.findAll();
      res.json(employees);
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async getEmployeeById(req, res, next) {
    const { id } = req.params;
    try {
      const employee = await Employees.findByPk(id);
      if (!employee) {
        return next(ApiError.notFound('Employee not found'));
      }
      res.json(employee);
    } catch (error) {
      next(ApiError.internal(error.message));
    }   
  }

  async createEmployee(req, res, next) {
    const { first_name, last_name, email, phone, address, hire_date, job_title, hourly_rate } = req.body;
    try {
      const newEmployee = await Employees.create({
        first_name,
        last_name,
        email,
        phone,
        address,
        hire_date,
        job_title,
        hourly_rate,
      });
      res.status(201).json(newEmployee);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateEmployee(req, res, next) {
    const { id } = req.params;
    const { first_name, last_name, email, phone, address, hire_date, job_title, hourly_rate } = req.body;
    try {
      const employee = await Employees.findByPk(id);
      if (!employee) {
        return next(ApiError.notFound('Employee not found'));
      }
      await employee.update({
        first_name,
        last_name,
        email,
        phone,
        address,
        hire_date,
        job_title,
        hourly_rate,
      });
      res.json(employee);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteEmployee(req, res, next) {
    const { id } = req.params;
    try {
      const employee = await Employees.findByPk(id);
      if (!employee) {
        return next(ApiError.notFound('Employee not found'));
      }
      await employee.destroy();
      res.sendStatus(204);
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }
}

module.exports = new EmployeeController();