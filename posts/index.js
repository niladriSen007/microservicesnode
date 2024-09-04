import express from "express"
import cors from "cors"
import postRouter from "./routers/postRouter.js"
import bodyParser from "body-parser" 
const app = express()

app.use(cors())
app.use(bodyParser.json())


app.use("/api/v1/post",postRouter)

app.listen(8000, () => {
  console.log("Server is running on port 8000")
})
