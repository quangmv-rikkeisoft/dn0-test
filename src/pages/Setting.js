import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Setting = (props) => {

  const location = useLocation();

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  
  const section = new URLSearchParams(location.search).get('section');

  return <div>
    {section?<p>Setting page - Section: {section}</p>: <p>Setting page</p>}
  </div>
}

export default Setting;