import PropTypes from "prop-types"
import CommentList from "./CommentList"
import CreateComment from "./CreateComment"

const Post = ({ post }) => {
  return (
    <div className="p-2 border border-black rounded-md">
      <h2 className="text-2xl">{post?.title}</h2>
     
      <CreateComment  {...{post}} />
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}
export default Post
