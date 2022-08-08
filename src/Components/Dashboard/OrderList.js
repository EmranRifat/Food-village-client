import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
// import { toast } from "react-toastify";
// import { Link, useParams } from "react-router-dom";
const OrderList = () => {
  const [user] = useAuthState(auth);

  // const { userId } = useParams();
  const [orders, setOrders] = useState([]);
  var [pending, setPending] = useState([]);
  var [isloading, setIsloading] = useState([]);

  // console.log(orders);

  const acceptFood = (id, status) => {
    fetch(`https://afternoon-island-51531.herokuapp.com

/orderstatuschange`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ id: id, status: status }),
    }).then((res) => {
      statusFetchHendallers("pending");
    });
  };

  useEffect(() => {
    statusFetchHendallers("pending");
  }, []);
  const statusFetchHendallers = (status) => {
    setIsloading(false);
    if (status === "pending") {
      setPending(true);
    } else {
      setPending(false);
    }
    fetch(`https://afternoon-island-51531.herokuapp.com



/allorderlist/${status}`,{
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsloading(true);
      });
  };
  return (
    <div>
      <h2 className="text-accent fw-bold py-2 ml-8">
        Total Orders: {orders.length}
      </h2>

      <div className="text-center">
        <button
          onClick={() => statusFetchHendallers("pending")}
          className="btn btn-primary text-white btn-sm"
        >
          Pending
        </button>

        <button
          onClick={() => statusFetchHendallers("approved")}
          className="btn btn-success  mx-2 text-white btn-sm"
        >
          Accepted
        </button>

        <button
          onClick={() => statusFetchHendallers("reject")}
          className="btn bg-danger border-0 text-white  btn-sm px-4 "
        >
          Reject
        </button>

        <button
          onClick={() => statusFetchHendallers("delivered")}
          className="btn bg-info border-0 text-white mx-2 btn-sm px-4 "
        >
          Delivered
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        {
          isloading? <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Food Name</th>
              <th>Email</th>
              <th>Token</th>
              <th>Status</th>
              {pending && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {orders.map((f, index) => (
              // console.log(f),
              <tr key={f._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={f.image} alt="food-img" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{f.foodName}</td>
                <td>{f.user}</td>
                <td>{f.token}</td>
                <td>{f.status}</td>

                {pending && (
                  <td>
                    <button
                      onClick={() => acceptFood(f._id, "approved")}
                      className="btn  btn-accent px-4 btn-xs"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => acceptFood(f._id, "reject")}
                      className="btn btn-danger mx-2 px-4 btn-xs"
                    >
                      Reject
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table> : <div className="text-center py-5">
  <div className="spinner-border animate-spin w-12 h-12 border-2 rounded-full" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
        }
        
      </div>
    </div>
  );
};

export default OrderList;
