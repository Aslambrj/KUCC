import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC---hRxHmDXphvPiZ-uy3gw2UJCKBeJwE",
  authDomain: "public-speaking-pros-65c85.firebaseapp.com",
  projectId: "public-speaking-pros-65c85",
  storageBucket: "public-speaking-pros-65c85.appspot.com", // ✅ Correct
  messagingSenderId: "73278656765",
  appId: "1:73278656765:web:9853d08cdbd4a678d8ae94",
  measurementId: "G-9L0Y7SGMRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app); // ✅ Export storage for uploads
