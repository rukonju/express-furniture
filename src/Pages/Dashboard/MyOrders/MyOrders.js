import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Order from '../Order/Order';

const MyOrders = () => {
    const {user,orderCancelId} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://damp-meadow-99405.herokuapp.com/orders?email=${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    }, [user, orderCancelId]);

    const myOrders = orders.filter(order=>order._id !== orderCancelId)

    return (
        <>
            <h2>{orders?.length ?`You have ${orders?.length} order`:'No order found'}</h2>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {
                myOrders.map(order=><Order key={order._id} order={order}></Order>)
            }
            </Grid>
        </>
    );
};

export default MyOrders;