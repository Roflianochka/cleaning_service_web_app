const ApiError = require("../error/ApiError.js");
const { Appointments } = require("../models/models.js");
class AppointmentController {
  async create(req, res) {
    try {
      const { user_id, service_id, employee_id, appointment_datetime, status } =
        req.body;
      const appointment = await Appointments.create({
        user_id,
        service_id,
        employee_id,
        appointment_datetime,
        status,
      });
      return res.json(appointment);
    } catch (err) {
      if (err.status === 400) {
        return res.status(err.status).json({ message: err.message });
      } else {
        return res.status(500).json({ message: err.message });
      }
    }
  }
  async getAll(req, res) {
    try {
      const appointments = await Appointments.findAll();
      res.json(appointments);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async getOne(req, res) {
    const { id } = req.params;
    try {
      const appointment = await Appointments.findByPk(id);
      if (!appointment) {
        return res.status(404).json({ message: "Appointment not found" });
      }
      res.json(appointment);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async updateById(req, res) {
    const { id } = req.params;
    const { user_id, service_id, employee_id, appointment_datetime, status } =
      req.body;
    try {
      const appointment = await Appointments.findByPk(id);
      if (!appointment) {
        return res.status(404).json({ message: "Appointment not found" });
      }
      await appointment.update({
        user_id,
        service_id,
        employee_id,
        appointment_datetime,
        status,
      });
      res.json(appointment);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async deleteById(req, res) {
    const { id } = req.params;
    try {
      const appointment = await Appointments.findByPk(id);
      if (!appointment) {
        return res.status(404).json({ message: "Appointment not found" });
      }
      await appointment.destroy();
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
module.exports = new AppointmentController();
