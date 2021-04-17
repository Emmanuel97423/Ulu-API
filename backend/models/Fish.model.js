const mongoose = require("mongoose");
const fishSchema = mongoose.Schema({
  id: { type: mongoose.Schema.ObjectId },
  userId: { type: mongoose.Schema.ObjectId, ref: "User" },
  type: { type: String, required: true },
  estimateWeight: { type: Number, required: true },
  price: { type: Number, required: false },
  boatId: { type: mongoose.Schema.ObjectId, ref: "Boat" },
  boatName: { type: String, required: false },
  zone: { type: String, required: false },
  fishingDate: { type: String, required: true },
  dib: {
    amount: { type: Number, required: false },
    claimed: { type: String, required: false },
  },
});

module.exports = mongoose.model("Fish", fishSchema);
