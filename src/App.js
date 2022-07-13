import React from 'react';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className='bg-red-200 h-screen'>
      <Link to='/photo'>photo</Link>
      <Link to='/video'>video</Link>
    </div>
  );
}

export default App;
