const mongoose = require("mongoose")

const URI = process.env.MONGODB_URI
mongoose.set("strictQuery", false)
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))

module.exports = mongoose
