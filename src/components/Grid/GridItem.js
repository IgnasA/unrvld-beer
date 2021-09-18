import React from 'react';
import PropTypes from 'prop-types';

const GridItem = ({ abv, description }) => {
    return (
        <div>
                <p>{description}</p>
                <p>ABV: {abv}</p>
        </div>
    );
};

GridItem.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    abv: PropTypes.number,
    description: PropTypes.string,
};
  
export default GridItem; 
