import mongoose from 'mongoose';
const { Schema } = mongoose;


let studentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    rollno: {
        type: Number
    }
}, {
    collection: 'students'
}
)


module.exports =  mongoose.model("Student", studentSchema)