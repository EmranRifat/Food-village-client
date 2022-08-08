import React from "react";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const OrderModal = ({ order, setOrder }) => {
  const { name, description, _id, quantity, price } = order;
  const [user,loading] = useAuthState(auth);
  if(loading){
    return <p>Loading..</p>
  }
  // console.log(user);
  const handleOrder = (event) => {
    event.preventDefault();

    const order = {
      foodId: _id,
      userId: user?.uid,
      status: "pending",
    };

    fetch("https://afternoon-island-51531.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your order is Confirm");
      });

    // to closed the modal
    setOrder(null);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg text-accent">Order for: {name} </h3>
          <p className="">Quantity: {quantity}</p>
          <p className="">Details: {description}</p>
          <p className="">Food Id: {_id}</p>
          <p className="fw-bold">Price: {price}</p>

          <p className="pt-4 fw-bold">User Email: {user.email }</p>

          <p>
            <small>User name: {user?.displayName }</small>
          </p>

          <div className="modal-action">
            <label
              onClick={handleOrder}
              htmlFor="my-modal-6 "
              className="btn btn-accent text-white"
            >
              Confirm
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
