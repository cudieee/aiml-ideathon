import mongoose from "mongoose";
import { MONGO_URI } from "../env";


const connect = () => {
  return mongoose.connect(
    MONGO_URI
  );
};

export default  connect;