import styled from "styled-components";
import { mediaQueries } from "../../../common/mediaQueries";

type TechImgTypes = {
  height?: string;
  width?: string;
  padding?: string;
};

export const TechStackBox = styled.div`
  background-color: white;
  width: 72vmax;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -4vh;
  border-radius: 10vh;
  border: 10px solid black;

  ${mediaQueries("100", "480", "portrait")`
      width: 60vw !important;
    flex-wrap: wrap;
    border-radius: 2vmax !important;
    border: none !important;
    margin-top: -3vh !important;
`}

  ${mediaQueries("273", "1024", "landscape")`
 padding: 0.5vmax !important;
    border-radius: 20vh !important;
    margin-bottom: -3vh !important;
`}
`;

export const TechImg = styled.img<TechImgTypes>`
  width: ${(props) => props.width}vmax;
  padding: ${(props) => props.padding || `1vmax`};
  height: ${(props) => props.height || `3vmax`};
`;
