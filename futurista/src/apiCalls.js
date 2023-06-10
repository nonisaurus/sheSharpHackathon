const express = require("express");
const axios = require("axios");

const app = express();
const port = 5001;

const API_KEY = "SECRET_KEY";

app.use("/", (req, res) => {
  axios
    .get("https://sourcestack-api.com/jobs", {
      headers: {
        "X-API-KEY": API_KEY,
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
