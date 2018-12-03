import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">BITbook</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Feed</Link></li>
          <li><Link to="/">People</Link></li>
          <li><Link to="/">Profile</Link></li>
        </ul>
      </div>
    </nav>
  )
}
export { Header }