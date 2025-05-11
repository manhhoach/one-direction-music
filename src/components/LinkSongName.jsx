import styled from "styled-components";

const StyledLink = styled.a`
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

export default function LinkSongName({ href, children, fontSize, mainColor, target = '_self' }) {
   return (
      <StyledLink href={href} target={target} fontSize={fontSize} mainColor={mainColor}>
         {children}
      </StyledLink>
   );
}
