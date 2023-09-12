import express from 'express'
import {
  SubmissionController,
  GetController,
  RegisterCotroller
} from '../controllers'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('HII AIML SERVER')
})

router.post('/submit-idea', SubmissionController.submit)
router.post('/register-team', RegisterCotroller.register)

router.get('/get/teamdetailes', GetController.getRegistration)

export default router
