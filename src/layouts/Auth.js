import React from 'react';
import { Outlet } from 'react-router-dom';

function Auth(props) {
    return (
        <div>
            {/* go app,.js for  batter understand */}

            <Outlet/>
            
        </div>
    );
}

export default Auth;