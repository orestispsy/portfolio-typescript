import React from "react";

import { TechStackBox, TechImg } from "./styled/TechStack.styled";

interface Props {}

export const TechStack: React.FC<Props> = ({}) => {
  return (
    <TechStackBox>
      <TechImg width="7" padding="1vmax 2vmax" src="./tech/trio.png"></TechImg>

      <TechImg width="3" src="./tech/react.png"></TechImg>
      <TechImg width="3" src="./tech/ts.png"></TechImg>
      <TechImg width="3" src="./tech/redux.png"></TechImg>

      <TechImg width="5" src="./tech/nodejs.png"></TechImg>
      <TechImg width="5" height="4vmax" src="./tech/expressjs.png"></TechImg>
      <TechImg width="3" src="./tech/postgresql.png"></TechImg>
      <TechImg width="5" src="./tech/socketio.png"></TechImg>

      <TechImg
        className="techPic"
        id="techPic"
        src="./tech/webpack.png"
      ></TechImg>
      <TechImg width="5" src="./tech/gcloud.png"></TechImg>
      <TechImg width="5" src="./tech/aws.png"></TechImg>
    </TechStackBox>
  );
};
