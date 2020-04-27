import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export const Menu = () => {
  const history = useHistory();
  return (
    <div>
      <h3>Menu</h3>
      <ul id='menu'>
        <li><Link to="/dashboard">/dashboard</Link></li>
        <li><Link to="/setting">/setting</Link></li>
        <li><button data-test='logout__btn' onClick={()=> {localStorage.removeItem("token"); history.push('/login')}}>Logout</button></li>
      </ul>
    </div>
  )
}