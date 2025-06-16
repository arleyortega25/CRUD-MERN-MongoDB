import mongoose from "mongoose";
const ConectMDB = async () => {
  try {
   await  mongoose.connect("mongodb+srv://oarleyfernando21:q7DODLXaajggoaQf@cluster0.xxvqnua.mongodb.net/");
   console.log('base de datos conectada')
  } catch (error) {
    console.error(error)
  }
};
export default ConectMDB
