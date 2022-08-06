import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import OrderModal2 from "./OrderModal2";

// import Loading from '../../Shared/Loading/Loading';

const Fooditem = () => {
  const [foods, setFoods] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [confirmOrder,setConfirmOrder]=useState({isOpen:false,id:""});
  useEffect(() => {
    setIsloading(true);
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setIsloading(false);
      });
  }, []);

  if (isloading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      {/* <h2 className="">Our Foods :{foods.length}</h2> */}

      <div className="items py-2"></div>
      <div className="overflow-x-auto w-full">
      
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label></label>
                </th>
                <th>Image/Name</th>
                <th>Chefs</th>
                <th>Token</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
           
              {foods.map((f) => (
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
                          <img src={f.img} alt="food-img" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{f.name}</div>
                        <div className="text-sm opacity-50">Available </div>
                      </div>
                    </div>
                  </td>
                  <td>{f.supplier}</td>
                  <td>{f._id}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      {f.quantity}
                    </button>
                  </th>
                  <th>
                    <label
                      htmlFor="my-modal"
                      onClick={() =>setConfirmOrder({isOpen:true,id:f._id})}
                      className="btn btn-sm  font-bold text-white bg-gradient-to-r from-accent to-primary border-none  "
                    >
                      Order Now  <i className="fa-solid px-1 fa-cart-shopping"></i>
                    </label>
                   

                    {/* <button onClick={()=>confirmFood()}   className="btn btn-accent  btn-sm">Order Now</button>
                     */}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>


      </div>

      {
        confirmOrder.isOpen &&<OrderModal2 
         food={foods}
        confirmOrder={confirmOrder }
        setConfirmOrder={setConfirmOrder}
        ></OrderModal2>
      }
     
    </div>
    
   
  );
};

export default Fooditem;
