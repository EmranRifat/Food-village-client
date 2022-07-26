import React, { useEffect, useState } from 'react';

const Allreview = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <h2> Clients review :{reviews.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                  {/* <!-- head --> */}
                  <thead>
                    <tr>
                      <th>
                       
                      </th>
                      <th>Image</th>
                      <th>Description</th>
                      <th>Name</th>
                      <th>id</th>
                    </tr>
                  </thead>
                  <tbody>
                {
                    reviews.map(R=>
                        <tr key={R._id}>
                        <th>
                          <label>
                            {/* <input type="checkbox" className="checkbox" /> */}
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={R.img}  alt="food-img"/>
                              </div>
                            </div>
                            <div>
                              {/* <div className="font-bold">{f.name}</div> */}
                            </div>
                          </div>
                        </td>
                        <td>
                         {R.description}
                          {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                        </td>
                        <td>{R.name}</td>
                        <td>{R._id}</td>
                        
                      </tr>)
                }
                  
                  </tbody>
                 
                  
                </table>
              </div>
        </div>
    );
};

export default Allreview;