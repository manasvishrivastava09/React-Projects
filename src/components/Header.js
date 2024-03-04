import {LOGO_URL} from  '../../src/utils/constants.js'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus.js';

const Header =()=>{
  let [btnNameReact, setbtnNameReact] = useState("Login");
  let onlineStatus = useOnlineStatus();
  

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status :{onlineStatus ? '🟢' : '🔴'}</li>
          <li>
            <Link to="/">🏠Home</Link>
          </li>
          <li>
            <Link to="/about">📰About Us</Link>
          </li>
          <li>
            <Link to="/contact">📪Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">🧺Grocery</Link>
          </li>
          <li>
            <Link to="/cart">🛒Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === 'Login'
                ? setbtnNameReact('Logout')
                : setbtnNameReact('Login');
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;