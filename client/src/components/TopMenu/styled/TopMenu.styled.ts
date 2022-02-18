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
  animateTopMenu?: boolean;
  animateBio?: boolean;
  animateFeatures?: boolean;
};

export const TopMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeIn 1.3s ease-in-out;
`;

export const TopMenuBar = styled.div<topMenuBarTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.animateBio && `90vw`) || ``};
  border-bottom: ${(props) =>
    (props.animateFeatures && ` 2px solid white`) || `transparent`};
  animation: ${(props) => props.animateFeatures && `topBarLine 2s ease-in-out`};

  ${mediaQueries("100", "480", "portrait")`
          width: 80vw ;
            animation: topBarLinePortrait 3s;
`}
`;

export const TopMenuLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 1vmax;
  width: 25vw;
  animation: fadeIn 3s ease-in-out;
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
  background-image: url("/email.png");
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
  font-family: "Bangers";
  margin-top: 1vmax;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.226);
  padding: 0 1vmax;
  color: white;
  text-decoration: none;
  animation: fadeIn 3s ease-in-out;
`;
