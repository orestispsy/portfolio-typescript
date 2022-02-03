import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

import { Gallery } from "../Gallery/Gallery";

import "./Project.css";

interface Props {
  setProject: (e: any) => void;
  selectedProject: number;
  projects: any;
  setProjectView: any;
  scrollTo: (e: number, e2?: ScrollBehavior | undefined) => void;
}

type params = {
  id: string;
};

export const Project: React.FC<Props> = ({
  setProject,
  selectedProject,
  projects,
  setProjectView,
  scrollTo,
}) => {
  const [toggleGallery, setToggleGallery] = useState(false);

  const elemRef = useRef<HTMLDivElement | null>(null);

  const galRef = useRef<HTMLDivElement | null>(null);

  let { id } = useParams<params>();

  useEffect(function () {
    setProject(id);
    setProjectView(false);
    scrollTo(0, "smooth");
  }, []);

  return (
    <>
      <div
        className="projectBoxBack"
        id="projectBoxBack"
        style={{
          marginTop: selectedProject ? "3vmax" : "none",
        }}
      >
        {!toggleGallery && (
          <Link
            to={"/"}
            className="closeTab"
            onClick={() => {
              setProjectView(true);
            }}
          >
            X
          </Link>
        )}

        {projects &&
          projects.map((project: any) => (
            <React.Fragment key={project.id}>
              {selectedProject == project.id && (
                <div
                  className="projectBox"
                  id="projectBox"
                  ref={galRef}
                  style={{
                    flexDirection: (selectedProject && `row`) || undefined,
                  }}
                >
                  <Gallery
                    projects={projects}
                    selectedProject={selectedProject}
                    toggleGallery={toggleGallery}
                    setToggleGallery={setToggleGallery}
                    galRef={galRef}
                    scrollTo={scrollTo}
                  />
                  {!toggleGallery && (
                    <div className="description">
                      <div className="projectPreview">
                        <div className="projectText" ref={elemRef}>
                          {project.description && (
                            <div className="features">Description</div>
                          )}
                          {project.description}
                          <div className="featuresContainer">
                            {project.stack && (
                              <div className="features" id="features">
                                Tech
                              </div>
                            )}
                            {project.stack &&
                              project.stack.map((feature: any) => (
                                <div key={feature}>{feature}</div>
                              ))}
                            {project.features && (
                              <div className="features" id="features">
                                Features
                              </div>
                            )}
                            {project.features &&
                              project.features.map((feature: any) => (
                                <div key={feature}>{feature}</div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {!toggleGallery && (
                    <div className="projectScroll">
                      <div
                        className="projectUp"
                        title="Top"
                        onMouseDown={() => {
                          var i = 10;
                          var int: NodeJS.Timer = setInterval(function () {
                            if (elemRef.current) {
                              elemRef.current.scrollTop =
                                elemRef.current.scrollTop - i;
                              i += 10;
                              if (i >= 200) clearInterval(int);
                            }
                          }, 20);
                        }}
                      ></div>

                      <div
                        className="projectDown"
                        title="Scroll Down"
                        onMouseDown={() => {
                          var i = 0;
                          var int: NodeJS.Timer = setInterval(function () {
                            if (elemRef.current) {
                              elemRef.current.scrollTop =
                                elemRef.current.scrollTop + i;
                              i += 1;
                              if (i >= 20) clearInterval(int);
                            }
                          }, 20);
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
      </div>
    </>
  );
};
