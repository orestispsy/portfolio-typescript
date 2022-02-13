import React, { useState, useEffect, useRef } from "react";

import { Bio } from "./../Bio/Bio";
import { TechStack } from "../TechStack/TechStack";

import {
  MainContainer,
  Latest,
  FeaturedBoxBack,
  FeaturedBox,
  ProjectLink,
  ProjectBack,
  Project,
  ProjectName,
  ProjectImg,
  HotSign,
  RemasteredSign,
  Footer,

} from "./styled/Main.styled";



interface Props {
    setProject: (e: any) => void;
    selectedProject: number | boolean;
    projects: any;
    mute: boolean;
    setMute: (e: any) => void;
    projectView: boolean;
    scrollTo: (e: any, e2?: ScrollBehavior | undefined) => void;
    animateBio: boolean;
    setAnimateBio: (e: boolean) => void;
    animateFeatures: boolean;
    setAnimateFeatures: (e: boolean) => void;
    animationChecker: boolean;
    setAnimationChecker: (e: boolean) => void;
    letMusic:()=>void
        play:()=>void
        stop:()=>void
}

export const Main: React.FC<Props> = ({
    setProject,
    selectedProject,
    projects,
    mute,
    setMute,
    projectView,
    scrollTo,
    animateBio,
    setAnimateBio,
    animateFeatures,
    animationChecker,
    setAnimationChecker,
    play,
    letMusic,
    stop
}) => {
    const [bioView, setBioView] = useState<boolean>(false);

    const projRef = useRef<HTMLDivElement | null>(null);

    useEffect(function () {
        setProject(false);
        if (projectView) {
            const timer: NodeJS.Timeout = setTimeout(() => {
                if (projRef.current) {
                    clearTimeout(timer);
                    scrollTo(projRef.current.offsetTop, "smooth");
                }
            }, 0);
        }
    }, []);

    return (
        <MainContainer>
            <Bio
                setBioView={(e: boolean) => setBioView(e)}
                bioView={bioView}
                mute={mute}
                setMute={(e: boolean) => setMute(e)}
                letMusic={letMusic}
                stop={()=>stop()}
                scrollTo={scrollTo}
                play={play}
                setAnimateBio={(e: boolean) => setAnimateBio(e)}
                animateBio={animateBio}
                animationChecker={animationChecker}
                setAnimationChecker={(e: boolean) => setAnimationChecker(e)}
            ></Bio>
            {animateFeatures && (
                <Latest
                    animationChecker={animationChecker}
                    animateBio={animateBio}
                    ref={projRef}
                >
                    <div>LATEST PROJECTS</div>
                </Latest>
            )}

            {animateFeatures && (
                <FeaturedBoxBack
                    animationChecker={animationChecker}
                    animateFeatures={animateFeatures}
                >
                    <FeaturedBox>
                        {projects.map((project: any) => (
                            <ProjectLink
                                to={`/projects/${project.id}`}
                                key={project.id}
                            >
                                {(!selectedProject ||
                                    selectedProject == project.id) && (
                                    <ProjectBack
                                        onClick={(e) => {
                                            setMute(true);
                                            stop();
                                            setProject(project.id);
                                        }}
                                    >
                                        <Project>
                                            <ProjectName>
                                                {project.name}
                                            </ProjectName>
                                            <ProjectImg
                                                src={project.preview}
                                            ></ProjectImg>
                                            {project.hot &&
                                                selectedProject == 0 && (
                                                    <HotSign
                                                        src="./hot.png"
                                                        className="hot"
                                                    ></HotSign>
                                                )}
                                            {project.remastered &&
                                                selectedProject == 0 && (
                                                    <RemasteredSign>
                                                        Remastered
                                                    </RemasteredSign>
                                                )}
                                        </Project>
                                    </ProjectBack>
                                )}
                            </ProjectLink>
                        ))}
                    </FeaturedBox>
                </FeaturedBoxBack>
            )}
            {animateFeatures && <TechStack />}
            {animateFeatures && (
                <Footer>
                    © 2022{" "}
                    <a href="https://zero-psy.com" target="_blank">
                        zero-psy.com{" "}
                    </a>
                </Footer>
            )}
        </MainContainer>
    );
};
