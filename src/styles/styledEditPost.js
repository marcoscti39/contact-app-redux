import styled from "styled-components";
import { StyledForm } from "./styledAddPost";

export const StyledFormEdit = styled(StyledForm)`
  .buttons-wrapper {
    display: flex;
    justify-content: space-between;

    .update-btn {
      flex: 0;
      flex-basis: auto;
      background-color: ${(props) => props.theme.blue};
    }

    .cancel-btn {
      flex: 0;
      flex-basis: auto;
      background-color: ${(props) => props.theme.red};
    }
  }
`;
