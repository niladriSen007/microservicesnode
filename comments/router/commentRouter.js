import express from "express"
const router = express.Router()
/* [
  {
    postId:"1",
    comments:[
      {
        id:"1",
        content:"sdscscsc"
      }
    ]
  }
] */

const commentsByPostIdArray = []

router.get("/:postId/comments", (req, res) => {
  const { postId } = req.params
  const comments = commentsByPostIdArray?.find((post) => post?.postId == postId)
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

  console.log(commentsByPostIdArray)

  res.status(201).json({ commentsArray: commentsByPostIdArray })
})

export default router
