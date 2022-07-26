// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link, Outlet } from 'react-router-dom';
// import auth from '../../firebase.init';
// import useAdmin from '../../Hooks/useAdmin';


// const DashBoard = () => {
// const user=useAuthState(auth);

//     const [admin]=useAdmin(user);  
//     return (
//         <div className="drawer drawer-mobile 	">
//         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content ">
//             <h2 className='text-xl  text-center font-bold text-purple-500'>Welcome to Dashboard</h2>
//             <Outlet>
//             </Outlet>
            
            
//         </div>
//         <div className="drawer-side ">
//             <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//             <ul className="menu p-4 bg-sky-100	overflow-y-auto w-60  text-base-content">
//                 {/* <!-- Sidebar content here --> */}
//                 <li><Link to={'/dashboard'}>Food List</Link></li>
//                 <li><Link to={'/dashboard/myorders'}>My Orders</Link></li>
//                 <li><Link to={'/dashboard/orderlist'}>Order List</Link></li>

//                 <li><Link to={'/dashboard/review'}>  Reviews</Link></li>
//                 <li><Link to={'/dashboard/addfood'}>Add Food</Link></li>
//                 {admin && <li><Link to={'/dashboard/allusers'}>All Users</Link></li>}
               
               
               
               
               
//                 {
//                 /* <li><Link to={'/dashboard/users'}>All Users</Link></li>
//                 <li><Link to={'/dashboard/ManageDoctor'}>Manage Food</Link></li> */
//                 }
//             </ul>

//         </div>
//     </div>
//     );
// };

// export default DashBoard;