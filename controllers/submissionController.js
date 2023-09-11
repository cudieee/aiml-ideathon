import { Submissions } from '../models'

const SubmissionController = {
  async submit (req, res, next) {
    try {
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Server error' })
    }
  }
}

export default SubmissionController
