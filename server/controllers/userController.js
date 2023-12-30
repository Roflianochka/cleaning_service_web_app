const ApiError = require("../error/ApiError.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Appointments, Services } = require("../models/models");
const generateJwt = (id, role) => {
  return jwt.sign(
    {
      userId: id,
      role: role,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "12h",
    }
  );
};
class UserController {
  async registration(req, res, next) {
    try {
      const { password, email, firstName, lastName } = req.body;

      if (!password || !email || !firstName || !lastName) {
        return next(
          ApiError.badRequest("Role, password, and email are required")
        );
      }

      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
        return next(ApiError.badRequest("email is in use"));
      }

      const hashedPassword = await bcrypt.hash(password, 5);

      let user;
      user = await User.create({
        role: "USER",
        password: hashedPassword,
        first_name: firstName,
        last_name: lastName,
        email: email,
      });
      const token = generateJwt(user.user_id, user.role);

      // res.status(201).json({ id: user.id, role: user.role, clientId: user.clientId });
      res.json({ token });
    } catch (error) {
      if (error instanceof ApiError) {
        res.status(error.status).json({ error: error.message });
      } else {
        console.error(error);
        res.status(500).json({ error: error.message });
      }
    }
  }
  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(ApiError.badRequest("Email and password are required"));
      }

      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        return next(ApiError.notFound("user not found"));
      }

      let comparePassword = bcrypt.compareSync(password, user.password);
      // return res.json({comparePassword})
      if (!comparePassword) {
        return next(ApiError.internal("Password mismatch"));
      }

      const token = generateJwt(user.user_id, user.role);

      res.json({ token });
    } catch (error) {
      if (error instanceof ApiError) {
        res.status(error.status).json({ error: error.message });
      } else {
        console.error(error);
        res.status(500).json({ error: error.message });
      }
    }
  }
  async check(req, res, next) {
    const token = generateJwt(req.user.userId, req.user.role);
    return res.json({ token });
  }

  async getInfo(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id, {
        attributes: ['first_name', 'last_name', 'email', 'role'],
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json({ user });
    } catch (error) {
      console.error('Error fetching user information:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getAllUserAppointments(req, res, next) {
    try {
      const userId = req.params.userId;

      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const userAppointments = await Appointments.findAll({
        where: { user_id: userId },
        include: [
          {
            model: Services
          },
        ],
      });

      return res.status(200).json(userAppointments);
    } catch (error) {
      console.error('Error fetching user appointments:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async cancelAppointment(req, res, next) {
    try {
      const { appointmentId } = req.params;

      const appointment = await Appointments.findByPk(appointmentId);

      if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }

      if (appointment.status !== 'CANCELED') {
        await appointment.update({ status: 'CANCELED' });


        return res.status(200).json({ message: 'Appointment canceled successfully' });
      } else {
        await appointment.update({ status: 'PAYMENT_NEEDED' });
      }
      return res.json("Status changed");
    } catch (error) {
      console.error('Error canceling appointment:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = new UserController();