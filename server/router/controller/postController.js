import textModel from "../../Schema/postTextSchema.js"


export const TextPost = async (req , res) => {
    try {
        const tPost = await new textModel(req.body)
        await tPost.save()
        res.status(200).json('TextPost saved')
    } catch (error) {
        res.status(500).json('error in TextPost from postController' , error)
    }
}


export const getTextPostDb = async (req , res) => {
    try {
        let textPost = await textModel.find({})
        res.status(200).json(textPost)
    } catch (error) {
        res.status(500).json('error while getting textPost from router' , error)
    }
}