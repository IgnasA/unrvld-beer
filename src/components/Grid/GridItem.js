import React from 'react';
import PropTypes from 'prop-types';
import { StyledGridItem, StyledList } from './Grid.style';

const GridItem = ({ name, abv, image_url, ibu, food_pairing }) => {
    return (
        <StyledGridItem image_url={image_url}>
            <p><b>{name}🍺</b> ({abv}‰ IBU {ibu})</p>
            <div>
                <p>Try it with:</p>
                <StyledList>
                 {food_pairing.map((item, i) => (<li key={i}>{item}</li>))}
                </StyledList>
            </div>
        </StyledGridItem>
    );
};

GridItem.propTypes = {
    name: PropTypes.string,
    ibu: PropTypes.number,
    abv: PropTypes.number,
    food_pairing: PropTypes.array,
    image_url: PropTypes.string,
};
  
export default GridItem; 
