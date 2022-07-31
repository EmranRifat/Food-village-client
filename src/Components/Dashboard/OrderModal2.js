import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const OrderModal2 = ({food,setConfirmOrder,confirmOrder}) => {
    // const { name, description, _id, quantity, price } = food;
    var jodu =food.filter(item=>item._id===confirmOrder.id)[0]
    console.log(jodu);
    const [user] = useAuthState(auth);
    // console.log(food);

    const ConfirmOrder=(event)=>{
        event.preventDefault();
        const order = {
            foodId: {},
            userId: user?.uid,
            status: "pending",
          };
          fetch("https://obscure-mountain-92630.herokuapp.com/order", {
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
          setConfirmOrder({isOpen:false,id:''});
      

    }
  return (
    <div>
    <input type="checkbox" id="my-modal" className="modal-toggle" />
    <div className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <label
          htmlFor="my-modal"
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>

        <h3 className="font-bold text-lg text-accent">Order for: {} </h3>
        <p className="">Quantity: {}</p>
        <p className="">Details: {}</p>
        <p className="">Food Id: {}</p>
        <p className="fw-bold">Price: {}</p>

        <p className="pt-4 fw-bold">User Email: {user?.email }</p>

        <p>
          <small>User name: {user?.displayName }</small>
        </p>

        <div className="modal-action">
          <label
            onClick={ConfirmOrder}
            htmlFor="my-modal "
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

export default OrderModal2;
