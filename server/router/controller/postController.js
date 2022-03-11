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


export const getTextPost = async (req , res) => {
    try {
        let textdata = await textModel.find({})
        res.status(200).json(textdata)
    } catch (error) {
        res.status(500).json('error in getTextPost from postController' , error)
    }
} 

export const deletePosttext = async (req , res) => {
    try {
        let textPost = await textModel.findById(req.params.id)
        textPost.delete()
    } catch (error) {
        res.status(500).json('error in deleting text post from postController in router' , error)
    }
}