import React, { useEffect, useState } from 'react';

const Allreview = () => {
    
  const [reviews,setReviews]=useState([]);
  
  var [isloading, setIsloading] = useState([]);
    
    useEffect(()=>{
      setIsloading(false);
        fetch('https://obscure-mountain-92630.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>{
          setReviews(data);
          setIsloading(true);
        })
    },[])
    // console.log(reviews);
    return (
        <div>
            <h2 className='my-2 text-success'>Total  clients review :{reviews.length}</h2>
            <div className="overflow-x-auto w-full">
                {
                  isloading?<table className="table w-full">
                  {/* <!-- head --> */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Email</th>
                      {/* <th>id</th> */}
                    </tr>
                  </thead>
                  <tbody>
                {
                    reviews.map((R,index)=>
                        <tr key={R._id}>
                       
                        <th>{index + 1}</th>
                     
                        <td>{R.name}</td>

                        <td className='text-bold'>
                         {R.description}
                          {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                        </td>
                        <td>{R.img}</td>
                        {/* <td>{R._id}</td> */}
                        
                      </tr>)
                }
                  
                  </tbody>
                 
                  
                </table>: <div className="text-center py-5">
  <div className="spinner-border animate-spin w-12 h-12 border-2 rounded-full" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
                }
              </div>
        </div>
    );
};

export default Allreview;