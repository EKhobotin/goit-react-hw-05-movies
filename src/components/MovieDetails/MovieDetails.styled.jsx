import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;
export const MovieDetailsInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const MovieImage = styled.img`
  padding: 10px;
`;
export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
`;
export const TitleMovie = styled.h2`
  margin-bottom: 40px;
  margin-top: 40px;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
`;
export const Heading4 = styled.h4`
  margin-bottom: 40px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
`;
export const Text = styled.h4`
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: 400;
`;
export const WrapperLinks = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 auto;
`;
export const NavStyledLink = styled(NavLink)`
  padding: 5px;
  border: 1px solid #000000;
  border-radius: 5 px;
`;
