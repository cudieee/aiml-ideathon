import mongoose from 'mongoose'

const submissionSchema = new mongoose.Schema(
  {
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
      required:true
    },
    pdfFile: {
      data: Buffer,
      contentType: String,
      filename: String
    },
    pptFile: {
      data: Buffer,
      contentType: String,
      filename: String
    }
  },
  {
    timestamps: true
  }
)



const Submissions = mongoose.model('Submission', submissionSchema)

export default Submissions
