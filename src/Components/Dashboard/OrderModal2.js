import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const OrderModal2 = ({food,setConfirmOrder,confirmOrder}) => {
    // const { name, description, _id, quantity, price } = food;
    var meal =food.filter(item=>item._id===confirmOrder.id)[0];
    const {_id}=meal;
    // console.log(meal);
    const [user] = useAuthState(auth);

    const ConfirmOrder=(event)=>{
        event.preventDefault();

        const order = {
            foodId:_id,
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
          setConfirmOrder({isOpen:false,id:'OrderModal'});
      

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

        <h3 className="font-bold text-lg text-accent">Order for: {meal.name} </h3>
        <p className="">Quantity: {meal.quantity}</p>
        <p className="">Details: {meal.description}</p>
        <p className="">Food Id: {meal._id}</p>
        <p className="fw-bold">Price: {meal.price}</p>

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
