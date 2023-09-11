import mongoose from 'mongoose'

const submissionSchema = new mongoose.Schema({
  teamName: {
    type:String,
    unique:true,
    required:true
  },
  teamLeaderName: {
    type:String,
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
},{
    timestamps:true
})

const Submissions = mongoose.model('Submission', submissionSchema)

export default Submissions
