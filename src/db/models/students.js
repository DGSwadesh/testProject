const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3
    },
    email: {
            type: String,
            require: true,
            // unique: [true, "Email id already present"],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email")
                }
            }
        },
        phone:{
            type: Number,
            // require: true,
            // unique: true
        },
        address:{
            type: String,
            required: true,

        }
    }
)

// create collaction

const student = new mongoose.model("Student", studentSchema)

module.exports = student;




