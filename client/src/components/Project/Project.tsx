import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { Gallery } from "../Gallery/Gallery";

import {
  ProjectContainer,
  CloseTab,
  ProjectSection,
  ProjectInfoBoxBack,
  ProjectInfoBox,
  ProjectText,
  Features,
  FeatureHead,
  FeatureItem,
  ScrollBox,
  ScrollUp,
  ScrollDown,
} from "./styled/Project.styled";

const { projectWindowScroller } = require("./ProjectUtils");

interface Props {
  setProject: (e: any) => void;
  selectedProject: number;
  projects: any;
  setProjectView: any;
  scrollTo: (e: number, e2?: ScrollBehavior | undefined) => void;
  setAnimationChecker: (e: boolean) => void;
  animationChecker: boolean;
}

type params = {
  id: string;
  title: string;
};

export const Project: React.FC<Props> = ({
  setProject,
  selectedProject,
  projects,
  setProjectView,
  scrollTo,
  animationChecker,
  setAnimationChecker,
}) => {
  const [toggleGallery, setToggleGallery] = useState(false);

  const elemRef = useRef<HTMLDivElement | null>(null);

  const galRef = useRef<HTMLDivElement | null>(null);

  let { id, title } = useParams<params>();

  useEffect(function () {
    setProject(id);
    setProjectView(true);
    scrollTo(0, "smooth");
    setAnimationChecker(true);
  }, []);

  return (
    <ProjectContainer>
      {!toggleGallery && (
        <CloseTab
          to={"/"}
          onClick={() => {
            setProjectView(true);
          }}
        >
          X
        </CloseTab>
      )}

      {projects &&
        projects.map((project: any) => (
          <React.Fragment key={project.id}>
            {selectedProject == project.id && (
              <ProjectSection ref={galRef}>
                <Gallery
                  projects={projects}
                  toggleGallery={toggleGallery}
                  setToggleGallery={setToggleGallery}
                  galRef={galRef}
                  scrollTo={scrollTo}
                />
                {!toggleGallery && (
                  <ProjectInfoBoxBack>
                    <ProjectInfoBox>
                      <ProjectText ref={elemRef}>
                        {project.description && (
                          <FeatureHead>Description</FeatureHead>
                        )}
                        {project.description && project.description}
                        <Features>
                          {project.stack && (
                            <FeatureHead marginT={"true"} width={"true"}>
                              Tech
                            </FeatureHead>
                          )}
                          {project.stack &&
                            project.stack.map((item: string, index: number) => (
                              <FeatureItem key={index}>{item}</FeatureItem>
                            ))}
                          {project.features && (
                            <FeatureHead marginT={"true"} width={"true"}>
                              Features
                            </FeatureHead>
                          )}
                          {project.features &&
                            project.features.map(
                              (item: string, index: number) => (
                                <FeatureItem key={index}>{item}</FeatureItem>
                              )
                            )}
                        </Features>
                      </ProjectText>
                    </ProjectInfoBox>
                  </ProjectInfoBoxBack>
                )}
                {!toggleGallery && (
                  <ScrollBox>
                    <ScrollUp
                      title="Top"
                      onMouseDown={(e: any) => {
                        projectWindowScroller(elemRef, 10, 10, 200, -1);
                      }}
                    ></ScrollUp>

                    <ScrollDown
                      title="Scroll Down"
                      onMouseDown={(e: any) => {
                        projectWindowScroller(elemRef, 0, 1, 20, +1);
                      }}
                    ></ScrollDown>
                  </ScrollBox>
                )}
              </ProjectSection>
            )}
          </React.Fragment>
        ))}
    </ProjectContainer>
  );
};
