const {
  Appointments,
  Services,
  User,
  ServiceAssignment,
} = require("../models/models.js");

class AppointmentController {
  async create(req, res) {
    try {
      const { user_id, service_id, employee_id, appointment_datetime, price } =
        req.body;

      let status = "PAYMENT_NEEDED";

      const appointment = await Appointments.create({
        appointment_datetime,
        employee_id,
        service_id,
        user_id,
        status,
        price,
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
      const appointments = await Appointments.findAll({
        include: [
          { model: User, attributes: ["first_name", "last_name", "email"] },
          { model: Services, attributes: ["service_name"] },
        ],
      });

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
    const status = "COMPLETED";
    try {
      const appointment = await Appointments.findByPk(id);
      if (!appointment) {
        return res.status(404).json({ message: "Appointment not found" });
      }

      await appointment.update({
        status,
      });

      const serviceAssignment = await ServiceAssignment.findOne({
        where: {
          service_id: appointment.service_id,
          assignment_date: appointment.appointment_datetime,
        }
      });

      if (serviceAssignment) {
        await serviceAssignment.destroy();
      }

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

      const serviceAssignment = await ServiceAssignment.findOne({
        where: {
          service_id: appointment.service_id,
          assignment_date: appointment.appointment_datetime,
        },
      });

      if (serviceAssignment) {
        await serviceAssignment.destroy();
      }

      await appointment.destroy();

      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async fetchPendingAppointments(req, res) {
    try {
      const pendingAppointments = await Appointments.findAll({
        where: {
          status: "PENDING",
        },
        include: [
          {
            model: Services,
            attributes: ["service_name"],
          },
          {
            model: User,
            attributes: ["first_name", "last_name", "email"],
          },
        ],
      });

      return res.json(pendingAppointments);
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new AppointmentController();
