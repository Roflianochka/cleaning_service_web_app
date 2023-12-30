const { Services, ServiceCategories, ServiceReviews, User, Appointments } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require('uuid')
const path = require('path')

class ServiceController {
  async create(req, res) {
    try {
      const {
        service_name,
        service_category_id,
        description,
        price,
        duration,
        is_window
      } = req.body;

      const { image } = req.files
      let fileName = uuid.v4() + ".jpg"
      image.mv(path.resolve(__dirname, '..', 'static', fileName))

      const service = await Services.create({
        service_name,
        service_category_id,
        description,
        price,
        image: fileName,
        duration,
        is_window
      });
      return res.json(service);
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
      const services = await Services.findAll({
        include: ServiceCategories
      });
      return res.json(services);
    } catch (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async canReviewService(req, res) {
    try {
      const { userId, serviceId } = req.body

      const appointmentExists = await Appointments.findOne({
        where: {
          user_id: userId,
          service_id: serviceId,
          status: "COMPLETED"
        },
      });

      if (!appointmentExists) {
        return res.status(403).json({ error: 'User is not eligible to review this service' });
      }

      const hasReviewed = await ServiceReviews.findOne({
        where: {
          user_id: userId,
          service_id: serviceId,
        },
      });

      if (hasReviewed) {
        return res.status(403).json({ error: 'User has already reviewed this service' });
      }

      res.status(200).json({ canReview: true });
    } catch (error) {
      console.error('Error checking if user can review service:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getById(req, res, next) {
    const { id } = req.params;
    try {
      const service = await Services.findByPk(id);
      if (!service) {
        return next(ApiError.notFound('Service not found'));
      }
      res.json(service);
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async getReviews(req, res, next) {
    const { id } = req.params;
    try {
      const service = await Services.findByPk(id, {
        include: [
          {
            model: ServiceReviews,
            include: [
              {
                model: User,
                attributes: ['first_name', 'last_name'],
              },
            ],
          },
        ],
      });

      if (!service) {
        return next(ApiError.notFound('Service not found'));
      }

      res.json(service);
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async updateById(req, res) {
    try {
      const { id } = req.params;
      const {
        service_name,
        service_category_id,
        description,
        price,
        duration,
      } = req.body;

      const [updatedRows] = await Services.update(
        {
          service_name,
          service_category_id,
          description,
          price,
          duration,
        },
        { where: { service_id: id } }
      );

      if (updatedRows === 0) {
        throw ApiError.notFound('Service not found');
      }

      const updatedService = await Services.findByPk(id);
      return res.json(updatedService);
    } catch (err) {
      if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
      } else {
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  }

  async deleteById(req, res) {
    try {
      const { id } = req.params;
      const deletedRows = await Services.destroy({ where: { service_id: id } });

      if (deletedRows === 0) {
        throw ApiError.notFound('Service not found');
      }

      return res.json({ message: 'Service deleted successfully' });
    } catch (err) {
      if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
      } else {
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  }
}
module.exports = new ServiceController();
