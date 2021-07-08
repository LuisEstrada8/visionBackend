const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const employeeSchema = new Schema(
  {
    name: { type: String, required: true },
    secondName: { type: String, required: true },
    lastName: { type: String, required: true },
    office: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Employee", employeeSchema)