const ApiError = require("../error/ApiError.js");
const { Appointments, PaymentTransaction } = require("../models/models.js");

class PaymentController {
  async create(req, res) {
    try {
      const { customer_id, appointment_id } = req.body;

      if (!customer_id || !appointment_id) {
        return res.status(400).json({ error: 'Both customer_id and appointment_id are required' });
      }

      const appointment = await Appointments.findByPk(appointment_id);
      if (!appointment) {
        return res.status(404).json({ error: 'Appointment not found' });
      }

      // Create a payment transaction
      const paymentTransaction = await PaymentTransaction.create({
        customer_id: customer_id,
        appointment_id: appointment_id,
        amount: appointment.price,
        payment_date: new Date(),
      });

      await Appointments.update(
        { status: 'IN_PROGRESS' },
        {
          where: {
            appointment_id: appointment_id,
          },
        }
      );

      res.status(201).json(paymentTransaction);
    } catch (error) {
      console.error('Error creating payment transaction:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAll(req, res) { }
  async getOne(req, res) { }
}
module.exports = new PaymentController();
