import React from "react";
import { useEffect, useState, useRef } from "react";
import { config } from "../../config/firebase_config";
require("firebase/database");

export const SensorsPage = () => {
  const [ultrasonicData, _setUltrasonicData] = useState(-1);
  const firebaseDB = useRef(null);

  const unsubscribeToFirebase = () => {
    if (firebaseDB.current) {
      firebaseDB.current.off();
      firebaseDB.current = null;
    }
  };


  useEffect(() => {
    firebaseDB.current = config.firebaseApp.database().ref("sensors/ultrasonic");
    firebaseDB.current.on("value", (snapshot) => {
      _setUltrasonicData(snapshot.val());
    });

    return () => {
      unsubscribeToFirebase();
    };
  }, []);

  return (
    <div className="container vh-100 d-flex flex-row align-items-center justify-content-center">
      <div className="col text-center">
        <h1>Distance in CM: {ultrasonicData} cm</h1>
      </div>
    </div>
  );
};
