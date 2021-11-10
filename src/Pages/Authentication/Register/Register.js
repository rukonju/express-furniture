import React, { useState } from 'react';
import { Box,Button, Chip, Divider, TextField, Typography } from '@mui/material';
import google from '../../../images/google.png';
import facebook from '../../../images/facebook.png';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {
    const {createUser} = useFirebase()
    const [registerInfo, setRegisterInfo] = useState({})

    const getRegisterInfo = e =>{
        
        const field = e.target.name;
        const value = e.target.value;
        registerInfo[field]=value;
        const newRegisterInfo = {...registerInfo};
        setRegisterInfo(newRegisterInfo);
    }
    const handleRegister = e =>{
        createUser(registerInfo.email, registerInfo.password)
        e.preventDefault();
    }

    const style ={display:'flex', flexDirection:'column', maxWidth:'550px',margin:'auto'}
    return (
        <Box sx={{ mt:8}}>

            <Box sx={style}>
                <Typography variant='h6'>Register</Typography>
                <form 
                onSubmit={handleRegister} 
                style={{display:'flex', flexDirection:'column', padding:'10px'}}
                >
                <TextField 
                onBlur={getRegisterInfo} 
                sx={{mt:2, py:1}} 
                type='text' 
                name="Name" 
                label="Name" 
                variant="outlined" 
                />
                <TextField 
                onBlur={getRegisterInfo} 
                sx={{mt:2, py:1}} 
                type='email' 
                name='email' 
                label="Email" 
                variant="outlined" 
                />
                <TextField 
                onBlur={getRegisterInfo} 
                sx={{mt:2}} 
                type='password' 
                label="Password" 
                variant="outlined" 
                />
                <TextField 
                onBlur={getRegisterInfo} 
                sx={{mt:2}} 
                type='password' 
                name='password2' 
                label="Confirm Password" 
                variant="outlined" 
                />
                <Button 
                sx={{my:2}} 
                color='secondary' 
                variant='contained'
                >
                    Login
                </Button>
                </form>
                <Typography sx={{mb:2}}>
                    Already have an account? 
                    <Link to='/login'>Login</Link>
                </Typography>
                <Divider sx={{px:1}} >
                    <Chip label="OR" variant="outlined" />
                </Divider>
                <Box style={style}>
                    <Button sx={{mt:2,px:1}} color='secondary' variant='outlined'>
                        <img 
                        style={{alignItems:'left'}} 
                        src={google} alt="" 
                        height='30px' />
                        <Typography sx={{ml:1}}>Sign Up With Google</Typography>
                    </Button>
                    <Button sx={{mt:2,px:1}} color='secondary' variant='outlined'>
                        <img 
                        src={facebook} 
                        alt="" 
                        height='30px' />
                        <Typography sx={{ml:1}}>Sign Up With Facebook</Typography>
                    </Button>
                </Box>
            </Box>

        </Box>
    );
};

export default Register;