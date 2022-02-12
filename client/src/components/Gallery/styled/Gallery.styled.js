import styled from "styled-components";
import { mediaQueries } from "../../../common/mediaQueries";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  padding: 0 0 0 2vmax;

  @keyframes resize {
    0% {
      width: 32vw;
      height: 18vw;
      background-color: red;
    }

    100% {
      width: 80vw;
      height: 80vh;
    }
  }

  ${mediaQueries("100", "480", "portrait")`
  padding: 0 !important;
`}
`;

export const GalleryPic = styled.img`
  width: 32vw;
  height: 18vw;
  border-radius: 1vh;
  border: 1px solid rgba(35, 182, 175, 0.678);
  box-shadow: -0 0 5px rgba(0, 0, 0, 0.25), 0 -0 5px rgba(0, 0, 0, 0.25),
    0 0 5px rgba(0, 0, 0, 0.25), -0 -0 5px rgba(0, 0, 0, 0.25);
  margin-top: 2vmax;
  animation: fadeIn 2s;

  ${mediaQueries("100", "480", "portrait")`
 width: 62vw !important;
    height: 36vw !important;
 
`}
`;

export const GalleryPicWide = styled.img`
  width: 80vw;
  height: 80vh;
  border-radius: 1vh;
  border: 1px solid rgba(35, 182, 175, 0.678);
  box-shadow: -0 0 5px rgba(0, 0, 0, 0.25), 0 -0 5px rgba(0, 0, 0, 0.25),
    0 0 5px rgba(0, 0, 0, 0.25), -0 -0 5px rgba(0, 0, 0, 0.25);
  margin-top: 2vmax;
  animation: resize 1s, fadeIn 2s;

  ${mediaQueries("100", "480", "portrait")`
    width: 75vw !important;
    height: 55vw !important;
 
`}

  ${mediaQueries("273", "1024", "landscape")`
    width: 60vw !important;
    height: 36vw !important;
`}
`;

export const GalleryControls = styled.div`
  margin-top: 1vh;
  display: flex;
  width: fit-content;
  height: 1vmax;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: rgb(35, 182, 174);

  ${mediaQueries("100", "480", "portrait")`
    margin-top: 2vmax !important;
 
`}

  ${mediaQueries("273", "1024", "landscape")`
  margin-top: 2vmax !important;
`}
`;

export const GalleryNumbers = styled.div`
  color: grey;
  margin-right: 1vmax;

  ${mediaQueries("100", "480", "portrait")`
  font-size: 1vmax !important;
`}

  ${mediaQueries("273", "1024", "landscape")`
  font-size: 1vmax !important;
`}
`;

export const GalleryArrow = styled.div`
  font-size: 1vmax;
  cursor: pointer;

  &:hover {
    color: black;
  }

  ${mediaQueries("100", "480", "portrait")`
    font-size: 3vmax !important;
`}

  ${mediaQueries("273", "1024", "landscape")`
    font-size: 2.5vmax !important;
`}
`;

export const InputRange = styled.input`
  height: 1vmax;
  width: 20vmax;
  margin: 0 0.5vmax;

  ${mediaQueries("100", "480", "portrait")`
 width: 40vw !important;
`}

  ${mediaQueries("273", "1024", "landscape")`
    width: 22vw !important;
`}
`;

export const GalleryZoom = styled.img`
  width: 1vmax;
  height: 1vmax;
  background-size: cover;
  margin-left: 1vmax;
  cursor: pointer;

  &:hover {
    filter: invert(40%);
  }

  ${mediaQueries("100", "480", "portrait")`
  width: 2vmax !important;
    height: 2vmax !important;
`}

  ${mediaQueries("273", "1024", "landscape")`
   width: 1.5vmax !important;
    height: 1.5vmax !important;
`}
`;

export const GalleryLinksBox = styled.div`
  margin-top: 1vmax;

  ${mediaQueries("100", "480", "portrait")`
  margin: 2vmax 0 1vmax 0 !important;
`}

  ${mediaQueries("273", "1024", "landscape")`

`}
`;

export const GalleryLink = styled.a``;

export const WebLinkImg = styled.img`
  width: 3vmax;
  height: 2vmax;
  filter: invert(50%);

  &:hover {
    filter: invert(0%);
  }
  ${mediaQueries("100", "480", "portrait")`
   width: 4vmax !important;
    height: 3vmax !important;
`}

  ${mediaQueries("273", "1024", "landscape")`
    width: 4vmax !important;
    height: 3vmax !important;
`}
`;

export const GitLinkImg = styled.img`
  padding: 0 2vmax 0 1.5vmax;
  width: 2vmax;
  height: 2vmax;
  background-size: cover;
  filter: invert(50%);

  &:hover {
    filter: invert(100%);
  }
  ${mediaQueries("100", "480", "portrait")`
    width: 3vmax !important;
    height: 3vmax !important;
`}

  ${mediaQueries("273", "1024", "landscape")`
  width: 3vmax !important;
    height: 3vmax !important;
`}
`;
