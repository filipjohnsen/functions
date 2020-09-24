const express = require("express")
const serverless = require("serverless-http")

const app = express()

const router = express.Router()

router.get("/", (req, res) => {
    console.log(req.params.id, req.params.subid)
    return res.send("hello world")
})

app.use("/.netlify/functions/go", router)

module.exports.handler = serverless(app)
