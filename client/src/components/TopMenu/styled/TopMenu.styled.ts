import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaQueries } from "../../../common/mediaQueries";

type LinkImageTypes = {
  filter?: string;
  invert?: string;
};

type LinkTypes = {
  href: string;
  target: string;
  title: string;
};

export const AppContainer = styled.div`
  margin-top: 4vh;
  min-height: 96vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(0, 0, 0);
  animation: fadeIn 0.5s;

  ${mediaQueries("100", "480", "portrait")`
          width: 80vw !important;
`}
`;

export const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TopMenuBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  border-bottom: 2px solid white;

  ${mediaQueries("100", "480", "portrait")`
          width: 80vw !important;
`}
`;

export const TopMenuLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 1vmax;
  width: 25vw;

  ${mediaQueries("100", "480", "portrait")`
         margin: 2vmax !important;
    width: 49vw !important;
`}
`;

export const TopMenuLink = styled.a<LinkTypes>``;

export const TopMenuLinkImage = styled.img<LinkImageTypes>`
  width: 3vmax;
  height: 3vmax;
  filter: ${(props) => props.filter && `invert(100%)`};

  &:hover {
    filter: invert(${(props) => props.invert}%);
  }
`;

export const TopMenuLinkHat = styled(Link)`
  width: 4.5vmax;
  height: 2.5vmax;
  background-image: url("./email.png");
  background-size: cover;
  cursor: pointer;
  filter: saturate(60%);
  transform: scale(-1, 1);

  &:hover {
    filter: saturate(100%);
  }
`;

export const Headline = styled(Link)`
  font-size: 4vmax;
  font-family: "Bangers", cursive;
  margin-top: 1vmax;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.226);
  padding: 0 1vmax;
  color: white;
  text-decoration: none;
`;