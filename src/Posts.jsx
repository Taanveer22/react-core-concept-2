import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
  const postsBox = {
    border: "2px solid blue",
    margin: "20px",
    padding: "20px",
  };

  // step 1
  const [posts, setPosts] = useState([]);
  // step 2
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      // step 3
      .then((data) => setPosts(data));
  }, []);

  return (
    <div style={postsBox}>
      {/* step 4 */}
      <h1>Total Posts: {posts.length}</h1>

      {/* step 5 */}

      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
}

/*
1. create a state to store the data
2. create useEffect hooks with no dependencies
3. use fetch api to load the data
4. set loaded data to the state
5. show the data in the ui
*/
