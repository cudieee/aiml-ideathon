import express from 'express'
import SubmissionController from '../controllers/submissionController'
import RegisterCotroller from '../controllers/registerController'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('HII AIML SERVER')
})

router.post('/submit-idea', SubmissionController.submit)
router.post('/register-team', RegisterCotroller.register)

export default router

