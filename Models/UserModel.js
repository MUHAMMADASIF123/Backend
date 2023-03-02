import mongoose from "mongoose";
const user = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("Users", user);
export default User;
