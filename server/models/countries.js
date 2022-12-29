import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const countriesSchema  = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Country', countriesSchema);