import { LOGO_URL } from '../../src/utils/constants.js';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus.js';
import UserContext from '../utils/UserContext.js';

const Header = () => {
  let [btnNameReact, setbtnNameReact] = useState('Login');
  let onlineStatus = useOnlineStatus();

  let {loggedInUser} = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-lg bg-slate-400  m-2">
      <div className="logo-container">
        <img className="object-contain h-21 w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-6 m-4">
          <li className="px-4">Online Status :{onlineStatus ? '🟢' : '🔴'}</li>
          <li className="px-4">
            <Link to="/">🏠Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">📰About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">📪Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">🧺Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">🛒Cart</Link>
          </li>
          <button
            className="login px-4"
            onClick={() => {
              btnNameReact === 'Login'
                ? setbtnNameReact('Logout')
                : setbtnNameReact('Login');
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
