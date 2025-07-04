import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: white;
  border: 0.25rem solid white;
  text-transform: uppercase;
  font-family: var(--font-source-code-pro);
  font-weight: 600;
  line-height: 1;
  padding: 1rem 2rem;
  letter-spacing: 0.15rem;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.1s ease;
  font-size: 1rem;

  &:hover {
    background-color: white;
    color: black;
  }

@media (min-width: 640px) {
  font-size: 1.25rem;
  padding: 0.9rem 1.8rem;
}

/* Medium screens (>= 768px) */
@media (min-width: 768px) {
  font-size: 1.4rem;
  padding: 1rem 2rem;
}

/* Large screens (>= 1024px) */
@media (min-width: 1024px) {
  font-size: 1.6rem;
  padding: 1.1rem 2.2rem;
}
`;

export default function FindOutMoreButton({ href, children, onMouseEnter, onMouseLeave }) {
   return (
      <StyledLink to={href} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
         {children}
      </StyledLink>
   );
}
