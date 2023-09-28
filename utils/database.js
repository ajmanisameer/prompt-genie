import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log(`MongoBD is connected`);
    return
  }

  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL, {
        dbName: "share_prompt", 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    isConnected = true
    console.log(`MongoDB Connected`)
  } catch (error) {
    console.log(error)
  }
};
