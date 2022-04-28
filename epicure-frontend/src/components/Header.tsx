import { Link } from "react-router-dom";
import { SearchInput } from "./reusable/SearchInput";

export const Header = () => {
  return (
    <header className='header flex-row space-around'>
      <ul className='flex-row flex-center space-between gap-30'>
        <Link to='/'>
          <li className='nav-item logo flex-center flex-row'>
            <img src='assets/logo/logo.jpg' alt='logo'></img>
            <p className='logo-title'>EPICURE</p>
          </li>
        </Link>
        <Link to='/restaurants'>
          <li className='nav-item'>Restaurants</li>
        </Link>
        <li className='nav-item'>Chefs</li>
      </ul>
      <ul className='flex-row flex-center gap-30'>
        <li className='nav-item'>
          <SearchInput />
        </li>
        <li className='nav-item'>
          <img src='assets/icons/user-icon.svg' alt='user'></img>
        </li>
        <li className='nav-item'>
          <img src='assets/icons/bag-icon.svg' alt='cart'></img>
        </li>
      </ul>
    </header>
  );
};
