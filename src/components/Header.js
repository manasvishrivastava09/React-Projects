import { LOGO_URL } from '../../src/utils/constants.js';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus.js';
import UserContext from '../utils/UserContext.js';
import { useSelector } from 'react-redux';

const Header = () => {
  let [btnNameReact, setbtnNameReact] = useState('Login');
  let onlineStatus = useOnlineStatus();

  let {loggedInUser} = useContext(UserContext);

  //Subscribing to the store using  Selector is a hook inside react
  const cartItems = useSelector((store)=> store.cart.items);

  return (
    <div className="flex justify-between shadow-lg bg-slate-400  m-2">
      <div className="logo-container">
        <img className="object-contain h-21 w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-6 m-4">
          <li className="px-4 font-semibold">
            <Link to="/">🏠Home</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/about">📰About Us</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/contact">📪Contact Us</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/grocery">🧺Grocery</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/cart">🛒Cart ({cartItems.length}) </Link>
          </li>
          <button
            className="login px-4 font-semibold"
            onClick={() => {
              btnNameReact === 'Login'
                ? setbtnNameReact('Logout')
                : setbtnNameReact('Login');
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-semibold">{loggedInUser}</li>
          <li className="px-4">{onlineStatus ? 'Online 🟢' : 'Offline 🔴'}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
