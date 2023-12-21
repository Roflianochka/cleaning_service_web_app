const { Services } = require("../models/models");
const ApiError = require("../error/ApiError");

class ServiceController {
  async create(req, res) {
    try {
      const {
        service_name,
        service_category_id,
        description,
        price,
        duration,
      } = req.body;
      const service = await Services.create({
        service_name,
        service_category_id,
        description,
        price,
        duration,
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
      const services = await Services.findAll();
      return res.json(services);
    } catch (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  async getById(req, res) {
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
