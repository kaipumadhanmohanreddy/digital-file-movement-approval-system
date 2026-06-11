const PDFDocument = require("pdfkit");

const File = require("../models/File");

/*
  Generate PDF Report
*/

const generatePDF = async (req, res) => {
  const files = await File.find();

  const doc = new PDFDocument();

  res.setHeader("Content-Type", "application/pdf");

  res.setHeader("Content-Disposition", "attachment; filename=report.pdf");

  doc.pipe(res);

  doc.fontSize(22).text("Government File Report");

  doc.moveDown();

  files.forEach((file) => {
    doc.text(`${file.title} - ${file.status}`);
  });

  doc.end();
};

const ExcelJS = require("exceljs");

/*
  Generate Excel Report
*/

const generateExcel = async (req, res) => {
  const files = await File.find();

  const workbook = new ExcelJS.Workbook();

  const worksheet = workbook.addWorksheet("Files");

  worksheet.columns = [
    {
      header: "Title",
      key: "title",
    },

    {
      header: "Status",
      key: "status",
    },

    {
      header: "Department",
      key: "department",
    },
  ];

  files.forEach((file) => {
    worksheet.addRow({
      title: file.title,

      status: file.status,

      department: file.department,
    });
  });

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  );

  res.setHeader("Content-Disposition", "attachment; filename=report.xlsx");

  await workbook.xlsx.write(res);

  res.end();
};

module.exports = {
  generatePDF,
  generateExcel,
};
