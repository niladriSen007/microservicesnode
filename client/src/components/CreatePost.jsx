import axios from "axios"
import { useState } from "react"

const CreatePost = () => {
  const [postText, setPostText] = useState("")
  async function createPost() {
    try {
      const { data } = await axios.post("http://localhost:8000/api/v1/post", {
        title: postText,
      })
      console.log(data?.message)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createPost()
    setPostText("")
  }
  return (
    <div className="">
      <h1 className="text-3xl font-semibold">Create Post</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-80 justify-start items-start"
      >
        <label htmlFor="postText">Title</label>
        <input
          id="postText"
          name="postText"
          value={postText}
          className="border border-black "
          onChange={(e) => setPostText(e.target.value)}
        ></input>
        <button className="px-2 py-1 bg-blue-700 text-white rounded-md">
          Post
        </button>
      </form>
    </div>
  )
}
export default CreatePost
