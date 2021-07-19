import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import { Dialog } from "@material-ui/core";
import firebase from "firebase";

import { auth } from "../../firebase/localFirebase";

import { AuthProps } from "./Auth.interfaces";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

const Auth: React.FC<AuthProps> = (props) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </Dialog>
  );
};

export default Auth;
