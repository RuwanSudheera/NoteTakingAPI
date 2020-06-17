require("dotenv").config();

const express = require("express");
const app = express();
const cors = require('cors');

const noteRouter = require("./api/notes/note.router");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        success: 1,
        message: "This is rest apis working"
    });
})

app.use("/api/notes", noteRouter)

app.listen(process.env.PORT, () =>{
    console.log("Server up and running on PORT ", process.env.PORT);
});