const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
app.use(cors());
app.use(express.json()); /* This is new and allows JSON Objects to be posted */
app.use(
  express.urlencoded({ extended: true })
); /* This is new and allows JSON Objects with strings and arrays*/
require("./config/person.config");
require("./routes/person.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
