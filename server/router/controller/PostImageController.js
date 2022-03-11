import ImagePostSchema from "../../Schema/postImageSchema.js"


export const ImagePost = async (req , res) => {
    try {
        const post = await new ImagePostSchema(req.body)
        await post.save()
        res.status(200).json('image saved')
    } catch (error) {
        res.status(500).json('error in ImagePost from PostImageController' , error)
    }
}


export const getImagePost = async (req , res) => {
    try {
        let imageData = await ImagePostSchema.find({})
        res.status(200).json(imageData)
    } catch (error) {
        res.status(500).json('error in getImagePost from PostImageController' , error)
    }
}

export const deletePostimage = async (req , res) => {
    try {
        let deletepost = await ImagePostSchema.findById(req.params.id)
        deletepost.deleteOne()
    } catch (error) {
        res.status(500).json('error in deletePostimage from postImageController' , error)
    }
}