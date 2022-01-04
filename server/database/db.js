import mongoose from 'mongoose'

const Connection = async () => {
    try {
        const URL = 'mongodb+srv://facebook-Clone:facebookclone@facebook.kdyhe.mongodb.net/facebook-Clone?retryWrites=true&w=majority'
       await mongoose.connect(URL , {useNewUrlParser : true , useUnifiedTopology : true})
       console.log('Database is connected')
    } catch (error) {
        console.log('error while connecting Database' , error)
    }
}


export default Connection