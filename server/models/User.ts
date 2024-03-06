import { Schema, Document, model } from 'mongoose';
import bcrypt from 'bcrypt';

// Define an interface for the user document
interface IUserDocument extends Document {
    username: string;
    email: string;
    password: string;
    isCorrectPassword(password: string): Promise<boolean>;
  }

// Define the user schema
const userSchema = new Schema<IUserDocument>({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password: string) {
    return bcrypt.compare(password, this.password);
  };

// Create the User model
const User = model<IUserDocument>('User', userSchema);

export default User;



