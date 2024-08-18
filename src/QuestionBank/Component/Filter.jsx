import React from 'react'
import FilterElement from '../Component/FilterElement';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Filter (props) {
  return (
    <div>
        <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    {props.name}
                </AccordionSummary>
                <AccordionDetails>
                   {props.category.map(x => <FilterElement dept={x}/>)}
                </AccordionDetails>
            </Accordion>
    </div>
  )
}
