import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import useChef from '../Hooks/useChef';
import SubNavbar from '../Shared/Navbar/SubNavbar';

function DashBoard() {
    const [user] = useAuthState(auth);
    const [admin]=useAdmin(user); 
    const [chef]=useChef(user);
    // console.log(chef);
    // console.log(admin); 
    return (
        <div>
            <SubNavbar/>
            <div className="drawer drawer-mobile 	">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
            <h2 className='text-xl  text-center font-bold text-purple-500'>Welcome to Dashboard</h2>
            <Outlet /> 
        </div>
        <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 bg-sky-100	overflow-y-auto w-60  text-base-content">
                {/* <!-- Sidebar content here --> */}
              
                <svg className="text-base-content pointer-events-none absolute z-1 my-2 ml-1 mb-2 stroke-current opacity-60  " width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>


                <div>  <input  type="search" name="search"  placeholder= " Search"  className="input h-8" /></div>
                <li><Link to={'/dashboard'}><i className="fa-solid fa-cart-arrow-down"></i> Food List</Link></li>
                <li><Link to={'/dashboard/myorders'}><i className="fa-solid fa-house"><i className="fa-solid fa-cart-xmark"></i> </i> My Orders</Link></li>
                <li><Link to={'/dashboard/review'}><i className="fa-solid fa-user"></i>  Reviews</Link></li>
                    
               {admin  && <>
                <li><Link to={'/dashboard/orderlist'}><i className="fa-solid fa-table-list"></i> Order List</Link></li>
                <li><Link to={'/dashboard/addfood'}> <i className="fa-solid fa-utensils"></i>Add Food</Link></li>
                <li><Link to={'/dashboard/allusers'}><i className="fa-solid fa-bell"></i>All Users</Link></li>
                <li><Link to={'/dashboard/kitchen'}><i className="fa-solid fa-mug-hot"></i>Kitchen</Link></li>
                </>}
                {
                    chef&&<li><Link to={'/dashboard/kitchen'}><i className="fa-solid fa-mug-hot"></i>Kitchen</Link></li>
                }
             
                
                {
                /* <li><Link to={'/dashboard/users'}>All Users</Link></li>
                <li><Link to={'/dashboard/ManageDoctor'}>Manage Food</Link></li> */
                }
                
            </ul>

        </div>
    </div>
        </div>
        
    );
}

export default DashBoard;