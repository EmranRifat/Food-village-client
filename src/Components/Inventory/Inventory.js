import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import './inventory.css'
import OrderModal from '../Dashboard/OrderModal';
const Inventory = () => {

    const [items, setItems] = useState([]);
    const [ order,setOrder]=useState(null);

 useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setItems(data));
        }, []);
   
    // if(isLoading){
    //     return<Loading></Loading>
    // }

    return (
        <div>
            <h2 className='container text-center text-primary pt-20 fw-bold'>Inventory All Products: {items.length}</h2>
       
        <div  className='items my-12'>
          {
            items.map(item=><InventoryItem
            item={item}
            key={item._id}
            setOrder={setOrder}
            ></InventoryItem>)
          }
          
        </div>
        {order&&<OrderModal 
        order={order}
        setOrder={setOrder}
        ></OrderModal>}
     
     

        {/* <Fooditem setOrder={setOrder}></Fooditem> */}
        </div>
    );
};

export default Inventory;