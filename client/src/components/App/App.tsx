import React, { useState, useEffect } from "react";
import { Route, HashRouter } from "react-router-dom";
import { Project } from "./../Project/Project";
import { EmailForm } from "./../EmailForm/EmailForm";

import { TopMenu } from "./../TopMenu/TopMenu";
import { Main } from "./../Main/Main";

import { projects } from "./../../common/projects";

import { AppContainer } from "./styled/App.styled";

import { GlobalStyles } from "../../common/GlobalStyles.styled";

const { scrollTo } = require("./AppUtils");

interface Props {}

export const App: React.FC<Props> = ({}) => {
  const [selectedProject, setSelectedProject] = useState<number>(0);

  const [mute, setMute] = useState<boolean>(false);
  const [projectView, setProjectView] = useState<boolean>(false);
  const [emailView, setEmailView] = useState<boolean>(false);
  const [viewCount, setViewCount] = useState<number>(0);

  const [animateTopMenu, setAnimateTopMenu] = useState<boolean>(false);
  const [animateBio, setAnimateBio] = useState<boolean>(false);
  const [animateFeatures, setAnimateFeatures] = useState<boolean>(false);

  useEffect(function () {
    setTimeout((e: boolean) => {
      setAnimateTopMenu(true);
    }, 500);

    setTimeout((e: boolean) => {
      setAnimateBio(true);
    }, 800);
    setTimeout((e: boolean) => {
      setAnimateFeatures(true);
    }, 1000);
  }, []);

  return (
    <HashRouter hashType="noslash">
      <AppContainer>
        <GlobalStyles />
        {animateTopMenu && (
          <TopMenu
            selectedProject={selectedProject}
            projects={projects}
            emailView={emailView}
            setEmailView={(e: any) => setEmailView(e)}
            ProjectView={projectView}
            animateTopMenu={animateTopMenu}
            animateFeatures={animateFeatures}
            animateBio={animateBio}
          />
        )}
        <Route
          exact
          path="/"
          render={(props) => (
            <Main
              setProject={(e: number) => setSelectedProject(e)}
              selectedProject={selectedProject}
              projects={projects}
              setMute={(e: boolean) => setMute(e)}
              mute={mute}
              projectView={projectView}
              scrollTo={scrollTo}
              setAnimateBio={(e: boolean) => setAnimateBio(e)}
              animateBio={animateBio}
              setAnimateFeatures={(e: boolean) => setAnimateFeatures(e)}
              animateFeatures={animateFeatures}
            />
          )}
        />
        <Route
          exact
          path="/contact"
          render={(props) => (
            <EmailForm
              setProjectView={(e: boolean) => setProjectView(e)}
              setProject={(e: any) => setSelectedProject(e)}
              setEmailView={(e: any) => setEmailView(e)}
            />
          )}
        />

        <Route
          path="/projects/:id"
          render={(props) => (
            <Project
              setProject={(e: any) => setSelectedProject(e)}
              selectedProject={selectedProject}
              projects={projects}
              setProjectView={(e: any) => setProjectView(e)}
              scrollTo={scrollTo}
            />
          )}
        />
      </AppContainer>
    </HashRouter>
  );
};
