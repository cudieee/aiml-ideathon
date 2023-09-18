import mongoose from 'mongoose'

const submissionSchema = new mongoose.Schema(
  {
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Links = mongoose.model('Links', submissionSchema)

export default Links
