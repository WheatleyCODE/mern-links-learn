import mongoose, {ObjectId, Schema, Document} from 'mongoose'

export interface ILinks {
  _id: ObjectId,
}

export interface IUser extends Document {
  email: string,
  password: string,
  links: ILinks[],
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  links: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Link',
    }
  ],
})

export default mongoose.model<IUser>('User', UserSchema)
