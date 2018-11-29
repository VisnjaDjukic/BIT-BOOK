import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper container">
        <a className="brand-logo">BITbook</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a>Feed</a></li>
          <li><a>People</a></li>
          <li><a>Profile</a></li>
        </ul>
      </div>
    </nav>
  )
}
export { Header }