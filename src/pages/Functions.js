import React, { useEffect } from 'react'

const Functions = (props) => {

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <p>
      Functions page
    </p>
  )
}

export default Functions