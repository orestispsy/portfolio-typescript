import styled from "styled-components";
import { mediaQueries } from "../../../common/mediaQueries";

export const AppContainer = styled.div`
  margin-top: 4vh;
  min-height: 96vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(0, 0, 0);

  ${mediaQueries("100", "480", "portrait")`
          width: 80vw;
`}
`;
