import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaQueries } from "../../../common/mediaQueries";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Latest = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Poller One", cursive;
  font-size: 2vmax;
  text-align: center;
  color: yellow;
  width: 60vw;

  div {
    background-color: black;
    width: 50vw !important;
    padding: 1vmax 2vmax;
    animation: blinker 6s linear infinite;
  }

  @keyframes blinker {
    50% {
      color: rgb(220, 20, 60);
    }
  }
`;

export const FeaturedBoxBack = styled.div`
  border: 2px solid black;
  box-shadow: -0 0 5px rgba(0, 0, 0, 0.25), 0 -0 5px rgba(0, 0, 0, 0.25),
    0 0 5px rgba(0, 0, 0, 0.25), -0 -0 5px rgba(0, 0, 0, 0.25);
  border-radius: 5vh;
  background-color: white;
  border-radius: 5vh;
  width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;

  ${mediaQueries("100", "480", "portrait")`
      width: 90vw !important;
`}

  ${mediaQueries("273", "1024", "landscape")`
            width: 94vw !important;
`}
`;

export const FeaturedBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  width: 95vw;
  min-height: 19vmax;
  flex-wrap: wrap;
  padding-top: 2vmax;
  scrollbar-width: none;
  border-radius: 5vh;
  background-color: rgba(217, 255, 219, 0.11);

  ${mediaQueries("100", "480", "portrait")`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    height: unset;
    min-height: 42vh !important;
    overflow-y: scroll;
    width: 90vw !important;
`}

  ${mediaQueries("273", "1024", "landscape")`
            height: unset !important;
    width: 94vw !important;
`}
`;

export const ProjectLink = styled(Link)`
  text-decoration: none;

  ${mediaQueries("100", "480", "portrait")`
       flex-direction: column !important;
    height: fit-content !important;
`}
`;

export const ProjectBack = styled.div`
  display: flex;
  justify-content: center;
  width: 22vw;
  padding: 0.5vmax;
  margin: 0 2vmax;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-shadow: -1px 1px 0 white, 1px -1px 0 white, 1px 1px 0 white,
    -1px -1px 0 white;
  font-family: "Bangers", cursive;
  text-decoration: none;
  color: black;
  font-size: 3vmax;
  cursor: pointer;
  height: 20vmax;

  ${mediaQueries("100", "480", "portrait")`
      margin: 2vmax !important;
    width: 35vw !important;
`}
`;

export const ProjectName = styled.div`
  background-color: black;
  border-radius: 2px;
  color: white;
  text-shadow: -1px 1px 0 black, 1px -1px 0 black, 1px 1px 0 black,
    -1px -1px 0 black;
  text-align: center;
  letter-spacing: 1px;
  border: 2px solid black;

  &:hover {
    color: rgb(229, 255, 0);
  }

  ${mediaQueries("100", "480", "portrait")`
    margin-bottom: 0.5vmax !important;
`}

  ${mediaQueries("273", "1024", "landscape")`
  margin-bottom: 0.5vmax !important;
`}
`;

export const ProjectImg = styled.img`
  width: 9vmax;
  height: 9vmax;
  border-radius: 50%;
  border-style: groove;
  border-width: thin;
  padding: 25px;
  border-bottom: transparent;
  box-shadow: 0 0 10px black;
  transition: 2s;
  -webkit-transition: all 0.1s ease;
  margin-top: 0.5vmax;
  background-color: rgba(251, 255, 0, 0.144);
  margin-top: 1vmax;

  &:hover {
    border: transparent;
    padding: 14px;
    width: 13vmax;
    height: 13vmax;
  }

  &:active {
    background-color: rgba(255, 0, 0, 0.418);
  }

  ${mediaQueries("100", "480", "portrait")`
   padding: 2vmax !important;
`}

  ${mediaQueries("273", "1024", "landscape")`
    padding: 2vmax !important;
`}
`;

export const HotSign = styled.img`
  position: sticky;
  width: 4vmax;
  height: 5vmax;
  background-size: cover;
  z-index: 2567234643;
  margin-top: -3vmax;

  ${mediaQueries("100", "480", "portrait")`
  width: 6vmax !important;
    height: 8vmax !important;
`}
`;

export const RemasteredSign = styled.div`
  position: sticky;
  z-index: 2567234643;
  margin-top: -2vmax;
  font-size: 2.5vmax;
  color: red;
  text-shadow: -1px 1px 0 yellow, 1px -1px 0 yellow, 1px 1px 0 yellow,
    -1px -1px 0 yellow;
`;

export const Footer = styled.div`
  font-family: "Darker Grotesque", sans-serif;
  margin: 1vmax 0 2vmax 0;
  font-size: 1vmax;
  font-weight: bolder;
  padding: 0 0.5vmax;

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
`;
