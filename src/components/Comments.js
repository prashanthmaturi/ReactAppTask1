import React,{useState,useEffect} from 'react';
import axios from 'axios';


export default function Comments() {
  let [comments, setComments] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments:', error));
  }, []);
  if (comments.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Comments</h2>
      <table className='comment-table' cellSpacing="0" cellPadding="10">
        <thead>
          <tr>
            <th>Post ID</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {comments.map(comment => (

              <tr key={comment.id}>
                <td>{comment.postId}</td>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
              </tr>
           
          ))}
        </tbody>
      </table>
    </div>
  );
}
