import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GridWrapper } from './Grid.style';
import GridItem from './GridItem';
import GridFilterPanel from './GridFilterPanel';

const Grid = ({ data, isLoading }) => {
  const [parameter, setParameter] = useState('');
  const [direction, setDirection] = useState('');
  
  const transformedData = () => {
    const sortedData = parameter === 'name'
      ? data.sort((a, b) => a[parameter].localeCompare(b[parameter]))
      : data.sort((a, b) => a[parameter] - b[parameter]);
    return parameter && direction === 'desc' ? sortedData.reverse() : sortedData
  }

    return isLoading
        ? 'Loading'
        : (
          <>
            <GridFilterPanel setParameter={setParameter} setDirection={setDirection} />
            <GridWrapper>
              {transformedData().map(item => <GridItem {...item} key={item.id}/>)}
            </GridWrapper>
          </>
        )
};

Grid.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
}

export default Grid; 
