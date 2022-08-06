import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

const CardDetails = () => {
   
    const { userId } = useParams();
    const [users,setUsers]=useState([]);

    useEffect(()=>{

        fetch(`http://localhost:5000/fooddetails/${userId}`)
        .then(res=>res.json())
        .then(data=>setUsers(data))

    },[userId])

    return (
        <div className="  text-center  justify-center  content-center">
           <h2 className='pt-16 font-bold'>Welcome to detail Id: {users._id}</h2> 
         
   <div style={{'marginLeft':'25%'}}  className="card w-50 justify-center content-center items-center  text-center	 bg-base-100 my-4  shadow-xl">
  <figure><img  src={users.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{users.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{users.description}</p>
    <p className='font-bold'> Price: {users.price}</p>
    <p>Quantity:{users.quantity}</p>
    <p className='font-bold'>Product-Id:{users._id}</p>
    <p>Chef: {users.supplier}</p>

    <div className="card-actions   justify-center">
    <button className="btn btn-sm btn-primary">Update</button>
<button className="btn btn-sm btn-secondary">Remove</button>
    </div>
  </div>
</div>
</div>
       
    );
};

export default CardDetails;