//THis is assignment three
import React, { useState, useEffect, useContext } from 'react';
import GitHubContext from './GitHubContext';

function Search() {
  const [username, setUsername] = useState('');
  const { user, setUser, loading, setLoading } = useContext(GitHubContext);

  useEffect(() => {
    if (username.trim()) {
      setLoading(true);
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        });
    }
  }, [username, setUser, setLoading]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => setUsername(username)}>Search</button>

      {loading && <p>Loading...</p>}
      {!loading && user && user.login && (
        <div>
          <img src={user.avatar_url} alt="User avatar" width="100" />
          <h2>{user.name}</h2>
          <p>Username: {user.login}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Repos: {user.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default Search;
