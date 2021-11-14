import { Container, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

const FAQ = () => {
    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
    return (
        <Container>
            <Typography variant="h5">Got Questions? We’ve Got Answers!</Typography>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Do you have installment facility?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Answer: Installment facility is available from Regal Emporium only.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Return & Refund Policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Requirement for a valid return: <br/>
            <br/>
            Proof of purchase (order number, invoice, etc) <br/>
            Reason for return has to be valid and return acceptance conditions met (check out below) <br/>
            <br/>
            Valid conditions and reasons to return an item: <br/>
            - Delivery of wrong product <br/>
            - Delivery of defective product <br/>
            - Delivery of the products with missing parts <br/>
            - Incorrect content on website <br/>
            <br/>
            Return/ Replacement Guarantee may not apply in any of the following conditions: <br/>
            • Damages due to misuse of product <br/>
            • Incidental damage due to malfunctioning of product <br/>
            • Any consumable item which has been used or installed <br/>
            • Products with tampered or missing serial / UPC numbers <br/>
            • Any damage / defect which are not covered under the manufacturer's warranty <br/>
            <br/>
            N.B: Replacement of the product is subject to availability of the same on Regalfurniturebd.com <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Warranty</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Regal Furniture provides One Year Free Service warranty for any manufacturing fault. <br />
            <br />
            - This warranty covers repair or replacement of the defective part. <br />
            - To get this support customer must need to show the money receipt of purchase. <br />
            - Please contact Hotline: 09613737777 for after sales service. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Delivery</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Online Delivery Policy: <br />
            For online purchase Regal Furniture is committed to deliver its product within 3-7 working days.(For stocked product). Friday and other holiday is not included within this time. If product is not available in stock, it will take 10-15 working days to deliver. <br />
            <br />
            Free home delivery policy applicable over 3000 Tk purchase. <br />
            <br />
            Regal Emporium Delivery Policy:
            Regal Emporium will provide free home delivery for a minimum purchase amount of 20,000 taka. For less than 20,000 taka, Delivery charge is not fixed. It depands on the distance between showroom location to customer address. <br />
            <br />
            Note: We deliver our product from our factory in a 5-ton truck. So our vehicle will only go where a 5-ton truck can reach.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Container>
    );
};

export default FAQ;