import mongoose, { Schema, model, models } from 'mongoose';

const requestsSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  realState: {
    type: String,
    require: true,
  },
  constructionDate: {
    type: Date,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  rules: {
    type: [],
  },
  amenities: {
    type: [],
  },
  show: {
    type: Boolean,
    default: false,
    immutable: false,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const Requests = models.Requests || model('Requests', requestsSchema);

export default Requests;
