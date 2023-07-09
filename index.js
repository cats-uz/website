const express = require("express")
require("dotenv").config()

const app = express()

const HOST = process.env.HOST
const PORT = process.env.PORT

const postRoutes = require("./routes/posts.js")

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/posts', postRoutes)

app.listen(PORT, () => {
    console.log(`App is running on http://${HOST}:${PORT}`)
})