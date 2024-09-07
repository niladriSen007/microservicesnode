import { useEffect, useState } from "react"
import CreatePost from "./components/CreatePost"
import Post from "./components/Post"
import "./index.css"
import axios from "axios"
function App() {
  const [posts, setPosts] = useState([])

  async function getPosts(postIdArray) {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/post/all?postId=${postIdArray}`
      )
      console.log(data?.posts)
      setPosts(data?.posts)
      const newPostIdArray = data?.posts.map((post) => post?.id)
      console.log(newPostIdArray)
      getPosts(newPostIdArray)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPosts([])
  }, [])

  return (
    <div className="p-12 max-w-screen">
      <CreatePost />
      <div className="flex gap-6 py-6 w-screen flex-wrap">
        {posts?.map((post) => (
          <Post key={post?.id} {...{ post }} />
        ))}
      </div>
    </div>
  )
}

export default App
