const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Taskboarders server is running!");
});

app.listen(port, () =>
  console.log(`Taskboarders server is listening to port ${port}`)
);
