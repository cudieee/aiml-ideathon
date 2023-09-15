import { Submissions } from '../models'

const SubmissionController = {
  async submit (req, res, next) {
    try {
      const files = req.files
      const fieldNames = Object.keys(files)

      const pdfFile = {
        data: files[0].buffer,
        contentType: files[0].mimetype,
        filename: files[0].originalname
      }
      const pptFile = {
        data: files[1].buffer,
        contentType: files[1].mimetype,
        filename: files[1].originalname
      }

      const submission = new Submissions({
        team: req.body.team_id,
        pdfFile,
        pptFile
      })

      await submission.save()

      res.status(200).json({ message: 'Files uploaded successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server error' })
    }
  }
}

export default SubmissionController
