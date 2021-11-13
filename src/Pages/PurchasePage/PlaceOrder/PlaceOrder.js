import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = ({product}) => {
    const {user} = useAuth();
    const [purchaseInfo, setPurchaseInfo] = useState({});
    const [quantityError, setQuantityError] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    
    const getPurchaseInfo = e =>{
        const field = e.target.name;
        const value = e.target.value;
        purchaseInfo[field]= value;
        if(!purchaseInfo.name){
            purchaseInfo.name = user?.displayName
        }
        if(!purchaseInfo.email){
            purchaseInfo.email = user?.email
        }
        if(!purchaseInfo.quantity){
            purchaseInfo.quantity=1;
        }
        purchaseInfo.product = product;
        purchaseInfo.status = 'pending';
        const newPurchaseInfo = {...purchaseInfo};
        
        console.log(newPurchaseInfo)
        setPurchaseInfo(newPurchaseInfo);
    };

    const handlePurchase = e =>{
        if(purchaseInfo.quantity<0){
            setQuantityError(true)
        }
        else{
            fetch('https://damp-meadow-99405.herokuapp.com/orders',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(purchaseInfo)
            })
            .then(res=>res.json())
            .then(result=>{
                if(result.insertedId){
                    setOrderPlaced(true)
                }
            })
        }
        e.preventDefault();
    }

    const style ={display:'flex', flexDirection:'column', maxWidth:'550px',margin:'auto'};

    return (
        
            <Box sx={style}
                    >
                        <Typography variant='h6'>Place Order</Typography>
                        <form 
                            onSubmit={handlePurchase} 
                            style={{display:'flex', flexDirection:'column',}}
                            >
                            <TextField
                            onBlur={getPurchaseInfo} 
                            sx={{mt:2}}
                            id="outlined-required" 
                            type='text' 
                            name="name" 
                            label="Name" 
                            value={user?.displayName || ''} 
                            />
                            
                            <TextField 
                            sx={{mt:2}} 
                            id="outlined-read-only-input"
                            onBlur={getPurchaseInfo} 
                            type='email' 
                            name='email' 
                            label="Email" 
                            value={user?.email || ''}
                            />
                            <TextField
                            required 
                            sx={{mt:2}} 
                            onBlur={getPurchaseInfo} 
                            type='num' 
                            name="phone" 
                            label="Phone" 
                            variant="outlined" 
                            />
                            <TextField 
                            required
                            onBlur={getPurchaseInfo} 
                            sx={{mt:2}} 
                            type='text' 
                            name='address' 
                            label="Address" 
                            variant="outlined" 
                            />
                            <TextField
                            helperText={`${quantityError? 'Enter a positive number': ''}`} 
                            required
                            error={quantityError?true:false}
                            onBlur={getPurchaseInfo} 
                            sx={{mt:2}} 
                            type='number' 
                            name='quantity' 
                            label="Quantity"
                            defaultValue='1' 
                            variant="outlined"
                            inputProps={{ inputMode: 'numeric', pattern: '[1-9]' }} 
                            />
                            <Button 
                            type='submit'
                            sx={{my:2}} 
                            color='secondary' 
                            variant='contained'
                            >
                                Place Order
                            </Button>
                            {orderPlaced && <Alert severity="success">Successfully place your order  <Link to='/dashboard'>click here</Link> to see</Alert>}
                        </form>
                        </Box>
    );
};

export default PlaceOrder;