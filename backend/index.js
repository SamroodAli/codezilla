const express = require("express")
const {json,urlencoded} = require('body-parser')
const cors = require("cors")
const path = require("path")
const app = express()
require('./database')
import videos from "./videos"

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors)


app.use('/api/videos', videos)

app.use(express.static(path.join(__dirname, "../build")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,"../build"))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
