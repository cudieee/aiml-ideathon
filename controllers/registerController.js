import { Team } from '../models'
import CustomErrorHandler from '../services/CustomErrorHandler'
const RegisterCotroller = {
  async register (req, res, next) {
    try {
      const { email, teamName } = req.body
      const user = await Team.findOne({ email })
      const team_name = await Team.findOne({ teamName: teamName })

      if (user)
        return next(CustomErrorHandler.alreadyExists('This User Alredy Exists'))

      if (team_name)
        return next(CustomErrorHandler.alreadyExists('Team Name not Available'))

      const newTeam = new Team(req.body)
      await newTeam.save();

      res
        .status(201)
        .json({ message: 'Team registration successful', team_id: newTeam._id })
      next()
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Server error' })
      return next(error)
    }
  }
}

export default RegisterCotroller
