//THis is assignment three
import React, { useState } from 'react';
import Inputs from './AssTwo/Inputs';
import GitHubContext from './GitHubContext';
import Search from './Search';
import './App.css';

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  return (
    <>
      <GitHubContext.Provider value={{ user, setUser, loading, setLoading }}>
        <Search />
        {/* <GitSearch /> */}
      </GitHubContext.Provider>
      <Inputs />
    </>
  );
}

export default App;
