import styled from "styled-components";

import { mediaQueries } from "../../../common/mediaQueries";

type SpanTypes = {
  anime?: boolean;
  col?: string;
};

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(249, 255, 169);
  font-size: 1.5vmax;
  width: 60vw;
  height: fit-content;
  text-align: center;
  font-family: "Darker Grotesque", sans-serif;
  letter-spacing: 1px;
  background-color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div:nth-child(1) {
    font-size: 3vmax;
    width: fit-content;
    align-self: center;
    margin: 1vmax;
    color: rgb(255, 255, 255);
  }

  div:nth-last-child() {
    padding-bottom: 3vmax;
  }

  ${mediaQueries("100", "480", "portrait")`
    width: 80vw !important;
    margin-bottom: 1vmax !important;
     div:nth-child(1) {
    font-size: 3.5vmax;
  }
`}

  ${mediaQueries("273", "1024", "landscape")`
      
    width: 84vw !important;
   div:nth-child(1) {
    font-size: 4vmax !important;
  }
`}
`;

export const BioText = styled.div`
  width: 55vw;
  text-indent: 30px;
  padding-bottom: 1vmax;
  text-align: justify;

  ${mediaQueries("100", "480", "portrait")`
  width: 65vw;
    text-indent: 10px;
    font-size: 3vmax;
    margin: 1vmax;
`}

  ${mediaQueries("273", "1024", "landscape")`
  font-size: 3vmax !important;
    width: 75vw !important;
  
`}
`;

export const Dots = styled.span`
  margin: 0 0.5vmax 0 0;
  cursor: pointer;
  margin-left: 0;
  color: white;

  &:hover {
    color: rgb(255, 255, 255);
  }
`;

export const More = styled.span<SpanTypes>`
  color: orange;
  margin: 0 0.5vmax 0 0.5vmax;
  cursor: pointer;
  font-size: 1.5vmax;
  animation: ${(props) => props.anime && `fader 1s infinite`};
  color: ${(props) => props.col && props.col};

  @keyframes fader {
    50% {
      opacity: 0%;
    }
  }

  &:hover {
    color: rgb(255, 255, 255);
  }

  ${mediaQueries("100", "480", "portrait")`
      font-size: 3vmax !important;
        margin: 0 1vmax;
`}

  ${mediaQueries("273", "1024", "landscape")`
     font-size: 3vmax !important;
  margin: 0 1vmax;
`}
`;
