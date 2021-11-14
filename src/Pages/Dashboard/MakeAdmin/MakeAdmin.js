import React, { useState } from 'react';
import { Button, TextField, Alert, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('');
    const [confirmation, setConfirmation] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    };

    const handleClickOpen = () => {
      setOpen(true);
    };

    const getConfirmation = value =>{
        if(value){
            setConfirmation(true);
        }
        else{
            setConfirmation(false);
        }
        setOpen(false);
    };
  
    const handleClose = (value) => {
        setOpen(false);
        if(value){
            setConfirmation(true)
        }
        else{
            setConfirmation(false)
        }

    };

    const handleAdminSubmit = e => {
        handleClickOpen()

        if(confirmation){
            const user = { email };
            fetch('https://damp-meadow-99405.herokuapp.com/users/admin', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        }
        e.preventDefault()
    }

    return (
        <>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity= 'success'>Made Admin successfully!</Alert> }
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Are you sure to make him admin?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Admin can allow to get all the information of the website.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => getConfirmation(true)}>No</Button>
                <Button onClick={() => getConfirmation(false)} autoFocus>
                    Yes
                </Button>
                </DialogActions>
            </Dialog> 
        </>
    );
};

export default MakeAdmin;