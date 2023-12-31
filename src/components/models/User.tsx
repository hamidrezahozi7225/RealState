import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  post: {
    type: [{}],
  },
  role: {
    type: String,
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const User = models.User || model('User', userSchema);

export default User;
