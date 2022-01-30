// import { models, Schema, model } from "mongoose";
// import { hash, compare } from "bcryptjs";

// const UserSchema = new Schema({
//   email: {
//     type: String,
//     required: [true, "Please provide your e-mail address."],
//     unique: true,
//     lowercase: true,
//   },
//   password: {
//     type: String,
//     required: [
//       true,
//       "Please provide a strong password. (minimum six characters long.)",
//     ],
//     minlength: 6,
//     select: false,
//   },
// });

// UserSchema.pre("save", async function (next) {
//   // Checks if password was modified
//   if (!this.isModified("password")) {
//     return next();
//   }

//   // Hash password with cost of 12
//   this.password = await hash(this.password, 12);

//   next();
// });

// // UserSchema.pre('save', async function(next) {
// //     if(!this.isModified('password') || this.isNew) {
// //         return next();
// //     }

// //     this.passwordChangedAt = Date.now() - 1000;

// //     next();
// // });

// UserSchema.methods.correctPassword = async function (
//   candidatePassword,
//   userPassword
// ) {
//   return await compare(candidatePassword, userPassword);
// };

// export default models.User || model("User", UserSchema);
