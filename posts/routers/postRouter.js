import express from "express"
const router = express.Router()
let posts = []

router.get("/", (req, res) => {
  res.send(posts)
})

router.post("/", (req, res) => {
  let { title } = req?.body
  const postId = Math.floor(Math.random() * 1000).toString()
  posts = [...posts, { id: postId, title }]
  res.status(201).json({ message: "Post added successfully" })
})

export default router
