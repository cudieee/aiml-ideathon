import { Team } from '../models'
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

  async getSubmission (req, res, next) {},

  async deleteentries (req, res, next) {
    try {
      const { id } = req.params
      const response = await Team.findByIdAndDelete({ _id: id })
      console.log(response)
      res.json({ message: 'Successfully Deleted' })
    } catch (error) {
      next(CustomErrorHandler.error)
    }
  }
}

export default GetController
