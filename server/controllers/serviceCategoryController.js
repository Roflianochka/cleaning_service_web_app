const { ServiceCategories } = require("../models/models");
const ApiError = require("../error/ApiError");

class ServiceCategoryController {
  async create(req, res, next) {
    try {
      const { category_name, category_description } = req.body;
      const serviceCategory = await ServiceCategories.create(
        {
          category_name,
          category_description,
        },
      );
      return res.json(serviceCategory);
    } catch (err) {
        if (err.status === 400) {
          return res.status(err.status).json({ message: err.message });
        } else {
          return res.status(500).json({ message:req.body });
        }
    }
  }
  async getAll(req, res, next) {
    try {
      const serviceCategories = await ServiceCategories.findAll();
      return res.json(serviceCategories);
    } catch (err) {
      return next(ApiError.internal("Internal Server Error"));
    }
  }
  async getById(req, res) {
    const { id } = req.params;

    try {
      const serviceCategory = await ServiceCategories.findByPk(id);

      if (!serviceCategory) {
        throw ApiError.notFound("Service category not found");
      }

      return res.json(serviceCategory);
    } catch (err) {
      if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
      } else {
        return res.status(500).json({ message: err.mes });
      }
    }
  }
  async updateById(req, res) {
    const { id } = req.params;
    const { category_name, category_description } = req.body;

    try {
      const [updatedRowsCount] = await ServiceCategories.update(
        { category_name, category_description },
        { where: { service_category_id: id } }
      );

      if (updatedRowsCount === 0) {
        throw ApiError.notFound("Service category not found");
      }

      const updatedServiceCategory = await ServiceCategories.findByPk(id);
      return res.json(updatedServiceCategory);
    } catch (err) {
      if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
      } else {
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }
  async deleteById(req, res) {
    const { id } = req.params;

    try {
      const deletedRowCount = await ServiceCategories.destroy({
        where: { service_category_id: id },
      });

      if (deletedRowCount === 0) {
        throw ApiError.notFound("Service category not found");
      }

      return res.json({ message: "Service category deleted successfully" });
    } catch (err) {
      if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
      } else {
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }
}
module.exports = new ServiceCategoryController();
