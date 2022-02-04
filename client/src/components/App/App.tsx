import React, { useState } from "react";
import { Route, Link, HashRouter } from "react-router-dom";
import { Project } from "./../Project/Project";
import { EmailForm } from "./../EmailForm/EmailForm";

import { Main } from "./../Main/Main";

import projects from "../../common/projects";

import "./App.css";

const { scrollTo } = require("./AppUtils");

interface Props {}

export const App: React.FC<Props> = ({}) => {
  const [selectedProject, setSelectedProject] = useState(0);

  const [mute, setMute] = useState(false);
  const [projectView, setProjectView] = useState(false);

  return (
    <HashRouter hashType="noslash">
      <div className="appContainer">
        <div className="appBox">
          <div className="introMenu">
            <Link to={"/"} className="introText">
              {!selectedProject && "Orestis Psycharis"}
              {selectedProject && projects.projects[selectedProject].name}
            </Link>
          </div>
          {!selectedProject && (
            <div className="extLinks">
              <a
                href="https://www.linkedin.com/in/orestis-psycharis"
                target="_blank"
                title="LinkedIn"
              >
                <img src="./in.png" className="linkedIn"></img>
              </a>
              <a
                href="https://github.com/orestispsy/"
                target="_blank"
                title="GitHub Repos"
              >
                <img src="./git.png" className="gitHub"></img>
              </a>
              <a href="tel:+4915224273054" target="_blank" title="Call Me">
                <img src="./phone.png" className="phone"></img>
              </a>
              <a
                href="mailto:opsychar@gmail.com"
                target="_blank"
                title="Send Email"
              >
                <img src="./mail.png" className="email"></img>
              </a>

              <Link to={"/contact"}>
                <div title="Send Quick Message" className="mail"></div>
              </Link>
            </div>
          )}
        </div>

        <Route
          exact
          path="/"
          render={(props) => (
            <Main
              setProject={(e: number) => setSelectedProject(e)}
              selectedProject={selectedProject}
              projects={projects.projects}
              setMute={(e: boolean) => setMute(e)}
              mute={mute}
              projectView={projectView}
              scrollTo={scrollTo}
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
            />
          )}
        />

        <Route
          path="/projects/:id"
          render={(props) => (
            <Project
              setProject={(e: any) => setSelectedProject(e)}
              selectedProject={selectedProject}
              projects={projects.projects}
              setProjectView={(e: any) => setProjectView(e)}
              scrollTo={scrollTo}
            />
          )}
        />
      </div>
    </HashRouter>
  );
};
