import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, ExpandablePart, Arrow, AccordionItemWrapper } from './Accordion.style';

const AccordionItem = ({ name, id, abv, description, tagline }) => {
    const [selected, setSelected] = useState(false);
    const toggle = id => {
      setSelected(selected === id ? null : id);
    }
    
    return (
        <AccordionItemWrapper>
            <Button onClick={() => toggle(id)} selected={selected}>
                <span>{name}</span>
                <Arrow selected={selected} />
            </Button>
            {selected === id && (
              <ExpandablePart>
                <p>{tagline}</p>
                <p>{description}</p>
                <p>ABV: {abv}</p>
              </ExpandablePart>   
                )
            }  
        </AccordionItemWrapper>
    );
};

AccordionItem.propTypes = {
    name: PropTypes.string,
    tagline: PropTypes.string,
    id: PropTypes.number,
    abv: PropTypes.number,
    description: PropTypes.string,
};
  
export default AccordionItem; 
