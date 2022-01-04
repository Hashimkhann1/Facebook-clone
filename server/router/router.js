import express from 'express'
import { getTextPostDb, TextPost } from './controller/postController.js'

const router = express.Router()

router.post('/text/post' , TextPost)
router.get('/gettext/post' , getTextPostDb)

export default router