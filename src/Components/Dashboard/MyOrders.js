import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  // const [status, setStatus] = useState();

  // console.log(status);
  useEffect(() => {
    handlestatus("pending");
  }, [user]);
  const handlestatus = (status) => {
    if (user) {
      fetch(
        `http://localhost:5000/orderbyUser?user=${user?.uid}&&status=${status}`,

        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          // console.log('res',res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  };

  let listData = orders.map((o, index) => {
    return (
      <tr key={o._id}>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={o.image} alt="food-img" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <div>
            <div className="font-bold">{o.foodName}</div>
          </div>
        </td>
        <td>{o.user}</td>
        <td>{o.token}</td>
        <td>{o.status}</td>
      </tr>
    );
  });

  return (
    <div>
      <h2>My Orders :{orders.length}</h2>

      <div className="text-center">
        <button
          onClick={() => handlestatus("pending")}
          className="btn btn-primary text-white btn-sm"
        >
          Pending
        </button>
        <button
          onClick={() => handlestatus("approved")}
          className="btn btn-success  mx-2 text-white btn-sm"
        >
          Accepted
        </button>
        <button
          onClick={() => handlestatus("reject")}
          className="btn bg-danger border-0 text-white  btn-sm px-4 "
        >
          Reject
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Food Name</th>
              <th>Email</th>
              <th>Token</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{listData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
