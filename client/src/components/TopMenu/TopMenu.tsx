import React from "react";
import { Link } from "react-router-dom";

import {
  TopMenuContainer,
  TopMenuBar,
  TopMenuLinks,
  Headline,
  TopMenuLinkImage,
  TopMenuLinkHat,
  TopMenuLink,
} from "./styled/TopMenu.styled";

interface Props {
  setEmailView: (e: any) => void;
  selectedProject: number;
  projects: any;
  emailView: boolean;
  ProjectView: boolean;
  viewCount: number;
}

export const TopMenu: React.FC<Props> = ({
  selectedProject,
  setEmailView,
  emailView,
  projects,
  ProjectView,
  viewCount,
}) => {
  return (
    <TopMenuContainer>
      <TopMenuBar viewCount={viewCount}>
        <Headline to={"/"}>
          {!selectedProject && "Orestis Psycharis"}
          {ProjectView && selectedProject && projects[selectedProject].name}
        </Headline>
      </TopMenuBar>
      {!selectedProject && (
        <TopMenuLinks>
          <TopMenuLink
            href="https://www.linkedin.com/in/orestis-psycharis"
            target="_blank"
            title="LinkedIn"
          >
            <TopMenuLinkImage
              src="./in.png"
              filter="true"
              invert="60"
            ></TopMenuLinkImage>
          </TopMenuLink>
          <TopMenuLink
            href="https://github.com/orestispsy/"
            target="_blank"
            title="GitHub Repos"
          >
            <TopMenuLinkImage src="./git.png" invert="50"></TopMenuLinkImage>
          </TopMenuLink>
          <TopMenuLink
            href="tel:+4915224273054"
            target="_blank"
            title="Call Me"
          >
            <TopMenuLinkImage
              src="./phone.png"
              filter="true"
              invert="50"
            ></TopMenuLinkImage>
          </TopMenuLink>
          <TopMenuLink
            href="mailto:opsychar@gmail.com"
            target="_blank"
            title="Send Email"
          >
            <TopMenuLinkImage
              src="./mail.png"
              filter="true"
              invert="20"
            ></TopMenuLinkImage>
          </TopMenuLink>

          <TopMenuLinkHat
            as={Link}
            to={(!emailView && "/contact") || (emailView && "/") || ""}
            title="Send Quick Message"
            onClick={(e: any) => setEmailView(!emailView)}
          ></TopMenuLinkHat>
        </TopMenuLinks>
      )}
    </TopMenuContainer>
  );
};
