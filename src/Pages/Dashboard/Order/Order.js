import React, {useState} from 'react';
import { Button, Card, CardContent, CardMedia, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Order = ({order}) => {
    const {name, Color, photoUrl, price} = order?.product;
    const {handleCancelOrder} = useAuth();
    const [orderId, setOrderId] = useState('');
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const cancelOrder = (confirmation) =>{
        if(confirmation){
            handleCancelOrder(orderId)
            handleClose()
        }
        else{
            handleClose()
        }
    };

    return (
        <>
            <Grid item xs={12} sm={6} md={3}>
                <Card elevation={12} sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={photoUrl}
                    alt="green iguana"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Color: {Color}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Price: {price}
                    </Typography>
                    <Button onClick={() =>{
                    setOrderId(order._id)
                    setOpen(true)
                    }}
                    variant='contained'>Cencel</Button>
                </CardContent>
                </Card>
            </Grid>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">
                {"Are you sure to cancel?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Dont worry you can order again
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => cancelOrder(false)}>No</Button>
                <Button onClick={() => cancelOrder(true)} autoFocus>
                    Yes
                </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Order;