const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use("/openai", require("./routes/openaiRoutes"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
	console.log("Open AI Server Running");
});
