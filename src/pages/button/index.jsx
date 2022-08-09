import React from "react";
import { useEffect, useState, useRef } from "react";
import { config } from "../../config/firebase_config";
require("firebase/database");

export const ButtonPage = () => {
  const [buttonState, _setButtonState] = useState(false);
  const firebaseDB = useRef(null);

  const unsubscribeToFirebase = () => {
    if (firebaseDB.current) {
      firebaseDB.current.off();
      firebaseDB.current = null;
    }
  };

  const toggleButtonState = () => {
    firebaseDB.current.set(!buttonState);
  };

  useEffect(() => {
    firebaseDB.current = config.firebaseApp.database().ref("buttonState");
    firebaseDB.current.on("value", (snapshot) => {
      _setButtonState(snapshot.val());
    });

    return () => {
      unsubscribeToFirebase();
    };
  }, []);

  return (
    <div className="container vh-100 d-flex flex-row align-items-center justify-content-center">
      <div
        className="col text-center"
        style={{ background: "#000000" }}
        onClick={toggleButtonState}
      >
        <h1 style={{ color: "white" }}>Click Me</h1>
      </div>
      <div className="col text-center">
        <h1>LED Status: {buttonState ? "ON" : "OFF"}</h1>
      </div>
    </div>
  );
};
