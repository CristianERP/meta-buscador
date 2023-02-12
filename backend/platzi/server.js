const mongoose = require("mongoose")

const URI = `mongodb://${process.env.MONGODB_HOST}:27017`
mongoose.set("strictQuery", false)
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))

module.exports = mongoose
