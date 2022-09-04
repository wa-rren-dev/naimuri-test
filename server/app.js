const sampleResponse = require("./sample-response.json");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/", (_req, res) => {
  res.send(sampleResponse);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
