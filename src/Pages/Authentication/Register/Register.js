import React, { useState } from 'react';
import { Box,Button, Chip, Divider, TextField, Typography } from '@mui/material';
import google from '../../../images/google.png';
import facebook from '../../../images/facebook.png';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const history = useHistory();
    const {createUser} = useAuth()
    const [registerInfo, setRegisterInfo] = useState({})
    const [error, setError] = useState(false)

    const getRegisterInfo = e =>{
        const field = e.target.name;
        const value = e.target.value;
        registerInfo[field]=value;
        const newRegisterInfo = {...registerInfo};
        setRegisterInfo(newRegisterInfo);
        setError(false)
    }
    
    const handleRegister = e =>{
        if(registerInfo.password === registerInfo.password2){
            createUser(registerInfo?.email, registerInfo?.password, registerInfo?.name, history);
            setError(false)
        }
        else{
            setError(true)
        }
        e.preventDefault();
    }

    const style ={display:'flex', flexDirection:'column', maxWidth:'550px',margin:'auto', padding:'10px'}

    return (
        <Box sx={{ mt:8}}>
            <Box sx={style}>
                <Typography variant='h6'>Register</Typography>
                <form 
                onSubmit={handleRegister} 
                style={{display:'flex', flexDirection:'column' }}
                >
                <TextField 
                required
                onBlur={getRegisterInfo} 
                sx={{mt:2}} 
                type='text' 
                name="name" 
                label="Name" 
                variant="outlined" 
                />
                <TextField 
                required
                onBlur={getRegisterInfo} 
                sx={{mt:2}} 
                type='email' 
                name='email' 
                label="Email" 
                variant="outlined" 
                />
                <TextField 
                required
                onBlur={getRegisterInfo} 
                sx={{mt:2}} 
                type='password' 
                name='password' 
                label="Password" 
                variant="outlined" 
                />
                <TextField 
                error={error ? true:false}
                helperText={`${error?'Password did not match' :''}`}
                required
                onBlur={getRegisterInfo} 
                sx={{mt:2}} 
                type='password' 
                name='password2' 
                label="Confirm Password" 
                variant="outlined" 
                />
                <Button 
                type='submit'
                sx={{my:2}} 
                color='secondary' 
                variant='contained'
                >
                    Register
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
                    <Button sx={{mt:2}} color='secondary' variant='outlined'>
                        <img 
                        style={{alignItems:'left'}} 
                        src={google} alt="" 
                        height='30px' />
                        <Typography sx={{ml:1}}>Sign Up With Google</Typography>
                    </Button>
                    <Button sx={{mt:2}} color='secondary' variant='outlined'>
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