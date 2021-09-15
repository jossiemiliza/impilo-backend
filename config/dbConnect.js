const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://rhe:changeme@cluster0.stvcu.mongodb.net/test",
      {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
      },
      () => {
        console.log("DB connected");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
