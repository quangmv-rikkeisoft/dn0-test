import React, {Suspense, lazy} from 'react';
import { Redirect } from 'react-router-dom';

const isAuthorization = () => {
    const token = localStorage.getItem("token") || "";
    return token.length>0;
}

const Menu = lazy(() => import('../components/Menu'));

const PrivatePage = (MyCompoment) => {
    
    return (props) => {
        if (!isAuthorization()) return <Redirect to="/login"/>        
        return <>
                <Suspense fallback="">
                    <Menu />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <MyCompoment {...props}/>
                </Suspense>
            </>
    }
}
export default PrivatePage;