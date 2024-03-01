var xlsx = require("xlsx");
const Employee = require("../Models/employeeModel");

const importExcelFile = (req, res) => {
    try {
        const { path: filePath, filename } = req.file;
        const workbook = xlsx.readFile(filePath)

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData = xlsx.utils.sheet_to_json(sheet, { raw: false });

        const formedData = jsonData.map((data) => ({
            ...data,
            employeeNumber: data.id,
            filename
        }));

        if (formedData.length > 0) {
            formedData.forEach(async (data) => {
                await new Employee(data).save()
            })
            return res.status(201).json({
                success: true,
                message: 'Employee created successfully.'
            });
        } else {
            return res.status(200).json({
                success: true,
                message: 'Employee is not in sheet.'
            });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


module.exports = {
    importExcelFile
}