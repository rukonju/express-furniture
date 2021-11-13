import React, { useEffect, useState } from 'react';
import { Button, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import useAuth from '../../../hooks/useAuth';
import { AddShoppingCart, Delete } from '@mui/icons-material';

const ManageOrder = () => {
    const {handleCancelOrder, orderCancelId} = useAuth();
    console.log(orderCancelId)
    const [orders, setOrders] = useState([]);
    console.log(orders)
    const [orderId, setOrderId] = useState('');
    const [orderStatus, setOrderStatus] = useState('');
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        };

        const deleteOrder = (confirmation) =>{
            if(confirmation){
                handleCancelOrder(orderId)
                handleClose()
            }
            else{
                handleClose()
            }
            
        }

    useEffect(() =>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
        .finally(setOrderStatus(''))
    },[orderCancelId, orderStatus])

    const updateOrder = (status) => {
        setOrderStatus(status)
        const order = { status };
        console.log(status)
        fetch('http://localhost:5000/orders/status', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                console.log(data);
            }
        })
    }

    const availableOrders = orders.filter(order =>order._id !== orderCancelId)
    console.log(availableOrders)

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
          '&:nth-of-type(odd)': {
              backgroundColor: theme.palette.action.hover,
            },
            // hide last border
            '&:last-child td, &:last-child th': {
                border: 0,
            },
        }));
    return (
            <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Product Name</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {availableOrders.map((order) => (
            <StyledTableRow key={order._id}>
              <StyledTableCell component="th" scope="row">
                {order?.name}
              </StyledTableCell>
              <StyledTableCell align="right">{order?.email}</StyledTableCell>
              <StyledTableCell align="right">{order?.product?.name}</StyledTableCell>
              <StyledTableCell align="right">{order?.quantity}</StyledTableCell>
              <StyledTableCell align="right">{order?.status}</StyledTableCell>
              <StyledTableCell align="right">
              <Button 
              onClick={() =>{
                setOrderId(order._id)
                setOpen(true)
              }}
               variant="outlined" 
               size='small'
               startIcon={<Delete />}
               >
                   Delete
                </Button>
              {
                  order.status !== 'Shipped' && <Button 
                  onClick={() =>updateOrder(order?.status)}
                  variant="outlined" 
                  size='small'
                  startIcon={<AddShoppingCart  />}
                  >
                      Ship
                   </Button>
              }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
        {"Are you sure to delete?"}
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
            Data is deleted from database
        </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={() => deleteOrder(false)}>No</Button>
        <Button onClick={() => deleteOrder(true)} autoFocus>
            Yes
        </Button>
        </DialogActions>
    </Dialog>
</div>
    );
};

export default ManageOrder;