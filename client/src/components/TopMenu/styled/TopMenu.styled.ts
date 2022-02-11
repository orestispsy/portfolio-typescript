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
type topMenuBarTypes = {
  viewCount: number;
};

export const TopMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: fadeIn 3s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0%;
      visibility: hidden;
    }

    50% {
      visibility: visible;
    }

    100% {
      opacity: 100%;
    }
  }
`;

export const TopMenuBar = styled.div<topMenuBarTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.viewCount >= 1 && `90vw`) || ``};

  border-bottom: 2px solid white;
  animation: ${(props) => props.viewCount == 1 && `topBarLine 1s`};

  ${mediaQueries("100", "480", "portrait")`
          width: 80vw ;
            animation: topBarLinePortrait 3s;
`}

  @keyframes topBarLine {
    0% {
      width: 40vw;
    }

    100% {
      width: 100vw;
    }
  }

  @keyframes topBarLinePortrait {
    0% {
      width: 65vw;
    }

    100% {
      width: 80vw;
    }
  }
`;

export const TopMenuLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 1vmax;
  width: 25vw;

  ${mediaQueries("100", "480", "portrait")`
         margin: 2vmax ;
    width: 49vw ;
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

  @keyframes fadeIn {
    0% {
      opacity: 0%;
    }

    100% {
      opacity: 100%;
    }
  }
`;
