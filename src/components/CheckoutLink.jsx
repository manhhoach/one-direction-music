import styled from "styled-components";

const StyledLink = styled.a`
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
  text-align: center;
  display: inline-block;
  text-decoration: none;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem 1.5rem;
    letter-spacing: 0.1rem;
    border-width: 0.1rem;
    width: auto;
    min-width: 200px;
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
    letter-spacing: 0.08rem;
    min-width: 180px;
  }

  /* Tablet styles */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.6rem;
    padding: 1.1rem 2rem;
    letter-spacing: 0.12rem;
  }

  /* Large desktop styles */
  @media (min-width: 1200px) {
    font-size: 2.2rem;
    padding: 1.4rem 3rem;
    letter-spacing: 0.18rem;
  }
`;

export default function CheckoutLink({ href, children, target = '_self' }) {
   return (
      <StyledLink href={href} target={target}>
         {children}
      </StyledLink>
   );
}