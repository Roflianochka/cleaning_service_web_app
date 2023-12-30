const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  first_name: { type: DataTypes.STRING(50), allowNull: false },
  last_name: { type: DataTypes.STRING(50), allowNull: false },
  email: { type: DataTypes.STRING(256), allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Appointment = sequelize.define("Appointment", {
  appointment_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER },
  service_id: { type: DataTypes.INTEGER },
  price: { type: DataTypes.INTEGER, allowNull: false },
  appointment_datetime: { type: DataTypes.DATE, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
});

const Employee = sequelize.define("Employee", {
  employee_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  first_name: { type: DataTypes.STRING(50) },
  last_name: { type: DataTypes.STRING(50) },
  phone: { type: DataTypes.STRING(35) },
  hourly_rate: { type: DataTypes.NUMERIC(10, 2) },
});

const PaymentTransaction = sequelize.define("PaymentTransaction", {
  transaction_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  customer_id: { type: DataTypes.INTEGER },
  appointment_id: { type: DataTypes.INTEGER },
  amount: { type: DataTypes.NUMERIC(10, 2) },
  payment_date: { type: DataTypes.DATE },
});

const ServiceCategory = sequelize.define("ServiceCategory", {
  service_category_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  category_name: { type: DataTypes.STRING(255), allowNull: false },
  category_description: { type: DataTypes.TEXT },
});

const Service = sequelize.define("Service", {
  service_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  service_name: { type: DataTypes.STRING(50), allowNull: false },
  service_category_id: { type: DataTypes.INTEGER },
  image: {
    type: DataTypes.STRING(255),
  },
  price: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  is_window: { type: DataTypes.BOOLEAN, allowNull: false },
});

const ServiceReview = sequelize.define("ServiceReview", {
  review_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  service_id: { type: DataTypes.INTEGER },
  user_id: { type: DataTypes.INTEGER },
  rating: { type: DataTypes.INTEGER },
  review_text: { type: DataTypes.TEXT },
  review_date: { type: DataTypes.DATE },
});

const ServiceAssignment = sequelize.define("ServiceAssignment", {
  assignment_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  employee_id: { type: DataTypes.INTEGER },
  service_id: { type: DataTypes.INTEGER },
  assignment_date: { type: DataTypes.DATE, allowNull: false },
});

User.hasMany(Appointment, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Appointment.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

ServiceCategory.hasMany(Service, { foreignKey: 'service_category_id', onDelete: 'CASCADE' });
Service.belongsTo(ServiceCategory, { foreignKey: 'service_category_id', onDelete: 'CASCADE' });

Service.hasMany(ServiceReview, { foreignKey: 'service_id', onDelete: 'CASCADE' });
ServiceReview.belongsTo(Service, { foreignKey: 'service_id', onDelete: 'CASCADE' });
ServiceReview.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

User.hasMany(PaymentTransaction, { foreignKey: 'customer_id', onDelete: 'CASCADE' });
PaymentTransaction.belongsTo(User, { foreignKey: 'customer_id', onDelete: 'CASCADE' });

Appointment.hasOne(PaymentTransaction, { foreignKey: 'appointment_id', onDelete: 'CASCADE' });
PaymentTransaction.belongsTo(Appointment, { foreignKey: 'appointment_id', onDelete: 'CASCADE' });

Employee.hasMany(ServiceAssignment, { foreignKey: 'employee_id', onDelete: 'CASCADE' });
ServiceAssignment.belongsTo(Employee, { foreignKey: 'employee_id', onDelete: 'CASCADE' });

Service.hasMany(ServiceAssignment, { foreignKey: 'service_id', onDelete: 'CASCADE' });
ServiceAssignment.belongsTo(Service, { foreignKey: 'service_id', onDelete: 'CASCADE' });

Appointment.belongsTo(Service, { foreignKey: 'service_id', onDelete: 'CASCADE' });
Service.hasMany(Appointment, { foreignKey: 'service_id', onDelete: 'CASCADE' });


module.exports = {
  User,
  Appointments: Appointment,
  Employees: Employee,
  PaymentTransaction,
  ServiceCategories: ServiceCategory,
  Services: Service,
  ServiceReviews: ServiceReview,
  ServiceAssignment,
};