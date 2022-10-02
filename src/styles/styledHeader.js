import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.darkGray};
  width: 100%;
  color: white;
  padding: 1.5rem 0;

  .header-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .header-text {
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    color: white;
  }
`;
