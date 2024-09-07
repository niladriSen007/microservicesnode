import express from "express"
const router = express.Router()

const commentsByPostIdArray = []


router.get("/:postId/comments", (req, res) => {
  const { postId } = req.params
  console.log(postId,"postId")

  const comments = commentsByPostIdArray?.filter((post) => post?.postId == postId)

    console.log(comments,"cmnt")
    res.status(200).json({ comments })
  
})

router.post("/:postId/comments", (req, res) => {
  const { postId } = req.params
  const commentId = Math.floor(Math.random() * 1000).toString()
  const { content } = req.body
  const comment = {
    id: commentId,
    content,
  }

  let commentsForSpecificPost = commentsByPostIdArray?.filter(
    (post) => post?.postId === postId
  )
  console.log(commentsForSpecificPost, "Nil")
  if (commentsForSpecificPost?.length == 0) {
    const obj = {
      postId: postId,
      comments: [comment],
    }
    commentsByPostIdArray?.push(obj)
  } else {
    commentsForSpecificPost[0]?.comments?.push(comment)
  }

  console.log(commentsByPostIdArray,"xxx")

  res.status(201).json({ commentsArray: commentsByPostIdArray })


})

export default router
