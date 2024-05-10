import React, { useState, useEffect } from 'react';
const ComponenteAPI = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



useEffect(() => {
// Endpoint para obtener las publicaciones de JSONPlaceholder
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Hacer la solicitud a la API
fetch(apiUrl)
.then(response => response.json())
.then(data => setPosts(data))
.catch(error => setError(error.message))
.finally(() => setLoading(false));
}, []);

return (
    <div className="list-group">
    <h1>Posts</h1>
    {loading ? (
    <p>Loading...</p>
    ) : (
    <ul className="list-group">
    {error ? (
    <p>Error: {error}</p>
    ) : (
    posts.map(post => (
    // <li  className="card border-dark mb-3" style="max-width: 20rem;" key={post.id}>
    // <h3 className="card-title">{post.title}</h3>
    // <p className="card-text">{post.body}</p>
    // </li>
    <div class="card border-dark m-3 " key={post.id}>
    <div class="card-body">
      <h4 class="card-title">{post.title}</h4>
      <p class="card-text">{post.body}</p>
    </div>
  </div>

    ))
    )}
    </ul>
    )}
    </div>
    );
}

export default ComponenteAPI;