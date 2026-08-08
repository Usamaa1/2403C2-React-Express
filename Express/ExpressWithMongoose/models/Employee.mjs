import mongoose from 'mongoose';
const { Schema } = mongoose;



const employeeSchema = new Schema({
  employeeName: {
    type: String,
    required: [true,'Employee Name is required']
  },
  employeeDesignation: String,
  employeePhone:  {
    type: Number,
    // min: [3,"Employee Phone Number must be minimum 11 digits"],
    // max: [11,"Employee Phone Number must be max 11 digits"],

    required: [true,'Employee Phone Number is required'],
    validate: {
      validator: (v)=> /^[0-9]{11}$/.test(v),
      message:"Employee Phone Number must be minimum 11 digits"
    }
  }
});




const Employees = mongoose.model('Employees', employeeSchema);
export default Employees;