import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    }, [user])
    return (
        <div>
            <h2>{orders?.length}</h2>
            {
                orders.map(order=>console.log(order))
            }


        </div>
    );
};

export default MyOrders;