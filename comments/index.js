import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import commentRouter from "./router/commentRouter.js"

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use("/api/v1/posts", commentRouter)

app.listen(5000, () => {
  console.log(`server is running on port 5000`)
})
