import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import CommentList from "./CommentList"

const CreateComment = ({ post }) => {
  const [commentText, setCommentText] = useState("")
  const [comments, setComments] = useState([])

  async function getComments() {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/posts/${post?.id}/comments`
      )
      console.log(data?.comments?.find((post) => post.id === post.id)?.comments,"Nil")
      setComments(data?.comments?.find((post) => post.id === post.id)?.comments)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getComments()
  }, [])

  async function createComment() {
    console.log(post?.id,"yyy")
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/posts/${post?.id}/comments`,
        {
          content: commentText,
        }
      )
      console.log(
        data?.commentsArray?.find((fetchpost) => post.id == fetchpost.postId)?.comments
      )
      setComments(
        data?.commentsArray?.find((fetchpost) => post.id == fetchpost.postId)?.comments
      )
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(commentText)
    createComment()
    setCommentText("")
  }
  return (
    <div className="py-4">
      <ul>
        <CommentList {...{ post, comments }} />
      </ul>
      <form onSubmit={handleSubmit} className="flex items-end gap-1">
        <div className="flex flex-col">
          <label htmlFor="postText">Comment</label>
          <input
            id="postText"
            name="postText"
            value={commentText}
            className="border border-black"
            onChange={(e) => setCommentText(e.target.value)}
          ></input>
        </div>
        <button className="bg-green-600 text-white px-2 py-1 rounded-md">
          Post
        </button>
      </form>
    </div>
  )
}

CreateComment.propTypes = {
  post: PropTypes.object.isRequired,
}

export default CreateComment
