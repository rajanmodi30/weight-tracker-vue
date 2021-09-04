// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLjNFTPgV_pC1acsakn12odDVdl34UupA",
  authDomain: "weight-tracker-62503.firebaseapp.com",
  projectId: "weight-tracker-62503",
  storageBucket: "weight-tracker-62503.appspot.com",
  messagingSenderId: "719588529069",
  appId: "1:719588529069:web:8798fcea60a4f889bfc724",
  measurementId: "G-W9HZV4PDQE",
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

// export _default { messaging };
export default messaging;
