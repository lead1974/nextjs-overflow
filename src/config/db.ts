import mongoose from "mongoose";

let isConnected = false; // track the connection status

export async function connectDB() {
  if (isConnected) {
    console.log("Already connected to the database.");
    return;
  }

  try {
    await mongoose.connect(process.env.mongo_url!);
    isConnected = true; // set to true after successful connection
    console.log("Database connected!");
    // Check if the model already exists before creating it
    // const TestModel = mongoose.models.Test || mongoose.model("Test", new mongoose.Schema({ name: String }));

    // // Insert a document (if you want to do a test write)
    // await TestModel.create({ name: "First Entry" });

    // console.log("Database connected and first entry created");
  } catch (error) {
    console.log("Database connection failed:", error);
  }
}
