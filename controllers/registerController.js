import { Team } from '../models'
import CustomErrorHandler from '../services/CustomErrorHandler'
const RegisterCotroller = {
  async register (req, res, next) {
    try {
      const newTeam = new Team(req.body)
      await newTeam.save()
      res.status(201).json({ message: 'Team registration successful', team_id:newTeam._id})
      next()
    } catch (error) {
      res.status(500).json({ message: 'Server error' })
      return next(error)
    }
  }
}

export default RegisterCotroller
