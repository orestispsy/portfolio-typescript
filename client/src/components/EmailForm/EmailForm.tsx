import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  EmailFormContainerBack,
  EmailFormContainer,
  UserDetails,
  InputHead,
  Input,
  TextAreaBack,
  TextArea,
  QuickMessage,
  SendButton,
  SendingNotification,
  Error,
  CloseTab,
  EmailHatImage,
} from "./styled/EmailForm.styled";

interface Props {
  setProjectView: (e: boolean) => void;
  setProject: (e: boolean) => void;
  setEmailView: (e: boolean) => void;
  stop:()=>void
  setMute:(e:boolean)=>void
}

const {
  handleNameChange,
  handleEmailChange,
  handleEmailTextChange,
  sendEmail,

} = require("./EmailFormUtils");

export const EmailForm: React.FC<Props> = ({
    setProjectView,
    setProject,
    setEmailView,
    stop,setMute
}) => {
    const [name, setName] = useState<boolean | string>(false);
    const [email, setEmail] = useState<boolean | string>(false);
    const [emailText, setEmailText] = useState<boolean | string>(false);
    const [sending, setSending] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(function () {
        setProjectView(false);
        setProject(false);
        setEmailView(true);
        stop();
        setMute(true)
    }, []);

    return (
        <EmailFormContainerBack>
            <EmailFormContainer>
                <UserDetails>
                    <EmailHatImage />

                    <InputHead>Your Name</InputHead>
                    <Input
                        autoComplete="none"
                        placeholder="Name"
                        onChange={(e: any) => handleNameChange(e, setName)}
                    />
                    <InputHead>Your Email</InputHead>
                    <Input
                        autoComplete="none"
                        placeholder="Email"
                        onChange={(e: any) => handleEmailChange(e, setEmail)}
                    />

                    {(!name || !email || !emailText) && (
                        <SendButton cursor="not-allowed" color="grey">
                            Send
                        </SendButton>
                    )}
                    {name && email && emailText && !sending && !success && (
                        <SendButton
                            cursor="pointer"
                            color="black"
                            onClick={() => {
                                setSending(true);
                                sendEmail(
                                    setSending,
                                    setSuccess,
                                    setError,
                                    name,
                                    email,
                                    emailText
                                );
                                setError(false);
                            }}
                        >
                            Send
                        </SendButton>
                    )}
                    {sending && <SendingNotification />}
                    {success && (
                        <SendButton
                            cursor="pointer"
                            color="black"
                            as={Link}
                            to={"/"}
                        >
                            Done !
                        </SendButton>
                    )}
                </UserDetails>
                <TextAreaBack>
                    <QuickMessage>Get In Touch !</QuickMessage>
                    <TextArea
                        placeholder="Write something..."
                        onChange={(e: any) =>
                            handleEmailTextChange(e, setEmailText)
                        }
                    />
                </TextAreaBack>

                <CloseTab to={"/"}> X</CloseTab>
            </EmailFormContainer>
            {error && <Error />}
        </EmailFormContainerBack>
    );
};
