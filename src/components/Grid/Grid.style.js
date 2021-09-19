import styled from 'styled-components';

const GridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 30rem;
  flex-wrap: wrap;
`;

const StyledGridItem = styled.div`
  margin: .2rem;
  background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
    ${({ image_url }) => `url(${image_url})`};
  background-size: contain;
  padding: .5rem;
  border: 2px solid black;
  width: 20rem;
  
  @media (max-width: 768px) {
    width: 100%;
    margin: .2rem 2rem;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  
  li:before {
    content: '🥘';
    margin-left: -32px;
    margin-right: 10px;
  } 
`;

const StyledGridFilterPanel = styled.div`
  text-align: center;
  padding: 1rem;
`;

export {
  GridWrapper,
  StyledGridItem,
  StyledList,
  StyledGridFilterPanel
};