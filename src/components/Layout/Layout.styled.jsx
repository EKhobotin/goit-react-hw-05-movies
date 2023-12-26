import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  display: flex;
  padding: 10px 0;
`;
export const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 50px;
  margin-left: 100px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 32px;
  color: #000000;
  
  &:hover,
  &:focus {
    color: #6600ff;
  }
`;
