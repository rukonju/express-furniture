import React, { useState } from 'react';
import { Box,Button, Chip, Divider, TextField, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router';
import google from '../../../images/google.png';
import facebook from '../../../images/facebook.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const {googleSignIn, signIn} = useAuth()
    const [loginInfo, setLoginInfo] = useState({})

    const getLoginInfo = e =>{
        const field = e.target.name;
        const value = e.target.value;
        loginInfo[field]=value;
        const newLoginInfo = {...loginInfo};
        setLoginInfo(newLoginInfo);
    }
    const handleLogin = e =>{
        signIn(loginInfo.email, loginInfo.password, navigate, from)
        e.preventDefault()
    }
    
    return (
        <Box sx={{ mt:8}}>

            <Box sx={{display:'flex', flexDirection:'column', maxWidth:'550px',margin:'auto'}}>
                <Typography variant='h6'>Login</Typography>
                <form onSubmit={handleLogin} style={{display:'flex', flexDirection:'column', padding:'10px'}}>
                <TextField onBlur={getLoginInfo} sx={{mt:2, py:1}} type='email' label="Email" variant="outlined" name='email' />
                <TextField onBlur={getLoginInfo} sx={{mt:2}} type='password' label="Password" variant="outlined" name='password' />
                <Button sx={{my:2}} type='submit' color='secondary' variant='contained'>Login</Button>
                </form>
                <Typography sx={{mb:2}}>New user? <Link to='/register'>Register</Link> </Typography>
                <Divider sx={{px:1}} >
                    <Chip label="OR" variant="outlined" />
                </Divider>
                <Box style={{display:'flex', flexDirection:'column', maxWidth:'550px',margin:'auto'}}>
                    <Button 
                    onClick={() => googleSignIn(navigate, from)} 
                    sx={{mt:2,px:1}} 
                    color='secondary' 
                    variant='outlined'
                    >
                        <img style={{alignItems:'left'}} src={google} alt="" height='30px' />
                        <Typography sx={{ml:1}}>Sign In With Google</Typography>
                    </Button>
                    <Button sx={{mt:2,px:1}} color='secondary' variant='outlined'>
                        <img src={facebook} alt="" height='30px' />
                        <Typography sx={{ml:1}}>Sign In With Facebook</Typography>
                    </Button>
                </Box>
            </Box>

        </Box>
    );
};

export default Login;