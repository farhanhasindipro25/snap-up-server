const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.h0us0hz.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const tasksCollection = client.db("taskboardersDB").collection("tasks");
  } finally {
  }
}
run.catch(console.log);

app.get("/", async (req, res) => {
  res.send("Taskboarders server is running!");
});

app.listen(port, () =>
  console.log(`Taskboarders server is listening to port ${port}`)
);
