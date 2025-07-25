import React from 'react';
import {Link } from 'react-router-dom';


function Header() {

  return (
    <header className="App-header">
        <h1 className='logo'>Task1</h1>
        <AppNav/>
    </header>
  );
}
function AppNav(){
  return(
    <div>
      <nav className='App-Navigation'>
        <Link to="/" className='nav-link'>Home</Link><span>&nbsp;|&nbsp;</span>
        <Link to="/posts" className='nav-link'>Posts</Link><span>&nbsp;|&nbsp;</span>
        <Link to="/comments" className='nav-link'>Comments</Link><span>&nbsp;|&nbsp;</span>
        <Link to="/albums" className='nav-link'>Albums</Link><span>&nbsp;|&nbsp;</span>
        <Link to="/photos" className='nav-link'>Photos</Link>
      </nav>
    </div>

  );
}
export { Header, AppNav };