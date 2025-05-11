import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: #000;
  font-family: var(--font-times);
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || '2rem'};
  line-height: 3.6rem;
  letter-spacing: 0.1rem;

  &:hover{
   color: ${({ mainColor }) => mainColor || '#000'};
   border-bottom: 0.15rem solid ${({ mainColor }) => mainColor || '#000'};
  }
`;

export default function LinkSongName({ href, children, fontSize, mainColor }) {
   return (
      <StyledLink to={href} fontSize={fontSize} mainColor={mainColor}>
         {children}
      </StyledLink>
   );
}
