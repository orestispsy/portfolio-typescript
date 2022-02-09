import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaQueries } from "../../../common/mediaQueries";

type FeaturesHeadProps = {
  marginT?: string;
  width?: string;
};

export const ProjectContainer = styled.div`
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
  margin: 3vmax;

  ${mediaQueries("100", "480", "portrait")`
        width: 90vw ;
`}
`;

export const CloseTab = styled(Link)`
  align-self: flex-end;
  border-radius: 50%;
  cursor: pointer;
  font-family: "Poller One", cursive;
  padding: 0.2vmax 0.4vmax;
  color: black;
  text-decoration: none;
  font-size: 1vmax;
  margin: 1vmax;
  box-shadow: -0 0 5px rgba(0, 0, 0, 0.25), 0 -0 5px rgba(0, 0, 0, 0.25),
    0 0 5px rgba(0, 0, 0, 0.25), -0 -0 5px rgba(0, 0, 0, 0.25);
  border: 1px solid black;

  &:hover {
    color: rgb(243, 89, 89);
    box-shadow: -0 0 10px rgba(0, 0, 0, 0.25), 0 -0 10px rgba(0, 0, 0, 0.25),
      0 0 10px rgba(0, 0, 0, 0.25), -0 -0 10px rgba(0, 0, 0, 0.25);
    border-color: transparent;
  }

  ${mediaQueries("100", "480", "portrait")`
         margin: 2vmax 2vmax 0 0 ;
    font-size: 2vmax ;
    padding: 0.4vmax 0.8vmax ;
`}

  ${mediaQueries("273", "1024", "landscape")`
    margin-right: 2vmax;
    font-size: 2vmax;
    padding: 0.4vmax 0.8vmax;
`}
`;

export const ProjectSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95vw;
  min-height: 19vmax;
  flex-wrap: wrap;
  overflow-y: scroll;
  scrollbar-width: none;
  border-radius: 5vh;
  padding: 0 0 3vmax 0;
  background-color: white;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0%;
    }

    100% {
      opacity: 100%;
    }
  }

  ${mediaQueries("100", "480", "portrait")`
       align-items: center;
    flex-direction: row;
    justify-content: center;
    height: unset;
    min-height: 42vh ;
    overflow-y: scroll;
    width: 90vw ;
        margin-top: 0.5vmax ;
`}

  ${mediaQueries("273", "1024", "landscape")`
   flex-wrap: nowrap;
      height: unset ;
    width: 94vw ;
`}
`;

export const ProjectInfoBoxBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1vmax;
`;

export const ProjectInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 55vw;
  height: 55vh;
  font-size: 2vmax;
  text-align: center;
  border-radius: 5vh;

  ${mediaQueries("100", "480", "portrait")`
      width: 70vw ;
    margin-left: -3vmax ;
    height: unset ;
`}

  ${mediaQueries("273", "1024", "landscape")`
            height: 60vh;
    width: 50vw;
`}
`;

export const ProjectText = styled.div`
  width: 43vw;
  height: 55vh;
  text-align: justify;
  font-family: "Darker Grotesque", sans-serif;
  color: rgb(0, 0, 0);
  overflow-y: scroll;
  margin-bottom: 1vmax;
  scrollbar-width: none;

  ${mediaQueries("100", "480", "portrait")`
      font-size: 2vmax ;
    z-index: 234562345234 ;
    margin-right: -6vmax ;
    width: 55vw ;
    height: unset ;
    display: flex;
    flex-direction: column;
    align-items: center;
`}
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mediaQueries("100", "480", "portrait")`
      display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`}
`;

export const FeatureHead = styled.div<FeaturesHeadProps>`
  margin: 1vmax 0;
  margin-top: ${(props) => props.marginT && `4vmax`};
  font-size: 3vmax;
  font-family: "Poller One", cursive;
  width: ${(props) => (props.width && `20vw`) || `43vw`};
  border-bottom: 1px solid black;
  text-align: center;

  ${mediaQueries("100", "480", "portrait")`
    width: unset ;
`}
`;

export const FeatureItem = styled.div``;

export const ScrollBox = styled.div`
  ${mediaQueries("100", "480", "portrait")`
       align-self: center ;
    visibility: hidden;
`}
`;

export const ScrollUp = styled.div`
  background-image: url("./up.png");
  background-size: cover;
  width: 3vmax;
  height: 3vmax;
  cursor: pointer;

  &:hover {
    filter: invert(50%);
  }
`;

export const ScrollDown = styled.div`
  background-image: url("./down.png");
  background-size: cover;
  width: 3vmax;
  height: 3vmax;
  cursor: pointer;

  &:hover {
    filter: invert(50%);
  }
`;
