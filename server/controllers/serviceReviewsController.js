const ApiError = require("../error/ApiError.js");
const { Appointments, Services, ServiceReviews } = require("../models/models.js");
class ServiceReviewsController {
  async create(req, res) {
    try {
      const { service_id, userId, rating, review_text, review_date } = req.body;

      const service = await Services.findByPk(service_id);
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }

      const serviceReview = await ServiceReviews.create({
        service_id,
        user_id: userId,
        rating,
        review_text,
        review_date,
      });

      return res.status(201).json(serviceReview);
    } catch (err) {
      if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
      } else {
        return res.status(500).json({ message: err });
      }
    }
  }


  async getAll(req, res) {
    try {
      const serviceReviews = await ServiceReviews.findAll();
      res.json(serviceReviews);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    try {
      const serviceReview = await ServiceReviews.findByPk(id);

      if (!serviceReview) {
        return res.status(404).json({ message: "Service Review not found" });
      }
      res.json(serviceReview);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  
  async updateById(req, res) {
    const { id } = req.params;
    const { appointment_id, rating, review_text, review_date } = req.body;
    try {
      const serviceReview = await ServiceReviews.findByPk(id);
      if (!serviceReview) {
        return res.status(404).json({ message: "ServiceReview not found" });
      }

      const appointment = await Appointments.findByPk(appointment_id);
      if (!appointment) {
        return res.status(404).json({ message: "Appointment not found" });
      }

      await serviceReview.update({
        appointment_id,
        rating,
        review_text,
        review_date,
      });

      res.json(serviceReview);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async deleteById(req, res) {
    const { id } = req.params;
    try {
      const serviceReview = await ServiceReviews.findByPk(id);
      if (!serviceReview) {
        return res.status(404).json({ message: "ServiceReview not found" });
      }

      await serviceReview.destroy();
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
module.exports = new ServiceReviewsController();
