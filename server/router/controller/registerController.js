import RegisterModel from '../../Schema/RegesterSchema.js'



export const RegisterUserData = async (req , res) => {
    try {
        const Rdata =  await new RegisterModel(req.body)
        await Rdata.save()
        res.status(200).json('user saved')
    } catch (error) {
        res.status(500).json('error in RegisterUserData from registerController' , error)
    }
}

export const createUserDB = (req , res) => {
    const {Email , Password} = req.body
    try {
        RegisterModel.findOne({Email : Email} , (err , user) => {
            if(user){
                if(Password === user.Password){
                    res.send({User : user})
                    // res.status(200).json('login successful')
                }
                else{
                    res.send({message : "password didn't match"})
                }
            }
            else{
                res.send({message : 'User is not register'})
            }
        })
    } catch (error) {
        res.status(500).json('error in createUserDB from registerController' , error)
    }
}