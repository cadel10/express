const express = require("express")
const cors = require("cors")
const fun=require('./consumoapi.js')

const app = express()
const port = 5000



app.use(express.json())

//rutas
app.get("/api", (req, res) => {
    res.status(200).json({msg: "Bit-shop API v1.0.0"})
})



app.listen(port, () => {console.log("Api corriendo en el pueto", port)})