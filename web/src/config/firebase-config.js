import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkL2HhAuo6xfG1HxjqmYKL0geof9thvNI",
  authDomain: "folder-notes-81829.firebaseapp.com",
  projectId: "folder-notes-81829",
  storageBucket: "folder-notes-81829.appspot.com",
  messagingSenderId: "892207446524",
  appId: "1:892207446524:web:806514e343843c45a3da79",
};

//   const app = firebase.FirebaseErrorinitializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
