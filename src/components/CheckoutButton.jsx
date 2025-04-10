import styled from "styled-components";

const StyledButton = styled.button`
  color: #000;
  border: 0.15rem solid #000;
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
    background-color: #000;
    color: #fff;
  }
`;

export default function CheckoutButton({ onClick, children }) {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}
