import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const characterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    parentSeries: { type: String, required: true },
    weight: { type: Number, required: true },
    runSpeed: { type: Number, required: true },
    dashSpeed: { type: Number, required: true },
    airSpeed: { type: Number, required: true },
    fallSpeed: { type: Number, required: true },
    bio: { type: String, required: true, maxlength: 300 },
    image: { type: String, required: true },
  }
)

characterSchema.plugin(mongooseUniqueValidator)

const Character = mongoose.model('Character', characterSchema)

export default Character