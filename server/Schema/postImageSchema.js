import mongoose from 'mongoose';

const imageSchema = mongoose.Schema({
    username : {
        type : String
    },
    desc : {
        type : String,
    },
    photo : {
        type : String,
        require : true
    },
    date : {
        type : Date,
        default : new Date
    }

})


const ImagePostSchema = mongoose.model('imagePost' , imageSchema)

export default ImagePostSchema