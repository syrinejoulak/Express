const express = require("express");

const path = require("path");

const ourServiceRoute = require("./routes/our-service");
const contactUsRoute = require("./routes/contact-us");
const homeRoute = require("./routes/home");
const routeDir = require("./util/path");


const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(homeRoute);
app.use(ourServiceRoute);
app.use(contactUsRoute);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(routeDir, "views", "404.html"));
});

app.listen(3000);
