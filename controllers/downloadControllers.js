import { Submissions } from '../models'
const DownloadControllers = {
  async downloadPdf (req, res, next) {
    try {
      const { team_id } = req.params
      const submission = await Submissions.findOne({ team: team_id })

      if (!submission || !submission.pdfFile) {
        return res.status(404).json({ message: 'PDF file not found' })
      }

      res.setHeader('Content-Type', submission.pdfFile.contentType)
      res.setHeader(
        'Content-Disposition',
        `attachment; filename=${submission.pdfFile.filename}`
      )
      res.send(submission.pdfFile.data)
    } catch (error) {
      console.error('Error downloading PDF file:', error)
      res.status(500).json({ message: 'Download failed' })
    }
  },
  async downloadPpt (req, res, next) {
    try {
      const { team_id } = req.params
      const submission = await Submissions.findOne({ team: team_id })

      if (!submission || !submission.pptFile) {
        return res.status(404).json({ message: 'PPT file not found' })
      }

      res.setHeader('Content-Type', submission.pptFile.contentType)
      res.setHeader(
        'Content-Disposition',
        `attachment; filename=${submission.pptFile.filename}`
      )
      res.send(submission.pptFile.data)
      // res.json({})
    } catch (error) {
      console.error('Error downloading PPT file:', error)
      res.status(500).json({ message: 'Download failed' })
    }
  }
}

export default DownloadControllers
