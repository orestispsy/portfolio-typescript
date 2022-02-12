import React, { useEffect } from "react";

import { MainBox, BioText, Dots, More } from "./styled/Bio.styled";

interface Props {
  setBioView: (e: any) => void;
  bioView: boolean;
  mute: boolean;
  setMute: (e: any) => void;
  letMusic: (
    mute: boolean,
    play: () => void,
    setMute: (e: boolean) => void,
    stop: () => void
  ) => void;
  stop: () => void;
  play: () => void;
  scrollTo: (e: any, e2?: ScrollBehavior | undefined) => void;
  setAnimateBio: (e: boolean) => void;
  animateBio: boolean;
  setAnimationChecker: (e: boolean) => void;
  animationChecker: boolean;
}

export const Bio: React.FC<Props> = ({
  setBioView,
  bioView,
  mute,
  setMute,
  letMusic,
  stop,
  scrollTo,
  play,
  animateBio,
  setAnimateBio,
  setAnimationChecker,
  animationChecker,
}) => {
  useEffect(function () {}, []);

  return (
    <MainBox animationChecker={animationChecker} animateBio={animateBio}>
      <div>Full-Stack Web Developer</div>
      <BioText animateBio={animateBio} animationChecker={animationChecker}>
        Born and raised in Greece, currently living in Berlin, Germany. First
        studies in Electronic Engineering. Then, after times of wandering, lots
        of luck and undeniable fate, life brought me back into the web tech
        scene. {!bioView && <Dots>. .</Dots>}
        {!bioView && (
          <More
            onClick={() => {
              setBioView(!bioView);
              setAnimationChecker(false);
            }}
          >
            show more
          </More>
        )}
      </BioText>
      {bioView && (
        <>
          <BioText animateBio={animateBio} animationChecker={animationChecker}>
            {`I have worked in TV & Event Production Industry as an electronic engineer.
                            Although, I always wanted to make the`}
            <More
              col={(mute && "red") || "orange"}
              anime={(mute && true) || false}
              onClick={() => {
                letMusic(mute, play, setMute, stop);
              }}
            >
              right turn
              {mute && (
                <More
                  col="#bfee14"
                  onClick={(e: any) => {
                    setMute(false);
                    stop();
                  }}
                >
                  ►
                </More>
              )}
            </More>
            {`. One year ago, I took part in the legendary Bootcamp of Spiced Academy in Berlin. A coding-camp
                             that altered my knowledge to the point and taught me how to activate super-powers again. `}
          </BioText>
          <BioText animateBio={animateBio} animationChecker={animationChecker}>
            {`I am a Javascript Developer and I code mainly with HTML/CSS, Node.js, Express.js, React.js, Redux, PostgreSQL and
                Socket.io. Recently I have added Typescript & Testing Frameworks to my Stack.`}
          </BioText>
          <BioText animateBio={animateBio} animationChecker={animationChecker}>
            {` I like putting into my websites an old-School style approach, by using the aesthetics of the mid-late 90's  era.
                     Back then when I was a kid,
                 accessing the Web for my very first time, like entering a never ending Game !
                `}
          </BioText>
          <BioText animateBio={animateBio} animationChecker={animationChecker}>
            {` When building an App I never get bored.
                I find coding so creative. Coding can create Elements of Art. And I have a Mission through That.
                `}
          </BioText>
          <BioText animateBio={animateBio} animationChecker={animationChecker}>
            I love Music too. I run a web-radio show. I also play the Drums &
            Percussion. A side of my life includes the Sun, a Beach and a right
            place to chill. I know what the Secret of Monkey Island is and I
            still miss the times listening to the calling tone of an old dial-up
            connection.
            {bioView && (
              <More
                onClick={() => {
                  setBioView(!bioView);

                  scrollTo(0);
                }}
              >
                hide
              </More>
            )}
          </BioText>
        </>
      )}
    </MainBox>
  );
};
