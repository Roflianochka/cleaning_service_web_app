const ApiError = require('../error/ApiError.js')
const {Appointments} =  require('../models/models.js')
class AppointmentController{
    async create(req, res, next) {
        const { user_id, service_id, employee_id, appointment_datetime, status } = req.body;
        try {
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
            return res.status(500).json({ err });
          }
        }
      }
    async getAll(req,res){
        
    }
    async getOne(req,res){
        
    }
}
module.exports = new AppointmentController()