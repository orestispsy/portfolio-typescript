import React from "react";
import { Outlet } from "react-router-dom";
import { AppContainer } from "../AppLayout/styled/AppLayout.styled";
import { TopMenu } from "./../TopMenu/TopMenu";
import { GlobalStyles } from "../../common/GlobalStyles.styled";

interface Props {
  setEmailView: (e: any) => void;
  selectedProject: number;
  projects: any;
  emailView: boolean;
  projectView: boolean;
  animateFeatures: boolean;
  animateTopMenu: boolean;
  animateBio: boolean;
}

export const AppLayout: React.FC<Props> = ({
  selectedProject,
  setEmailView,
  emailView,
  projects,
  projectView,
  animateFeatures,
  animateTopMenu,
  animateBio,
}) => {
  return (
    <AppContainer>
      {" "}
      <GlobalStyles />{" "}
      {animateTopMenu && (
        <TopMenu
          selectedProject={selectedProject}
          projects={projects}
          emailView={emailView}
          setEmailView={(e: any) => setEmailView(e)}
          projectView={projectView}
          animateTopMenu={animateTopMenu}
          animateFeatures={animateFeatures}
          animateBio={animateBio}
        />
      )}
      <Outlet />
    </AppContainer>
  );
};
