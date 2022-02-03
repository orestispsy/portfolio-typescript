import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import React from "react";
import useSound from "use-sound";

import "./Main.css";

const music = require("./assets/alice.mp3");

interface Props {
  setProject: (e: any) => void;
  selectedProject: any;
  projects: any;
  mute: boolean;
  setMute: (e: any) => void;
  projectView: boolean;
  scrollTo: (e: any, y?: ScrollBehavior | undefined) => void;
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
    <div className="mainContainer">
      <div className="introTitles">
        <div>Full-Stack Web Developer</div>

        <div className="bio">
          Born and raised in Greece, currently living in Berlin, Germany. First
          studies in Electronic Engineering. Then, after times of wandering,
          lots of luck and undeniable fate, life brought me back into the web
          tech scene. {!bioView && <span id="dots">. .</span>}
          {!bioView && (
            <span
              onClick={() => {
                setBioView(!bioView);
              }}
            >
              show more
            </span>
          )}
        </div>
        {bioView && (
          <>
            <div className="bio">
              {`I have worked in TV & Event Production Industry as an electronic engineer.
                            Although, I always wanted to make the`}
              <span
                id={(mute && "mute") || "muted"}
                onClick={() => {
                  letMusic();
                }}
              >
                right turn
                {mute && (
                  <span
                    className="mute"
                    onClick={(e) => {
                      setMute(false);
                      stop();
                    }}
                  >
                    ►
                  </span>
                )}
              </span>
              {`. One year ago, I took part in the legendary Bootcamp of Spiced Academy in Berlin. A coding-camp
                             that altered my knowledge to the point and taught me how to activate super-powers again. `}
            </div>
            <div className="bio">
              {`I am a Javascript Developer and I code mainly with HTML/CSS, Node.js, Express.js, React.js, Redux, PostgreSQL and
                Socket.io. Recently I have added Typescript & Testing to my Stack.`}
            </div>
            <div className="bio">
              {` I like putting into my websites an old-School style approach, by using the aesthetics of the mid-late 90's  era.
                     Back then when I was a kid,
                 accessing the Web for my very first time, like entering a never ending Game !
                `}
            </div>
            <div className="bio">
              {` When building an App I never get bored.
                I find coding so creative. Coding can create Elements of Art. And I have a Mission through That.
                `}
            </div>
            <div className="bio">
              I love Music too. I run a web-radio show. I also play the Drums &
              Percussion. A side of my life includes the Sun, a Beach and a
              right place to chill. I know what the Secret of Monkey Island is
              and I still miss the times listening to the calling tone of an old
              dial-up connection.
              {bioView && (
                <span
                  onClick={() => {
                    setBioView(!bioView);
                    scrollTo(0);
                  }}
                >
                  hide
                </span>
              )}
            </div>{" "}
          </>
        )}
      </div>
      <div className="intro" ref={projRef}>
        <div>LATEST PROJECTS</div>
      </div>

      <div className="projectBoxBack">
        <div className="projectBox">
          {projects &&
            projects.map((project: any) => (
              <Link
                to={`/projects/${project.id}`}
                key={project.id}
                className="description"
              >
                {(!selectedProject || selectedProject == project.id) && (
                  <div
                    onClick={(e) => {
                      setMute(false);
                      stop();

                      setProject(project.id);
                    }}
                  >
                    <div className="projectBack">
                      <div className="project">
                        <div className="name">{project.name}</div>
                        <img className="imgScr" src={project.preview}></img>
                        {project.hot && selectedProject == 0 && (
                          <img src="./hot.png" className="hot"></img>
                        )}
                        {project.remastered && selectedProject == 0 && (
                          <div className="remastered">Remastered</div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            ))}
        </div>
      </div>
      <div className="techStack">
        <img className="techPic" id="trio" src="./tech/trio.png"></img>
        <img className="techPic" id="techPic" src="./tech/nodejs.png"></img>
        <img className="techPic" id="techPicX" src="./tech/expressjs.png"></img>
        <img className="techPic" src="./tech/react.png"></img>

        <img className="techPic" src="./tech/redux.png"></img>

        <img className="techPic" id="techPic" src="./tech/socketio.png"></img>
        <img className="techPic" src="./tech/postgresql.png"></img>
        <img className="techPic" id="techPic" src="./tech/gcloud.png"></img>
        <img className="techPic" id="techPic" src="./tech/aws.png"></img>
      </div>
      <div className="footer">
        © 2022{" "}
        <a href="https://zero-psy.com" target="_blank">
          zero-psy.com{" "}
        </a>
      </div>
    </div>
  );
};
