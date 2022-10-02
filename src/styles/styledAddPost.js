import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 750px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  padding: 2.5rem;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);
  gap: 1rem;
  margin-top: 2rem;
  button {
    flex: 1;
    background-color: ${(props) => props.theme.darkGray};
    color: white;
    border: none;
    padding: 0.8rem 0;
    border-radius: 5px;
    font-size: 1.2rem;

    cursor: pointer;
  }
  input {
    padding: 0.7rem 0;
    font-size: 1.2rem;
    border-radius: 5px;
    text-indent: 10px;
    border: 1px solid gray;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-weight: 400;
  margin-top: 1rem;
`;
