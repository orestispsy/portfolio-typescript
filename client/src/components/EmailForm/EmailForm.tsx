import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";

import "./../EmailForm/EmailForm.css";

interface Props {
  setProjectView: (e: boolean) => void;
  setProject: (e: boolean) => void;
}

const {
  handleNameChange,
  handleEmailChange,
  handleEmailTextChange,
  sendEmail,
} = require("./EmailFormUtils");

export const EmailForm: React.FC<Props> = ({ setProjectView, setProject }) => {
  const [name, setName] = useState<boolean | string>(false);
  const [email, setEmail] = useState<boolean | string>(false);
  const [emailText, setEmailText] = useState<boolean | string>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(function () {
    setProjectView(false);
  }, []);

  return (
    <div className="emailFormContainerBack">
      <div className="emailFormContainer">
        <div className="userDetails">
          <div
            title="Send Quick Message"
            className="mail"
            id="mail"
            onClick={() => {
              setProject(false);
            }}
          ></div>
          <div className="inputHeadline">Your Name</div>
          <input
            autoComplete="none"
            placeholder="Name"
            onChange={(e) => handleNameChange(e, setName)}
          ></input>
          <div className="inputHeadline">Your Email</div>
          <input
            autoComplete="none"
            placeholder="Email"
            onChange={(e) => handleEmailChange(e, setEmail)}
          ></input>
          {(!name || !email || !emailText) && (
            <div className="sendButtonDisabled">Send</div>
          )}
          {name && email && emailText && !sending && !success && (
            <div
              className="sendButton"
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
            </div>
          )}
          {sending && <div className="sending"></div>}
          {success && (
            <Link to={"/"} className="sent">
              Done !
            </Link>
          )}
        </div>
        <div className="textAreaBack">
          <div className="quickMessage">Get In Touch !</div>
          <textarea
            placeholder="Write something..."
            onChange={(e) => handleEmailTextChange(e, setEmailText)}
          ></textarea>
        </div>
        <Link to={"/"} className="closeTab" id="closeTab">
          X
        </Link>
      </div>

      {error && (
        <div className="error">Something Went Wrong, Please Try Again</div>
      )}
    </div>
  );
};
