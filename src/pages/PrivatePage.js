import React from 'react';
import { Menu } from '../components/Menu';
import { Redirect } from 'react-router-dom';

const isAuthorization = () => {
    const token = localStorage.getItem("token") || "";
    console.log(token)
    return token.length>0;
}

const PrivatePage = (MyCompoment) => {
    
    return (props) => {
        if (!isAuthorization()) return <Redirect to="/login"/>        
        return <>
                <Menu />
                <MyCompoment {...props}/>
            </>
    }
}
export default PrivatePage;