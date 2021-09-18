import React from 'react';
import PropTypes from 'prop-types';
import { GridWrapper, GridItem } from './Grid.style';

const Grid = ({ data, isLoading }) => {
    return isLoading
        ? 'Loading'
        : (
          <GridWrapper>
            {data.map(item => <GridItem {...item} key={item.id}/>)}
          </GridWrapper>
        )
};

Grid.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
}

export default Grid; 
