import styled from "styled-components";

const StyledNetworkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({ color }) => color || '#000'};
  border: 0.25rem solid ${({ color }) => color || '#000'};
  padding: 0.4rem 1.8rem;
  cursor: pointer;
  border-radius: 0.3rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ color }) => color || '#000'};
    color: #fff;
  }

  /* Responsive padding */
  @media (max-width: 640px) {
    padding: 0.3rem 1.2rem;
  }
`;

export default function NetworkButton({ href, children, target = '_self', color }) {
   return (
      <StyledNetworkButton href={href} target={target} color={color}>
         {children}
      </StyledNetworkButton>
   );
}
