import mongoose from "mongoose";

// Defining Schema...
const studentSchema = new mongoose.Schema({
  // _id:Number ,
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 40,
  },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => {
      v >= 5500.5;
    },
  },
  hobbies: {
    type: Array,
  },
  isActive: {
    type: Boolean,
  },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now, unmodifiable: true },
});

// console.log(studentSchema.path('comments'));

// Creating Model...
const studentModel = mongoose.model("student", studentSchema);

// export default studentModel;

// Creating a Document
const studentDoc = new studentModel({
  name: "Devesh",
  age: 23,
  fees: 60000.199,
  hobbies: ["Music", "Reading"],
  isActive: true,
  comments: [{ value: "This is in the COMMENT section." }],
});

// Saving the document
// studentDoc.save();
