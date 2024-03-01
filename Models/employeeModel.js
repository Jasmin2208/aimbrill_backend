const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    employeeNumber: {
        type: Number,
    },
    name: {
        type: String,
        trim: true
    },
    phone: {
        type: Number,
    },
    address: {
        type: String,
    },
    birthDate: {
        type: Date,
    },
    joiningDate: {
        type: Date,
    },
    status: {
        type: String,
        default: "active"
    },
    salary: {
        type: Number,
        default: 0
    },
    gender: {
        type: String,
    },
    filename: {
        type: String,
    }
}, {
    timestamps: true,
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
