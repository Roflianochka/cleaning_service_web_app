const sequelize = require("../db");
const { DataTypes, DatabaseError } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  first_name: { type: DataTypes.STRING(8), allowNull: false },
  last_name: { type: DataTypes.STRING(8), allowNull: false },
  email: { type: DataTypes.STRING(256), allowNull: false },
  password: { type: DataTypes.STRING },
  phone: { type: DataTypes.NUMERIC(15, 0), allowNull: false },
  address: { type: DataTypes.STRING(30), allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});
const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const BasketDevice = sequelize.define("basket_device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const AppointmentDescriptions = sequelize.define("AppointmentDescriptions", {
  appointment_description_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  appointment_id: { type: DataTypes.INTEGER },
  description_text: { type: DataTypes.TEXT },
});

const Appointments = sequelize.define("Appointments", {
  appointment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: { type: DataTypes.INTEGER },
  service_id: { type: DataTypes.INTEGER },
  employee_id: { type: DataTypes.INTEGER },
  appointment_datetime: { type: DataTypes.DATE, allowNull: false },
  status: { type: DataTypes.TEXT, allowNull: false },
});

const Employees = sequelize.define("Employees", {
  employee_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true  },
  first_name: { type: DataTypes.STRING(50) },
  last_name: { type: DataTypes.STRING(50) },
  email: { type: DataTypes.STRING(100) },
  phone: { type: DataTypes.STRING(15) },
  address: { type: DataTypes.TEXT },
  hire_date: { type: DataTypes.DATE },
  job_title: { type: DataTypes.STRING(50) },
  hourly_rate: { type: DataTypes.NUMERIC(10, 2) },
});

const PaymentTransactions = sequelize.define("PaymentTransactions", {
  transaction_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true  },
  customer_id: { type: DataTypes.INTEGER },
  appointment_id: { type: DataTypes.INTEGER },
  amount: { type: DataTypes.NUMERIC(10, 2) },
  payment_date: { type: DataTypes.DATE },
  payment_method: { type: DataTypes.STRING(50) },
});

const ServiceCategories = sequelize.define("ServiceCategories", {
  service_category_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true  },
  category_name: { type: DataTypes.STRING(255), allowNull: false },
  category_description: { type: DataTypes.TEXT },
});

const Services = sequelize.define("Services", {
  service_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true  },
  service_name: { type: DataTypes.STRING(15), allowNull: false },
  service_category_id: { type: DataTypes.INTEGER },
  description: { type: DataTypes.TEXT, allowNull: false },
  price: { type: DataTypes.NUMERIC(5, 0), allowNull: false },
  duration: { type: DataTypes.INTEGER, allowNull: false },
});

const ServiceReviews = sequelize.define("ServiceReviews", {
  review_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true  },
  appointment_id: { type: DataTypes.INTEGER },
  rating: { type: DataTypes.INTEGER },
  review_text: { type: DataTypes.TEXT },
  review_date: { type: DataTypes.DATE },
});


User.hasOne(Basket)
Basket.belongsTo(User)

User.belongsToMany(Appointments, {
  foreignKey: 'user_id',
  otherKey: 'employee_id',
  through: 'AppointmentsEmployees',
});

User.belongsTo(PaymentTransactions, {
  foreignKey: 'customer_id',
});

Appointments.belongsTo(ServiceCategories, {
  foreignKey: 'service_category_id',
});

Appointments.belongsTo(Services, {
  foreignKey: 'service_id',
});

Appointments.hasMany(AppointmentDescriptions, {
  foreignKey: 'appointment_id',
});

Appointments.belongsToMany(Employees, {
  foreignKey: 'appointment_id',
  through: 'AppointmentsEmployees',
});

Employees.belongsToMany(Appointments, {
  foreignKey: 'employee_id',
  through: 'AppointmentsEmployees',
});

PaymentTransactions.belongsTo(Appointments, {
  foreignKey: 'appointment_id',
});

ServiceCategories.hasMany(Services, {
  foreignKey: 'service_category_id',
});



module.exports = {
  User,
  Basket,
  BasketDevice,
  AppointmentDescriptions,
  Appointments,
  Employees,
  PaymentTransactions,
  ServiceCategories,
  Services,
  ServiceReviews
}