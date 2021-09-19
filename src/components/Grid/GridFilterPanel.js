import React from 'react';
import PropTypes from 'prop-types';
import { StyledGridFilterPanel } from './Grid.style';

const GridFilterPanel = ({ setParameter, setDirection }) => {

  return (
    <StyledGridFilterPanel>
      <select name="parameter" onChange={e => setParameter(e.target.value)}>
        <option value="">Sort by</option>
        <option value="name">Name</option>
        <option value="abv">ABV</option>
        <option value="ibu">IBU</option>
      </select>
      <select name="direction" onChange={e => setDirection(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </StyledGridFilterPanel>
  );
};

GridFilterPanel.propTypes = {
  setParameter: PropTypes.func,
  setDirection: PropTypes.func
};

export default GridFilterPanel;
