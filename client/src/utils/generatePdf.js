import jsPDF from 'jspdf';
import 'jspdf-autotable';

const generatePDF = (data) => {
  const pdf = new jsPDF();

  pdf.text('Appointments Report', 15, 15);

  const tableData = data.map((appointment, index) => [
    index + 1,
    `${appointment.Service.service_name}`,
    appointment.appointment_datetime,
    appointment.status,
  ]);

  const headers = ['No.', 'Service', 'Appointment Date', 'Status'];
  pdf.autoTable({
    startY: 20,
    head: [headers],
    body: tableData,
  });

  pdf.save('appointments_report.pdf');
};

export default generatePDF;
