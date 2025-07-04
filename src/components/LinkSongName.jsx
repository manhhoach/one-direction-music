import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: ${({ color }) => color || '#000'}; 
  font-family: var(--font-times);
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || '2rem'};
  line-height: ${({ fontSize }) =>
      fontSize ? 'unset' : '3.5rem'}; /* dùng line-height mặc định nếu không custom */
  letter-spacing: 0.1rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ maincolor }) => maincolor || '#000'};
    border-bottom: 0.15rem solid ${({ maincolor }) => maincolor || '#000'};
  }

  /* Responsive fallback if fontSize not provided */
  ${({ fontSize }) =>
      !fontSize &&
      `
    @media (max-width: 640px) {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    @media (min-width: 641px) and (max-width: 1023px) {
      font-size: 1.6rem;
      line-height: 2.8rem;
    }

    @media (min-width: 1024px) {
      font-size: 2rem;
      line-height: 3.5rem;
    }
  `}
`;

export default function LinkSongName({ href, children, fontSize, mainColor, color }) {
   return (
      <StyledLink
         to={href}
         fontSize={fontSize}
         maincolor={mainColor}
         color={color}
      >
         {children}
      </StyledLink>
   );
}
