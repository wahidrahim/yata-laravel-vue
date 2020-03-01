import express from 'express'
import { index, create, update, destroy } from '../controllers/todos-controller'

const router = express.Router()

router.get('/', index)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', destroy)

export default router
