const express = require("express");
const app = express();
const port = 3000;

const userRouter = require("./routes/users");

app.get("/", (req, res) => {
    res.send("🏠 Welcome to the homepage!");
});

app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
