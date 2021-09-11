import mongoose, {Schema, Document, ObjectId} from 'mongoose'

export interface ILinksModel extends Document {
  from: string,
  to: string,
  code: string,
  data: Date,
  clicks: number,
  owner: ObjectId,
}

const LinksSchema: Schema = new Schema({
  from: {type: String, required: true},
  to: {type: String, required: true, unique: true},
  code: {type: String, required: true, unique: true},
  date: {type: Date, default: Date.now()},
  clicks: {type: Number, default: 0},
  owner: {type: Schema.Types.ObjectId, ref: 'User'},

})

export default mongoose.model<ILinksModel>('Links', LinksSchema)
