import React, { useEffect } from 'react'

const FunctionFoo = (props) => {
  
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <p>
      Function Foo
    </p>
  )
}

export default FunctionFoo