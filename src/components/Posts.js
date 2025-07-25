import React,{useEffect,useState} from 'react';
import axios from 'axios';


export default function Posts() {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);
  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <table className='post-table' cellSpacing="0" cellPadding="10">
        <thead>
          <tr>
            <th>UserID</th>
            <th>id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
            {posts.map(post => (
                <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
