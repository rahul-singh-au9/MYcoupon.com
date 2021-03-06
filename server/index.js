const express = require("express");
const cors = require("cors");
require("./db/connection");
const itemsRoutes = require("./routes/itemRouter")


// Init app
const app = express();

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

// HOMEPAGE
app.get("/", (req, res)=>{
  res.send("HOME")
})

// ITEM ROUTES
app.use("/items", itemsRoutes)

// ROUTES THAT NOT BEEN DEFINED
app.get("*", (req, res) => {
  res.send("You've tried reaching a route that doesn't exist.")
})

// CONNECTING TO THE SERVER
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`)
}
)