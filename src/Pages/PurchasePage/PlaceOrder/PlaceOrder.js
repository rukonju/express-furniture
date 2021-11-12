import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = ({product}) => {
    const {user} = useAuth();
    const [purchaseInfo, setPurchaseInfo] = useState({});
    const [quantityError, setQuantityError] = useState(false);
    const getPurchaseInfo = e =>{
        const field = e.target.name;
        const value = e.target.value;
        purchaseInfo[field]= value;
        if(!purchaseInfo.name){
            purchaseInfo.name=user?.displayName
        }
        if(!purchaseInfo.email){
            purchaseInfo.email=user?.email
        }
        purchaseInfo.product=product;
        const newPurchaseInfo = {...purchaseInfo};
        
        console.log(newPurchaseInfo)
        setPurchaseInfo(newPurchaseInfo);
    };

    const handlePurchase = e =>{
        if(purchaseInfo.quantity<0){
            setQuantityError(true)
        }
        else{
            fetch('http://localhost:5000/orders',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(purchaseInfo)
            })
            .then(res=>res.json())
            .then(result=>console.log(result))
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
                            helperText={`${quantityError && 'error'}`} 
                            required
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
                        </form>
                        </Box>
    );
};

export default PlaceOrder;