import mongoose from 'mongoose'


const registerUser = mongoose.Schema({
    userName : {
        type : String,
        require : true
    },
    Email : {
        type : String,
        require : true
    },
    Password : {
        type : String,
        require : true
    },
    date : {
        type : Date,
        default : new Date
    }
})

const RegisterModel = mongoose.model('register' , registerUser)

export default RegisterModel