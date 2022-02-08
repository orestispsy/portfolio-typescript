import React, { useState, useEffect, useRef } from "react";
import useSound from "use-sound";

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

const music = require("./assets/alice.mp3");

interface Props {
  setProject: (e: any) => void;
  selectedProject: any;
  projects: any;
  mute: boolean;
  setMute: (e: any) => void;
  projectView: boolean;
  scrollTo: (e: any, e2?: ScrollBehavior | undefined) => void;
}

export const Main: React.FC<Props> = ({
  setProject,
  selectedProject,
  projects,
  mute,
  setMute,
  projectView,
  scrollTo,
}) => {
  const [play, { stop }] = useSound(music, {
    volume: 0.75,
    onend: (e: any) => {
      setMute(false);
    },
  });

  const [bioView, setBioView] = useState(false);

  const projRef = useRef<HTMLDivElement | null>(null);

  const letMusic = () => {
    if (!mute) {
      setMute(true);
      play();
    } else {
      stop();
      setMute(false);
    }
  };

  useEffect(function () {
    setProject(false);
  }, []);

  useEffect(function () {
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
        letMusic={() => letMusic()}
        stop={() => stop()}
        scrollTo={scrollTo}
      ></Bio>

      <Latest ref={projRef}>
        <div>LATEST PROJECTS</div>
      </Latest>

      <FeaturedBoxBack>
        <FeaturedBox>
          {projects &&
            projects.map((project: any) => (
              <ProjectLink to={`/projects/${project.id}`} key={project.id}>
                {(!selectedProject || selectedProject == project.id) && (
                  <ProjectBack
                    onClick={(e) => {
                      setMute(false);
                      stop();
                      setProject(project.id);
                    }}
                  >
                    <Project>
                      <ProjectName>{project.name}</ProjectName>
                      <ProjectImg src={project.preview}></ProjectImg>
                      {project.hot && selectedProject == 0 && (
                        <HotSign src="./hot.png" className="hot"></HotSign>
                      )}
                      {project.remastered && selectedProject == 0 && (
                        <RemasteredSign>Remastered</RemasteredSign>
                      )}
                    </Project>
                  </ProjectBack>
                )}
              </ProjectLink>
            ))}
        </FeaturedBox>
      </FeaturedBoxBack>

      <TechStack />

      <Footer>
        © 2022{" "}
        <a href="https://zero-psy.com" target="_blank">
          zero-psy.com{" "}
        </a>
      </Footer>
    </MainContainer>
  );
};
