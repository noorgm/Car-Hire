import React, { useState } from 'react';
import './faq.css';

import { styled } from '@mui/material/styles';
import sideCar from '../../Assets/images/side-car1.png';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme}) => ({
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
    {...props}/> 
  ))(({ theme }) => ({ 
  flexDirection: 'row',
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



const Faq = () => {

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };


  return (
    <section className="faq-bg">
        <div className="faq-container">
        <div className="faq-top">
            <h3>FAQ</h3>
            <h2>Frequently Asked Questions</h2>
            <p>Questions that asked by most of the customers and we have answerd below so it can help you with booking process faster.</p>
        </div>
        <div className="faq-bottom">
        <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ "& .MuiAccordionSummary-expandIconWrapper": {color: 'var(--secondary-text)'}, backgroundColor: expanded === 'panel1' ? 'var(--primary-text)' : '#fff', color: expanded === 'panel1' ? 'var(--bg-white)' : 'var(--secondary-text)' , fontSize: '1.1rem', letterSpacing: '1px' }} >
          <h4>What's included in the package when hiring a car?</h4>
        </AccordionSummary>
        <AccordionDetails sx={{ ml: 5 }}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aperiam consequatur explicabo ad molestias veritatis a magni natus perspiciatis perferendis, enim placeat autem animi iure eum error delectus unde ducimus! Cum blanditiis accusamus magnam eos ipsam, sed et, quos magni, voluptatum sapiente minus natus minima amet nulla voluptatibus earum libero animi.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" sx={{ "& .MuiAccordionSummary-expandIconWrapper": {color: 'var(--secondary-text)'}, backgroundColor: expanded === 'panel2' ? 'var(--primary-text)' : '#fff', color: expanded === 'panel2' ? 'var(--bg-white)' : 'var(--secondary-text)' , fontSize: '1.1rem', letterSpacing: '1px' }} >
          <h4>Will it be cheaper if I become a premium member?</h4>
        </AccordionSummary>
        <AccordionDetails sx={{ ml: 5 }}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique aut porro provident molestias exercitationem reiciendis odio delectus sed atque cupiditate, sit adipisci quam voluptate quae aliquid accusamus soluta fuga consequatur nisi assumenda. Assumenda, voluptates! Est, porro? Beatae itaque deleniti minus, ipsam odit rem sed sunt?</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" sx={{ "& .MuiAccordionSummary-expandIconWrapper": {color: 'var(--secondary-text)'}, backgroundColor: expanded === 'panel3' ? 'var(--primary-text)' : '#fff', color: expanded === 'panel3' ? 'var(--bg-white)' : 'var(--secondary-text)' , fontSize: '1.1rem', letterSpacing: '1px' }} >
          <h4>Can I pick up from Leeds Branch and drop it at York Branch?</h4>
        </AccordionSummary>
        <AccordionDetails sx={{ ml: 5 }}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique aut porro provident molestias exercitationem reiciendis odio delectus sed atque cupiditate, sit adipisci quam voluptate quae aliquid accusamus soluta fuga consequatur nisi assumenda. Assumenda, voluptates! Est, porro? Beatae itaque deleniti minus, ipsam odit rem sed sunt?</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" sx={{ "& .MuiAccordionSummary-expandIconWrapper": {color: 'var(--secondary-text)'}, backgroundColor: expanded === 'panel4' ? 'var(--primary-text)' : '#fff', color: expanded === 'panel4' ? 'var(--bg-white)' : 'var(--secondary-text)' , fontSize: '1.1rem', letterSpacing: '1px' }} >
          <h4>I want the car to be delivered to me, will that cost me extra?</h4>
        </AccordionSummary>
        <AccordionDetails sx={{ ml: 5 }}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique aut porro provident molestias exercitationem reiciendis odio delectus sed atque cupiditate, sit adipisci quam voluptate quae aliquid accusamus soluta fuga consequatur nisi assumenda. Assumenda, voluptates! Est, porro? Beatae itaque deleniti minus, ipsam odit rem sed sunt?</p>
        </AccordionDetails>
      </Accordion>
        </div>
        </div>
        <img className='side-car' src={sideCar} alt="side Car" />
    </section>
  )
}

export default Faq