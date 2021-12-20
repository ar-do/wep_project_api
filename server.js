const express = require("express");
const cors = require("cors");
const db = require("./app/models");


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.json({ message: "Welcome"});
});

require("./app/routes/article.routes")(app);
require("./app/routes/comment.routes")(app);
require("./app/routes/user.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}.`);
});