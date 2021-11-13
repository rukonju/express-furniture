import { Box, TextField, Typography, Button, Alert, TextareaAutosize, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import React, { useState } from 'react';

const AddProduct = () => {
    const[productInfo, setProductInfo] = useState({});
    const [productAdded, setProductAdded] = useState(false);
    const [metarial, setMetarial] = React.useState('');

    const handleChange = (event) => {
        setMetarial(event.target.value);
        console.log(metarial)
    };

    const getProductInfo = e =>{
        const feild = e.target.name;
        const value = e.target.value;
        productInfo[feild]=value;
        const newProductInfo = {...productInfo}
        setProductInfo(newProductInfo);
        console.log(productInfo)
    };

    const postProduct = e =>{
        fetch('https://damp-meadow-99405.herokuapp.com/products',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                setProductAdded(true)
            }
        })
        e.preventDefault();
    };

    return (
        <Box sx={{display:'flex', flexDirection:'column', maxWidth:'550px',margin:'auto'}}>
            <Typography variant='h6'>Add a Product</Typography>
            <form onSubmit={postProduct} style={{display:'flex', flexDirection:'column', padding:'10px'}}>
                <TextField 
                onBlur={getProductInfo} 
                sx={{mt:2}}
                size="small" 
                type='text' 
                label="Name" 
                variant="outlined" 
                name='name' />
                
                <TextField 
                onBlur={getProductInfo} 
                sx={{my:2 }}
                size="small" 
                type='text' 
                label="Color" 
                variant="outlined" 
                name='Color' />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Metarial</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    size="small"
                    sx={{textAlign:'left'}}
                    value={metarial}
                    name='metarial'
                    label="Matarial"
                    onBlur={getProductInfo}
                    onChange={handleChange}
                    >
                    <MenuItem value={'Wood'}>Wood</MenuItem>
                    <MenuItem value={'Plastic'}>Plastic</MenuItem>
                    <MenuItem value={'Laminated board'}>Laminated board</MenuItem>
                    </Select>
                </FormControl>
                <TextField 
                onBlur={getProductInfo}
                sx={{mt:2 }}
                size="small" 
                type='number' 
                label="Price" 
                variant="outlined" 
                name='price' />
                <TextField 
                onBlur={getProductInfo} 
                sx={{mt:2 }}
                size="small" 
                type='text' 
                label="Photo Url" 
                variant="outlined" 
                name='photoUrl' />
                <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Description"
                onBlur={getProductInfo} 
                style={{marginTop:'16px', fontSize:'20px' }}
                name='description'
                />
                <Button 
                sx={{my:2}}  
                type='submit' 
                color='secondary' 
                variant='contained'
                >
                    Submit
                </Button>
            </form>
            {productAdded && <Alert severity="success">This is a success alert — check it out!</Alert>}
        </Box>
    );
};

export default AddProduct;