import PropTypes from "prop-types"

const CommentList = ({ comments }) => {

  

  return (
    <div>
      <ul>
        {comments?.map((comment) => {
          return (
            <li className="list-disc ml-8" key={comment.commentId}>
              {comment.content}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
}

export default CommentList
