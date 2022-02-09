import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaQueries } from "../../../common/mediaQueries";

type Types = {
  cursor: string;
  color: string;
  as?: React.RefAttributes<HTMLAnchorElement>;
  to?: string;
};

type HatLinkTypes = {
  as?: React.RefAttributes<HTMLAnchorElement>;
};

export const EmailFormContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  color: black;
  background-color: rgb(252, 236, 208);
  border: 1px solid orange;
  padding: 2.5vmax;
  border-radius: 2vmax;
  animation: fadeIn 4s;

  ${mediaQueries("100", "480", "portrait")`
        height: 70vh ;
        flex-direction: column-reverse;
        width: 76vw ;
        border: 2px solid black ;
        box-shadow: -0 0 3px rgba(0, 0, 0, 0.25), 0 -0 3px rgba(0, 0, 0, 0.25),
            0 0 3px rgba(0, 0, 0, 0.25), -0 -0 3px rgba(0, 0, 0, 0.25) ;
`}

  @keyframes fadeIn {
    0% {
      opacity: 0%;
    }

    100% {
      opacity: 100%;
    }
  }
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 2vmax;
`;

export const InputHead = styled.div`
  text-shadow: -1px 1px 0 white, 1px -1px 0 white, 1px 1px 0 white,
    -1px -1px 0 white;
  font-size: 2vmax;

  ${mediaQueries("100", "480", "portrait")`
            font-size: 3vmax ;
            margin-bottom: 1vmax ;
`}
`;

export const Input = styled.input`
  border-radius: 1vh;
  height: 3vmax;
  border-color: transparent;
  background-color: black;
  color: white;
  text-align: center;
  outline: none;
  margin-bottom: 3vh;

  ${mediaQueries("100", "480", "portrait")`
            width: 40vw ;
            height: 5vh ;
`}

  ${mediaQueries("273", "1024", "landscape")`
              margin-top: 0.5vmax ;
            width: 20vw ;
            height: 10vh ;
`}
`;

export const TextAreaBack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  padding: 0 2vmax;
`;

export const TextArea = styled.textarea`
  width: 40vw;
  height: 40vh;
  background-color: black;
  color: white;
  resize: none;
  outline: none;
  padding: 2vh;
  border-radius: 1vmax;

  ${mediaQueries("100", "480", "portrait")`
                 width: 65vw ;
            height: 30vh ;
            margin-bottom: 1vmax ;
`}
`;

export const QuickMessage = styled.div`
  font-size: 3vmax;
  margin-bottom: 0.5vmax;
  text-shadow: -0 0 10px orange, 0 -0 10px orange, 0 0 10px orange,
    -0 -0 10px orange;
`;

export const SendButton = styled.div<Types>`
  margin-top: -0.5vmax;
  font-size: 2vmax;
  cursor: ${(props) => props.cursor};
  color: ${(props) => props.color};
  text-decoration: none;

  &:hover {
    color: black;
    text-shadow: -0 0 10px orange, 0 -0 10px orange, 0 0 10px orange,
      -0 -0 10px orange;
  }

  ${mediaQueries("100", "480", "portrait")`
           font-size: 4vmax ;
`}
`;

export const SendingNotification = styled.div`
  width: 4vmax;
  height: 4vmax;
  background-image: url("./sending.gif");
  background-size: cover;
  margin-top: -2.3vmax;
`;

export const Error = styled.div`
  margin-top: 0.5vmax;
  font-size: 2vmax;
  color: red;
  font-family: "Darker Grotesque", sans-serif;
`;

export const CloseTab = styled(Link)`
  border-radius: 50%;
  font-family: "Poller One", cursive;
  padding: 0.2vmax 0.4vmax;
  color: black;
  text-decoration: none;
  font-size: 1vmax;
  box-shadow: -0 0 5px rgba(0, 0, 0, 0.25), 0 -0 5px rgba(0, 0, 0, 0.25),
    0 0 5px rgba(0, 0, 0, 0.25), -0 -0 5px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 166, 0, 0.274);
  margin: -1vmax -1vmax -3vmax 0;
  color: black;
  align-self: flex-start;

  &:hover {
    box-shadow: -0 0 10px rgba(0, 0, 0, 0.25), 0 -0 10px rgba(0, 0, 0, 0.25),
      0 0 10px rgba(0, 0, 0, 0.25), -0 -0 10px rgba(0, 0, 0, 0.25);
    color: red;
    transition: 0.5s;
  }

  ${mediaQueries("100", "480", "portrait")`
           margin-right: -1vmax ;
            font-size: 2vmax ;
            padding: 0.4vmax 0.8vmax;
                align-self: flex-end;
`}

  ${mediaQueries("273", "1024", "landscape")`
            margin: -1vmax -1vmax 0 0;
            font-size: 2vmax ;
            padding: 0.4vmax 0.8vmax;
`}
`;

export const EmailHatImage = styled.div<HatLinkTypes>`
  background-image: url("./email.png");
  background-size: cover;
  transform: scale(-1, 1);
  width: 7.5vmax;
  height: 4vmax;
  margin: 0 0 1.5vmax -1vmax;
  cursor: unset;
  filter: invert(0%);

  ${mediaQueries("100", "480", "portrait")`
    margin: 2vmax;
`}
`;

export const EmailFormContainerBack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Bangers", cursive;
  margin-top: 5vh;

  ${mediaQueries("100", "480", "portrait")`
         margin-top: 3vmax ;
`}
`;
