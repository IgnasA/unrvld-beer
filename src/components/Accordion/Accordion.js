import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Accordion.style';
import AccordionItem from './AccordionItem';

const Accordion = ({ data, isLoading }) => {
    return isLoading
        ? 'Loading'
        : (
          <Wrapper>
            {data.map(item => <AccordionItem {...item} key={item.id} />)}
          </Wrapper>
        )
};

Accordion.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
}

export default Accordion; 
