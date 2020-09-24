const express = require("express")
const serverless = require("serverless-http")

const app = express()

const router = express.Router()

router.get("/", (req, res) => {
    return res.send("hello world")
})

app.use("/.netflify/functions/go", router)

module.exports.handler = serverless(app)
