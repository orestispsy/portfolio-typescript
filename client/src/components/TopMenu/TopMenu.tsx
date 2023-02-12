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
    projectView: boolean;
    animateFeatures: boolean;
    animateTopMenu: boolean;
    animateBio: boolean;
}

export const TopMenu: React.FC<Props> = ({
    selectedProject,
    setEmailView,
    emailView,
    projects,
    projectView,
    animateFeatures,
    animateTopMenu,
    animateBio,
}) => {
    return (
        <TopMenuContainer>
            <TopMenuBar
                animateTopMenu={animateTopMenu}
                animateBio={animateBio}
                animateFeatures={animateFeatures}
            >
                <Headline to={"/"}>
                    {!selectedProject && "Orestis Psycharis"}
                    {projectView &&
                        selectedProject &&
                        projects[selectedProject].name}
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
                        <TopMenuLinkImage
                            src="./git.png"
                            invert="50"
                        ></TopMenuLinkImage>
                    </TopMenuLink>
                    <TopMenuLink
                        title="Call Me"
                        href="javascript:void(0);"
                        block
                    >
                        <TopMenuLinkImage
                            src="./phone.png"
                            filter="true"
                            invert="50"
                            block
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
                        to={
                            (!emailView && "/contact") ||
                            (emailView && "/") ||
                            ""
                        }
                        title="Send Quick Message"
                        onClick={(e: any) => setEmailView(!emailView)}
                    ></TopMenuLinkHat>
                </TopMenuLinks>
            )}
        </TopMenuContainer>
    );
};
