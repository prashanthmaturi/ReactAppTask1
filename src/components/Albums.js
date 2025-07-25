import React,{useEffect,useState} from "react";
import axios from "axios";

export default function Albums() {
  let [albums, setAlbums] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error("Error fetching albums:", error));
  }, []);
  if (albums.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Albums</h2>
      <table className="album-table" cellSpacing="0" cellPadding="10">
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.id}>
                <td>{album.userId}</td>
                <td>{album.id}</td>
                <td>{album.title}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
