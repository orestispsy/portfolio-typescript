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
      width: 60vw ;
    flex-wrap: wrap;
    border-radius: 2vmax ;
    border: none ;
    margin-top: -3vh ;
`}

  ${mediaQueries("273", "1024", "landscape")`
 padding: 0.5vmax ;
    border-radius: 20vh ;
    margin-bottom: -3vh ;
`}
`;

export const TechImg = styled.img<TechImgTypes>`
  width: ${(props) => props.width}vmax;
  padding: ${(props) => props.padding || `1vmax`};
  height: ${(props) => props.height || `3vmax`};
`;
