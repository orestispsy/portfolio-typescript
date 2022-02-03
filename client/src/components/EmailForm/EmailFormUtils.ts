import emailjs from "@emailjs/browser";

module.exports.handleNameChange = (e: any, setName: (e: any) => void) => {
  setName(e.target.value);
};

module.exports.handleEmailChange = (e: any, setEmail: (e: any) => void) => {
  setEmail(e.target.value);
};

module.exports.handleEmailTextChange = (
  e: any,
  setEmailText: (e: any) => void
) => {
  setEmailText(e.target.value);
};

module.exports.sendEmail = (
  setSending: (e: any) => void,
  setSuccess: (e: any) => void,
  setError: (e: any) => void,
  name: string,
  email: string,
  emailText: string
) => {
  const templateParams = {
    userName: name,
    userEmail: email,
    text: emailText,
  };
  emailjs
    .send(
      "service_uruuovk",
      "template_vlxhcdm",
      templateParams,
      "user_Y2KOkk3fOb66K8J9CajaN"
    )
    .then(
      (response) => {
        setSending(false);
        setSuccess(true);
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        setError(true);
        setSending(false);
        console.log("FAILED...", err);
      }
    );
};
