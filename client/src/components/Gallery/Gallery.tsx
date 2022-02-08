import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Gallery.css";

interface Props {
  toggleGallery: boolean;
  setToggleGallery: (e: any) => void;
  galRef: React.MutableRefObject<HTMLDivElement | null> | null;
  selectedProject: number;
  projects: any;
  scrollTo: (e: any, e2?: ScrollBehavior | undefined) => void;
}

export const Gallery: React.FC<Props> = ({
  projects,
  selectedProject,
  toggleGallery,
  setToggleGallery,
  scrollTo,
  galRef,
}) => {
  const [counter, setCounter] = useState<number>(0);
  const [maxItems, setMaxItems] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(
    function () {
      if (projects && selectedProject) {
        if (projects[selectedProject].pics) {
          setMaxItems(projects[selectedProject].pics.length - 1);
        }
      }
    },
    [maxItems]
  );

  useEffect(
    function () {
      setLoaded(false);
    },
    [counter]
  );

  return (
    <>
      {selectedProject && projects[selectedProject].pics && (
        <div className="galleryContainer">
          <img
            className={
              (!toggleGallery && "galleryPic") ||
              (toggleGallery && "galleryPicWide") ||
              undefined
            }
            src={
              (loaded && projects[selectedProject].pics[counter].pic) ||
              "./loading.gif"
            }
            style={{ animation: `fadeIn 2s` }}
            onLoad={(e) => {
              setLoaded(true);
            }}
          ></img>

          {projects[selectedProject].pics.length != 1 && (
            <div className="galleryControls">
              <div className="galleryNumbers">
                {counter + 1}/{projects[selectedProject].pics.length}
              </div>
              <div
                className="prvGallery"
                title="Previous"
                onClick={() => {
                  if (counter > 0) {
                    setCounter(counter - 1);
                  } else {
                    return;
                  }
                }}
              >
                ◄
              </div>
              <input
                value={counter}
                type="range"
                className="rangeInput"
                min={0}
                max={maxItems}
                onChange={(e) => {
                  setCounter(parseInt(e.target.value));
                }}
              ></input>
              <div
                className="nxtGallery"
                title="Next"
                onClick={() => {
                  if (counter < maxItems || counter == 0) {
                    setCounter(counter + 1);
                  }
                }}
              >
                ►
              </div>

              <img
                src="./zoom.png"
                className="zoom"
                title="Zoom"
                onClick={() => {
                  if (!toggleGallery) {
                    setToggleGallery(true);
                    setTimeout(() => {
                      if (galRef?.current) {
                        scrollTo(galRef.current.offsetTop, "smooth");
                      }
                    }, 700);
                  } else {
                    setToggleGallery(false);
                  }
                }}
              ></img>
            </div>
          )}

          {projects[selectedProject] &&
            !toggleGallery &&
            projects.map((project: any) => (
              <React.Fragment key={project.id}>
                {projects[selectedProject].id == project.id && (
                  <div className="descLinks" key={project.id}>
                    {project.url && selectedProject != 0 && (
                      <a
                        className="linkPreview"
                        href={project.url}
                        target="_blank"
                        title="Open Project"
                      >
                        <img src="./linkPreview.png"></img>
                      </a>
                    )}
                    {project.url && selectedProject == 0 && (
                      <Link className="linkPreview" to="/" title="Open Project">
                        <img src="./linkPreview.png"></img>
                      </Link>
                    )}
                    {project.git && (
                      <a
                        className="git"
                        href={project.git}
                        target="_blank"
                        title="Check Code"
                      >
                        <img src="./git.png"></img>
                      </a>
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}
        </div>
      )}
    </>
  );
};
