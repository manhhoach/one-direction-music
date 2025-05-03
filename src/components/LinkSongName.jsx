import styled from "styled-components";

const StyledLink = styled.a`
  color: #000;
  font-family: var(--font-times);
  cursor: pointer;
  font-size: 2rem;
  line-height: 3.6rem;
  letter-spacing: 0.1rem;

  &:hover{
   border-bottom: 0.15rem solid #000;
   color: #000;
  }
`;

export default function LinkSongName({ href, children, target = '_self' }) {
   return (
      <StyledLink href={href} target={target}>
         {children}
      </StyledLink>
   );
}
