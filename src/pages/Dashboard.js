import React, { useEffect } from 'react';

const Dashboard = (props) => {

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <div>
      <p data-test='db__welcome'>
        Welcome to dashboard page
      </p>
    </div>
  )
}

export default Dashboard;