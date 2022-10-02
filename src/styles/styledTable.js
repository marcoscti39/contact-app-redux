import styled from "styled-components";

export const Table = styled.table`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  margin-top: 3rem;

  thead {
    color: white;
    background-color: ${(props) => props.theme.darkGray};
  }

  th,
  td {
    padding: 1rem 0.4rem;
    text-align: start;
  }

  td {
    border-bottom: 1px solid gray;
  }

  button {
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
  }

  .delete-contact-btn {
    background-color: ${(props) => props.theme.red};
    margin-left: 0.5rem;
  }

  .edit-contact-btn {
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    text-decoration: none;
    background-color: ${(props) => props.theme.blue};
  }
`;
