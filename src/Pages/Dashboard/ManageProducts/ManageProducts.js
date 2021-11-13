import React, { useEffect, useState } from 'react';
import { Button, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import useAuth from '../../../hooks/useAuth';



const ManageProducts = () => {
    const {handleDeleteProduct, deletedProductId} = useAuth()
    const [products, setProducts] = useState([]);
    const [productId, setProductId] = useState('');
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        };

        const deleteProduct = (confirmation) =>{
            if(confirmation){
                handleDeleteProduct(productId)
                handleClose()
            }
            else{
                handleClose()
            }
            
        }
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
        // hide last bproduct
        '&:last-child td, &:last-child th': {
          bproduct: 0,
        },
      }));

    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const availableProducts = products.filter(product => product._id !== deletedProductId )
    return (
        <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Color</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {availableProducts.map((product) => (
              <StyledTableRow key={product._id}>
              <StyledTableCell component="th" scope="row">
                {product?._id}
              </StyledTableCell>
              <StyledTableCell align="right">{product?.name}</StyledTableCell>
              <StyledTableCell align="right">{product?.Color}</StyledTableCell>
              <StyledTableCell  align="right">
              <Button 
              onClick={() => {
                setOpen(true)
                setProductId(product._id)

              }} 
              variant="outlined" 
              startIcon={<Delete />}>Delete</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div>
      
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
                    <Button onClick={() => deleteProduct(false )}>No</Button>
                    <Button onClick={() => deleteProduct(true)} autoFocus>
                        Yes
                    </Button>
                    </DialogActions>
                </Dialog>
    </div>
          </>
    );
};

export default ManageProducts;