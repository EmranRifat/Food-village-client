import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OrderModal from './OrderModal';
// import Loading from '../../Shared/Loading/Loading';

const Fooditem = ({order,setOrder}) => {
const [foods,setFoods]=useState([]);

useEffect(()=>{
    fetch("http://localhost:5000/foods")
    .then(res=>res.json())
    .then(data=>setFoods(data))
    },[])

// if (Loading) {
//     return <Loading></Loading>
// }
const confirmFood=()=>{

}
    return (

        <div>
           <h2 className="text-center">Our services :{foods.length}</h2>

           <div  className='items py-2'>
         
          
        </div>
           <div className="overflow-x-auto w-full">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>
                        <label>
                        </label>
                      </th>
                      <th>Image/Name</th>
                      <th>Chefs</th>
                      <th>Token</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                {
                    foods.map(f=>
                 
                        <tr key={f._id}>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={f.img}  alt="food-img"/>
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{f.name}</div>
                              <div className="text-sm opacity-50">Available </div>
                            </div>
                          </div>
                        </td>
                        <td>
                         {f.supplier}
                        
                        </td>
                        <td>{f._id}</td>
                        <th>
                          <button className="btn btn-ghost btn-xs">{f.quantity}</button>
                        </th>
                        <th>
                  <Link to="/inventory"><button onClick={()=>confirmFood()}   className="btn btn-accent  btn-sm">Order Now</button></Link> 
     
                        </th>
                      </tr>)
                }
                  
                  </tbody>
                 
                  
                </table>
              </div> 
  
        </div>
            
    );
};

export default Fooditem;