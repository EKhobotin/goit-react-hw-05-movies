import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Heading2 = styled.h2`
  padding-top: 25px;
  display: flex;
  justify-content: flex-start;
  text-transform: uppercase;
  font-size: 35px;
`;
export const StyledList = styled.ol`
  line-height: 2;
  display: grid;
  padding: 0;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;

  & li {
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 5px;
    background-color: #40bf80;
    padding: 5px;
  }
`;
export const StyledLink = styled(Link)`
  width: 100%;
`;
