const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./models");

db.mongoose
  .connect(db.url, {})
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("connot connect to DB", err);
    process.exit();
  });

var corsOptions = {
  origin: "http://127.0.0.1:5500",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "welcome to full stack training" });
});

require("./routes/tutorial.routes.js")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
