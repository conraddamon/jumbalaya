import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './NavBar.css';

const LINKS = [
  { target: '/play', text: 'Play' },
  { target: '/games', text: 'Games' },
  { target: '/faq', text: 'FAQ' },
  { target: '/help', text: 'Help' },
  { target: '/contact', text: 'Contact' },
];

function NavBar() {

  const time = moment().format('HH:mm:ss');

  const links = LINKS.map((link, index) => {
    const separator = index > 0 ? <span> | </span> : null;
    return (
      <span key={link.target}>
	{separator}
	<Link className="NavBar__Link" to={link.target}>{link.text}</Link>
      </span>
    );
  });
  
  return (
    <div className="NavBar">
      <div className="NavBar__Time">{time}</div>
      <div className="NavBar__Nav">
        {links}
      </div>
    </div>
  );
}

export default NavBar;
