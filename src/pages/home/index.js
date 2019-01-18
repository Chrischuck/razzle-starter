import React from 'react';
import { Link } from '@reach/router';

const Home = () => (
  <div>
    <h1>Home  Page</h1>
    <Link to="/about">to about</Link>
  </div>
);

export default Home;
