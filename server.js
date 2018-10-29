require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const router = require("express").Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

app.listen(PORT, function() {
    console.log(`Listening on Port ${PORT}`);
});