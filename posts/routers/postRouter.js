import express from "express"
const router = express.Router()
let posts = []
const waitlist = []

router.get("/all", (req, res) => {
  const { postId } = req?.query
  /*   console.log(postId, "postId")   */
  const postIdArray = postId?.split(",")
  /*   console.log(postIdArray, "postIdArray") */
  const existingPosts = posts.map((post) => post.id?.toString())
  /*   console.log(existingPosts) */
  if (postIdArray.toString() == existingPosts.toString()) {
    waitlist.push(res)
  } else {
    res.status(200).json({ posts })
  }
})

router.post("/", (req, res) => {
  let { title } = req?.body
  const postId = Math.floor(Math.random() * 1000).toString()
  posts = [...posts, { id: postId, title }]
  res.status(201).json({ message: "Post added successfully" })

  while (waitlist.length > 0) {
    const clientResponse = waitlist.shift()
    clientResponse.status(200).json({ posts })
  }
})

export default router
