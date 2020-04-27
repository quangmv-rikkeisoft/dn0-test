import React, { memo } from 'react';
import { Link, useHistory } from 'react-router-dom';
const Menu = () => {
  const history = useHistory();
  return (
    <div>
      <h3>Menu</h3>
      <ul id='menu'>
        <li><Link to="/dashboard">/dashboard</Link></li>
        <li><Link to="/setting">/setting</Link></li>
        <li><Link to="/functions">/functions</Link></li>
        <li><Link to="/functions/foo">/functions/foo</Link></li>
        <li><button data-test='logout__btn' onClick={()=> {localStorage.removeItem("token"); history.push('/login')}}>Logout</button></li>
      </ul>
    </div>
  )
}
export default memo(Menu);