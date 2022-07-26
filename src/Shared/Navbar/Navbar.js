import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useLocation } from 'react-router-dom';


const Navbar = () => {
 
  const [user] = useAuthState(auth);
  const root = useLocation();
    // console.log(root.pathname);
// const role='http://localhost:3000/dashboard';
let test='';
if (root.pathname !== "/dashboard"){
//   console.log("broooo");
    test=  <>
 
   
    </>
         
 


}

 const logout=()=>{
  signOut(auth);
  localStorage.removeItem('accessToken');
};


const menuItems = <>
{test}
<li> <Link  to="/">Home </Link></li>
    <li><Link to="/inventory">Foods</Link></li>
    <li><Link to="/review">Review</Link></li>
    <li><Link to="/about">About</Link></li> 
    <li><Link to="/dashboard">Dashboard</Link></li>   
{/* {
   user&& <li><Link to="/dashboard">Dashboard</Link></li>    
} */}
{/* {root!=='/dashboard' && <li><Link  to="/">Home </Link></li>} */}




<li>{user ? <button className="btn btn-warning rounded-3xl text-white " onClick={logout}>SignOut</button>
    : <Link to="/login">Login</Link>}</li>

</>


    return (
      <div className="navbar bg-base-100 px-10 ">
      <div className="navbar-start">
          <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {menuItems}
              </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-3xl fw-bold">FOOD<span className='text-orange-600'>RANGER</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
              {menuItems}
          </ul>
      </div>
      <div className="navbar-end">
      <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
      {/* <label  for="my-drawer-2"  className="btn btn-primary drawer-button lg:hidden">sidebar</label> */}
      </div>
  </div>
     
    );
};

export default Navbar;