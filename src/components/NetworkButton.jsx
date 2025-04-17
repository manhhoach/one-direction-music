import styled from "styled-components";

const StyledNetworkButton = styled.a`
  color: #000;
  border: 0.25rem solid #000;
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export default function NetworkButton({ href, children, target = '_self' }) {
   return (
      <StyledNetworkButton href={href} target={target}>
         {children}
      </StyledNetworkButton>
   );
}
