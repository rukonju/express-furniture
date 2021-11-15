import React, { useState } from 'react';
import { Button, TextField, Alert, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [notSuccess, setNotSuccess] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    };

    const handleClickOpen = () => {
      setOpen(true);
    };

    const makeAdmin = (confirmation, email) =>{
        const user = { email };
        if(confirmation){
            fetch('https://damp-meadow-99405.herokuapp.com/users/admin', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    setSuccess(true);
                }
                else{
                    setNotSuccess(true);
                }
            })
        }       
        setOpen(false);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    const handleAdminSubmit = e => {
        handleClickOpen();
        e.preventDefault();
    };

    return (
        <>
            <Typography variant='h6'>Make an Admin</Typography>
            <form style={{maxWidth:'550px'}} onSubmit={handleAdminSubmit}>
                <TextField
                    required
                    sx={{ width: '100%', my:1 }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="outlined" /> <br />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert sx={{maxWidth:'550px' , mt:1}} severity= 'success'>Made Admin successfully!</Alert> }
            {notSuccess && <Alert severity= 'error'>Email address is not valid!</Alert> }
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
                    Admin can get all the information of the website.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => makeAdmin(false, email)}>No</Button>
                <Button onClick={() => makeAdmin(true, email)} autoFocus>Yes</Button>
                </DialogActions>
            </Dialog> 
        </>
    );
};

export default MakeAdmin;