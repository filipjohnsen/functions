const express = require("express")
const serverless = require("serverless-http")

const app = express()

const router = express.Router()

router.get("/go", (req, res) => {
    return res.send("hello world")
})

app.use("/go", router)

module.exports.handler = serverless(app)
