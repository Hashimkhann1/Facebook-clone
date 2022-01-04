import mongoose from 'mongoose'

const TextSchema = mongoose.Schema({
    username : {
        type : String,
    },
    descripition : {
        type : String,
        require : true
    },
    date : {
        type : Date,
        default : new Date
    }
})

const textModel = mongoose.model('TextPost' , TextSchema)

export default textModel