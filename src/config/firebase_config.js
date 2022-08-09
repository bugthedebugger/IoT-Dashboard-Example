import firebase from 'firebase/app';

const serviceAccount = {
  type: process.env.REACT_APP_FIREBASE_TYPE,
  project_id: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  private_key_id: process.env.REACT_APP_FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.REACT_APP_FIREBASE_PRIVATE_KEY,
  client_email: process.env.REACT_APP_FIREBASE_CLIENT_EMAIL,
  client_id: process.env.REACT_APP_FIREBASE_CLIENT_ID,
  auth_uri: process.env.REACT_APP_FIREBASE_AUTH_URI,
  token_uri: process.env.REACT_APP_FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url:
    process.env.REACT_APP_FIREBASE_AUTH_PROVIDER_x509_CERT_URL,
  client_x509_cert_url: process.env.REACT_APP_FIREBASE_CLIENT_x509_CERT_URL,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const firebaseApp = firebase.initializeApp(serviceAccount);

const config = { firebaseApp };

export { config };
