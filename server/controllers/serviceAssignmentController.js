const { Employees, Services, ServiceAssignment, Appointments } = require("../models/models");
const ApiError = require("../error/ApiError");

class ServiceAssignmentsController {
    async assignEmployee(req, res, next) {
        try {
            const { employeeId, serviceId, user_id, appointment_id, assignment_date} = req.body;

            const employee = await Employees.findByPk(employeeId);
            const service = await Services.findByPk(serviceId);

            if (!employee || !service) {
                return res.status(404).json({ error: 'Employee or service not found' });
            }

            const existingAssignment = await ServiceAssignment.findOne({
                where: {
                    employee_id: employeeId,
                    service_id: serviceId,
                },
            });

            if (existingAssignment) {
                return res.status(400).json({ error: 'Assignment already exists' });
            }

            const assignment = await ServiceAssignment.create({
                employee_id: employeeId,
                service_id: serviceId,
                assignment_date,
            });

            console.log('Before updating Appointments');
            await Appointments.update(
                { status: 'PAYMENT_NEEDED' },
                {
                    where: {
                        user_id: user_id,
                        service_id: serviceId,
                        appointment_id: appointment_id
                    },
                }
            );
            console.log('After updating Appointments');

            res.status(201).json(assignment);
        } catch (error) {
            console.error('Error assigning employee:', error);
            next(error);
        }
    }
}

module.exports = new ServiceAssignmentsController();
