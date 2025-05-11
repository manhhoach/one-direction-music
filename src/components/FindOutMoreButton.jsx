import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: white;
  border: 0.25rem solid white;
  text-transform: uppercase;
  font-family: var(--font-source-code-pro);
  font-weight: 600;
  line-height: 1;
  padding: 1.2rem 2.5rem;
  letter-spacing: 0.15rem;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.1s ease;
  font-size: 2rem;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export default function FindOutMoreButton({ href, children }) {
   return (
      <StyledLink to={href}>
         {children}
      </StyledLink>
   );
}
