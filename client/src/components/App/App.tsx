import React, { useState, useEffect } from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import { Project } from "./../Project/Project";
import { EmailForm } from "./../EmailForm/EmailForm";
import { AppLayout } from "./../AppLayout/AppLayout";

import { Main } from "./../Main/Main";

import { projects } from "./../../common/projects";

import useSound from "use-sound";
const { letMusic } = require("./AppUtils");
const music = require("./../../../public/inventions.mp3");

const { scrollTo } = require("./AppUtils");

interface Props {}

export const App: React.FC<Props> = ({}) => {
  const [selectedProject, setSelectedProject] = useState<number>(0);

  const [mute, setMute] = useState<boolean>(true);
  const [projectView, setProjectView] = useState<boolean>(false);
  const [emailView, setEmailView] = useState<boolean>(false);
  const [animationChecker, setAnimationChecker] = useState<boolean>(false);
  const [animateTopMenu, setAnimateTopMenu] = useState<boolean>(false);
  const [animateBio, setAnimateBio] = useState<boolean>(false);
  const [animateFeatures, setAnimateFeatures] = useState<boolean>(false);

  const [play, { stop }] = useSound(music, {
    volume: 0.75,
    onend: (e: any) => {
      setMute(true);
    },
  });

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
    <Router>
      <Routes>
        <Route
          element={
            <AppLayout
              selectedProject={selectedProject}
              projects={projects}
              emailView={emailView}
              setEmailView={(e: any) => setEmailView(e)}
              projectView={projectView}
              animateTopMenu={animateTopMenu}
              animateFeatures={animateFeatures}
              animateBio={animateBio}
            />
          }
        >
          <Route
            path="/contact"
            element={
              <EmailForm
                setProjectView={(e: boolean) => setProjectView(e)}
                setProject={(e: any) => setSelectedProject(e)}
                setEmailView={(e: any) => setEmailView(e)}
              />
            }
          ></Route>

          <Route
            path="/projects/:id/:title"
            element={
              <Project
                setProject={(e: any) => setSelectedProject(e)}
                selectedProject={selectedProject}
                projects={projects}
                setProjectView={(e: any) => setProjectView(e)}
                scrollTo={scrollTo}
                setAnimationChecker={(e: boolean) => setAnimationChecker(e)}
                animationChecker={animationChecker}
              />
            }
          ></Route>
          <Route
            path="/"
            element={
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
                animationChecker={animationChecker}
                setAnimationChecker={(e: boolean) => setAnimationChecker(e)}
                play={play}
                letMusic={letMusic}
                stop={() => stop()}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
};
