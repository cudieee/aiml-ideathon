import express from 'express'

import multer from 'multer'
import {
  SubmissionController,
  GetController,
  RegisterCotroller,
  DownloadControllers
} from '../controllers'
const storage = multer.memoryStorage()
const upload = multer({ storage })
const router = express.Router()

router.get('/', (req, res) => {
  res.send('HII AIML SERVER')
})

// User
router.post('/upload/submission', upload.any(), SubmissionController.submit)
router.post('/register-team', RegisterCotroller.register)

// Download Files
router.get('/download/ppt/:team_id', DownloadControllers.downloadPpt)

router.get('/download/pdf/:team_id', DownloadControllers.downloadPdf)

// Admin
router.get('/get/teamdetailes', GetController.getRegistration)
router.get('/get/teams', GetController.getTeamNames)
router.get('/get/submissions', GetController.getSubmission)

router.delete('/delete/:id', GetController.deleteentries)

export default router
