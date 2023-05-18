const express = require("express");
const { greetingRouter } = require("./routes/index.js");
const cors = require("cors");
const app = express();
const port = 3030;

app.use(cors());
app.use(greetingRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
