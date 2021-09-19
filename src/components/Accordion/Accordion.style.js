import styled from 'styled-components';
import { VscArrowDown } from 'react-icons/vsc';

const AccordionItemWrapper = styled.div`
`;

const Button = styled.button`
  width: 100%;
  border: 2px solid black;
  border-top-left-radius: ${({ selected }) => selected ? '1em' : 0};
  border-top-right-radius: ${({ selected }) => selected ? '1em' : 0};
  transition: border-radius 1s;
  padding: .4rem;
  margin: .2rem;

  &:hover {
    background-color: rgb(200, 200, 200);
  }
  &:focus {
    font-weight: bold;
    background: white;
  }
`;

const CollapseButton = styled(Button)`
  width: 5rem;
`;

const Arrow = styled(VscArrowDown)`
  transform: ${({ selected }) => selected ? 'rotate(180deg)' : 'rotate(0deg)'};
  float: right;
  transition: transform .3s;
`;

const Wrapper = styled.div`
  max-width: 20rem;
  min-width: 10rem;
  text-align: center;
`;

const ExpandablePart = styled.div`
  animation: growDown 0.5s ease-in-out forwards;
  transform-origin: top center;
  
  @keyframes growDown {
  0% {
    transform: scaleY(0)
  }
  80% {
    transform: scaleY(1.1)
  }
  100% {
    transform: scaleY(1)
  }
}
`;

export {
    AccordionItemWrapper,
    Button,
    CollapseButton,
    Wrapper,
    ExpandablePart,
    Arrow
};