import styled from 'styled-components';
import { VscArrowDown } from 'react-icons/vsc';

const Button = styled.button`
  width: 100%;
  border-radius: 3px;
  border: 2px solid black;
`;

const Arrow = styled(VscArrowDown)`
  transform: ${({ selected }) => selected ? 'rotate(180deg)' : 'rotate(0deg)'};
  float: right;
`;

const Wrapper = styled.div`
  width: 20rem;
`;

const ExpandedPart = styled.div``;

export {
    Button,
    Wrapper,
    ExpandedPart,
    Arrow
};