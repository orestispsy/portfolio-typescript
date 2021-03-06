import { createGlobalStyle } from "styled-components";

import DarkerGrotesque from "./,,/../../../public/DarkerGrotesque.ttf";
import PollerOne from "./,,/../../../public/PollerOne.ttf";
import Bangers from "./,,/../../../public/Bangers.ttf";

export const GlobalStyles = createGlobalStyle`
   @font-face {
    font-family: DarkerGrotesque;
    src: url(${DarkerGrotesque});
  }

     @font-face {
    font-family: PollerOne;
     src: url(${PollerOne});

  }
     @font-face {
    font-family: Bangers;
     src: url(${Bangers});

  }

  
@keyframes fadeIn {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}


  @keyframes topBarLine {
    0% {
      width: 30vw;
    }

    100% {
      width: 90vw;
    }
  }

  @keyframes topBarLinePortrait {
    0% {
      width: 65vw;
    }

    100% {
      width: 80vw;
    }
  }

  @keyframes appFadeIn {
    0%{
      background-color:white;
    
    }
        100%{background-color:black    
    }
  }


  @keyframes blinkerButton {
    50% {
        padding: 1vmax;
        width: 11vmax;
        height: 11vmax;
    }
}

`;
