const sampleResponse = require("./sample-response.json");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
const cache = require("./reqCache");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.use(cors());

// Capture all GET requests
app.get("*", cache(300), async (req, res) => {
  try {
    const response = await fetch(`https://api.github.com${req.url}`);
    const json = await response.json();
    res.send(json);
  } catch (error) {
    throw new Error("Error parsing JSON response", err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
