import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav>
      <ul>
      <li><Link to="/day01">Day 1: Points Map</Link></li>
      <li><Link to="/day02">Day 2: Line Map</Link></li>
      <li><Link to="/day03">Day 3: Polygon Map</Link></li>
      {/* Add more links as you add more maps */}
      </ul>
    </nav>
  );
}

export default Sidebar;
