const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const costumersSchema = new Schema(
  {
    number: { type: Number, required: true },
    pacientName: { type: String, required: true },
    pacientSecondName: { type: String, required: true },
    pacientLastName: { type: String, required: true },
    docotAsign: { type: String, required: true },
    typeOperation: { type: String, required: true },
    typeOfDiet: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Costumers", costumersSchema)