
import React, { useEffect, useState } from "react"


const useChef =user =>{

    const [chef,setChef]=useState(false);
    const [chefLoading, setChefLoading] = useState(true);


    useEffect(()=>{
        // console.log(user?.email);
        var email=user?.email;
      
     if(user){
        fetch(`https://afternoon-island-51531.herokuapp.com



/chef/${email}`, {
            method:'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            setChef(data.chef);
            setChefLoading(false);
            // setAdminLoading(false);
        })

     }

    },[user])
    return [chef,chefLoading]
}
export default useChef;