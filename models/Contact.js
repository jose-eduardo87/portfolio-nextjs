import { models, Schema, model } from "mongoose";

const ContactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide your first name."],
    minlength: 3,
    maxlength: 15,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your e-mail address."],
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Please provide some additional info."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default models.Contact || model("Contact", ContactSchema);
