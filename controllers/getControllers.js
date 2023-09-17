import { Submissions, Team } from '../models'
import CustomErrorHandler from '../services/CustomErrorHandler'
const GetController = {
  async getRegistration (req, res, next) {
    try {
      const teams = await Team.find().sort({ entryDate: -1 })
      res.json(teams)
    } catch (error) {
      console.log(error)
      next(CustomErrorHandler.error)
    }
  },

  async getSubmission (req, res, next) {
    try {
      const submissions = await Submissions.find()
        .sort({ entryDate: -1 })
        .populate('team')
        .select('-pdfFile.data -pptFile.data')
        .exec()

      console.log(submissions)
      res.json(submissions)
    } catch (error) {
      console.log(error)
      next(CustomErrorHandler.error)
    }
  },

  async deleteentries (req, res, next) {
    try {
      const { id } = req.params
      const response = await Team.findByIdAndDelete({ _id: id })
      res.json({ message: 'Successfully Deleted' })
    } catch (error) {
      next(CustomErrorHandler.error)
    }
  },

  async getTeamNames (req, res, next) {
    try {
      const teams = await Team.find()
        .select(
          '-__v -createdAt -updatedAt -teamSize -teamMembers -yearAndDepartmentOfStudy -teamLeaderMobile -email'
        )
        .sort({ teamName: 1 })
      res.json(teams)
    } catch (error) {
      next(CustomErrorHandler.error)
    }
  }
}

export default GetController
