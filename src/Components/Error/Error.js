import React from 'react';
import error from '../../Assets/Images/CodePen-404-Page.gif';
import SubNavbar from '../../Shared/Navbar/SubNavbar';
function Error(props) {
    return (
        <div >
            <SubNavbar/>
<img  src={error} alt="Loading..." />
        </div>
    );
}

export default Error;