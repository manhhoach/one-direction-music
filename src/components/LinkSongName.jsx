import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: ${({ color }) => color || '#000'}; 
  font-family: var(--font-times);
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || '2rem'};
  line-height: 3.5rem;
  letter-spacing: 0.1rem;

  &:hover{
   color: ${({ maincolor }) => maincolor || '#000'};
   border-bottom: 0.15rem solid ${({ maincolor }) => maincolor || '#000'};
  }
`;

export default function LinkSongName({ href, children, fontSize, mainColor, color }) {
   return (
      <StyledLink to={href} fontSize={fontSize} maincolor={mainColor} color={color}>
         {children}
      </StyledLink>
   );
}
