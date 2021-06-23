const express = require("express");
//const dotenv = require("dotenv");
const orgsRoutes = require("./routes/orgs");
//Database
//dotenv.config({ path: "./config/config.env" });
const db = require("./config/database");

//Test db
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

const app = express();

app.use(express.json());
app.use("/orgs", orgsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
// const server = app.listen(
//   process.env.PORT,
//   console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа... `)
// );
