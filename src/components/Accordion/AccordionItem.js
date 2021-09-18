import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, ExpandedPart, Arrow } from './Accordion.style';

const AccordionItem = ({ name, id, abv, description }) => {
    const [selected, setSelected] = useState(false);
    const toggle = id => setSelected(selected === id ? null : id);
    
    return (
        <div>
            <Button onClick={() => toggle(id)}>
                <span>{name}</span>
                <Arrow selected={selected}/>
            </Button>
            {selected === id && (
              <ExpandedPart selected={selected}>
                <p>{description}</p>
                <p>ABV: {abv}</p>
              </ExpandedPart>   
                )
            }  
        </div>
    );
};

AccordionItem.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    abv: PropTypes.number,
    description: PropTypes.string,
};
  
export default AccordionItem; 
