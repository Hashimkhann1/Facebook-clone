import express from 'express'
import { deletePosttext, getTextPost, TextPost } from './controller/postController.js'
import { ImagePost , getImagePost, deletePostimage } from './controller/PostImageController.js'
import { createUserDB, RegisterUserData } from './controller/registerController.js'

const router = express.Router()

router.post('/text/post' , TextPost)
router.get('/gettext/post' , getTextPost)
router.post('/image/post' , ImagePost)
router.get('/getimage/post' , getImagePost)
router.delete('/deletetext/post/:id' , deletePosttext)
router.delete('/deleteimage/post/:id' , deletePostimage)
router.post('/register/user' , RegisterUserData)
router.post('/crate/user' , createUserDB)
export default router