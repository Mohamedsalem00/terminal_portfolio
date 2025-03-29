import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkBwY47n7ZU_wjOEvhOoQCY_q30QYqiyg",
  authDomain: "portfilio-data.firebaseapp.com",
  projectId: "portfilio-data",
  storageBucket: "portfilio-data.appspot.com",
  messagingSenderId: "237586982524",
  appId: "1:237586982524:web:8807bc7670a44c6692cbf9"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
