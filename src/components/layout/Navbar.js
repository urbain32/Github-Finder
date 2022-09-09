import React from 'react';
// Proptypes shortcut is impt
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = ({icon,title}) => {
  
    return (
      <div>
        <nav className='navbar bg-primary'>
          <h1>
            <i className={icon} /> {title}
          </h1>
          <ul>
            <li>
              {/* link will help that what was on the page
              before you go on another page stay
              but a tag will refresh it */}
              
              {/* <a href="/">Home</a> */}
              <Link to='/'>Home</Link>
            </li>
            <li>
              {/* <a href='/about'>About</a> */}
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}
    Navbar.defaultProps = {
      title: 'Github Finder',
      icon: 'fa-brands fa-github',
    };

    Navbar.propTypes = {
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    };

export default Navbar;
