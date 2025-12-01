import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDbon00v1BF9f6qsXdgCFJbp8_6RR4hHeM",
  authDomain: "startup-archi.firebaseapp.com",
  databaseURL: "https://startup-archi-default-rtdb.firebaseio.com",
  projectId: "startup-archi",
  storageBucket: "startup-archi.firebasestorage.app",
  messagingSenderId: "469227374488",
  appId: "1:469227374488:web:a3a46a0baee8fbae40cded"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Realtime Database instance
export const db = getDatabase(app);
