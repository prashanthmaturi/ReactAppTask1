import React,{useEffect,useState} from 'react';
import axios from 'axios';

export default function Photos() {
  let [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => setPhotos(response.data))
      .catch(error => console.error('Error fetching photos:', error)); 
  }, []);
  if (photos.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Photos</h2>
      <table className='photo-table' cellSpacing="0" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Thumbnail</th>
          </tr>
        </thead>
        <tbody>
          {photos.slice(0, 15).map(photo => (
              <tr key={photo.id}>
                <td>{photo.id}</td>
                <td>{photo.title}</td>
                <td><img className='photo-thumbnail' src={photo.thumbnailUrl} alt={photo.title} /></td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
