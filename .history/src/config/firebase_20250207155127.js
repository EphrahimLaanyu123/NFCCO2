import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBYoY12kX69xLQ6cliUDDvzKtmN3qGzN4M",
  authDomain: "nfcco-71aff.firebaseapp.com",
  projectId: "nfcco-71aff",
  storageBucket: "nfcco-71aff.firebasestorage.app",
  messagingSenderId: "778447572239",
  appId: "1:778447572239:web:1bd4427f4093c020c1427a",
  measurementId: "G-P4ZJXVGRE4"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);