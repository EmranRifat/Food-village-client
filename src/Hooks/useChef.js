import { useEffect, useState } from "react"

const useChef=user=>{

    const [chef,setChef]=useState(false);
    const [chefLoading, setChefLoading] = useState(true);


    useEffect(()=>{
        const email=user?.email;
        // console.log(email)
     if(user){
        fetch(`https://obscure-mountain-92630.herokuapp.com/chef/${email}`, {
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