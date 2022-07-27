import './App.css';
import { Routes, Route, Router } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Shared/Navbar/Navbar';
import Login from './Shared/Login/Login';
import About from './Components/About/About';
import SignUp from './Shared/Login/SignUp';
import Review from './Components/Review/Review';
import RequireAuth from './Shared/Login/RequireAuth';
import Book from './Components/Book/Book';
import Form from './Components/Form/Form';
import Inventory from './Components/Inventory/Inventory';
import InventoryItem from './Components/InventoryItem/InventoryItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Fooditem from './Components/Dashboard/Fooditem';
import AddFood from './Components/Dashboard/AddFood';
import Allreview from './Components/Dashboard/Allreview';
import OrderList from './Components/Dashboard/OrderList';
import AllUsers from './Components/Dashboard/AllUsers';
import MyOrders from './Components/Dashboard/MyOrders';
import Chefs from './Components/Chefs/Chefs';


// layout//
import Web from './layouts/Web';
import Auth from './layouts/Auth';
import DashBoard from './layouts/DashBoard';

import React from 'react';
import Error from './Components/Error/Error';
import RequireAdmin from './Shared/Login/RequireAdmin';
import CardDetails from './Components/CardDetails/CardDetails';
import Kitchen from './Components/Dashboard/Kitchen';

function App() {
  return (
    <div>
      <Routes>
       
      <Route path="/" element={<Web></Web>}>
        <Route index element={<Home></Home>}/>
        <Route path='about' element={<About></About>}/>
        <Route path='review' element={<Review></Review>}/>
        <Route path='inventory' element={<Inventory></Inventory>}/>
        <Route path='chefs' element={<Chefs></Chefs>}/>
        <Route path="/user/:userId" element={<CardDetails></CardDetails>}></Route>

      </Route>

      
      <Route path="/login" element={<Auth></Auth>}>
        <Route index element={<Login></Login>}/>
      </Route>

      <Route path="/signup" element={<Auth></Auth>}>
        <Route index element={<SignUp></SignUp>}/>
      </Route>
      
      <Route path="/dashboard" element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
       
        <Route index element={<Fooditem></Fooditem>}/>
        <Route path='review' element={<Allreview></Allreview>}/>
        <Route path='addfood' element={<RequireAdmin><AddFood></AddFood></RequireAdmin>}/>
        <Route path='orderlist' element={<OrderList></OrderList>}/>
        <Route path='allusers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}/>
        <Route path='myorders' element={<MyOrders></MyOrders>}/>
        <Route path='kitchen' element={<Kitchen></Kitchen>}/>
      </Route>


      <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}






// function App() {
//   return (
//     <div className='App' >
//         <Navbar/>
//       <Routes>
//   <Route path="/" element={<Home></Home>}></Route>
//   <Route path="login" element={<Login></Login>}></Route>
//   <Route path="signup" element={<SignUp></SignUp>}></Route>
//   <Route path="about" element={<About></About>}></Route>
//   <Route path="book" element={<Book></Book>}></Route>
//   <Route path="form" element={<Form></Form>}></Route>
//   <Route path='/user/:userId' element={<CardDetails></CardDetails>}></Route>
//   <Route path="inventory" element={<Inventory></Inventory>}></Route>
//   <Route path="inventoryItem" element={<InventoryItem></InventoryItem>}></Route>
 
 
//   <Route path="review" element={
//    <RequireAuth>
//           <Review></Review>
//    </RequireAuth>
// }></Route>

// <Route  path="dashboard" element={
//           <RequireAuth>
//             <Dashboard />
//           </RequireAuth>
//         }>

//           <Route index element={<Fooditem></Fooditem>}></Route>
//           <Route path='review' element={<Allreview></Allreview>}></Route>
//           <Route path='addfood' element={<AddFood></AddFood>}></Route>
//           <Route path='orderlist' element={<OrderList></OrderList>}></Route>
//           <Route path='allusers' element={<AllUsers></AllUsers>}></Route>
//           <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
//           <Route path='chefs' element={<Chefs></Chefs>}></Route>
         
//         </Route>




  
//      </Routes>
//     

//     </div>
//   );
// }

export default App;
