import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCzYAzElcJgBab6h_e-ipW1opmm1zKUDVk",
    authDomain: "email-authendiction.firebaseapp.com",
    projectId: "email-authendiction",
    storageBucket: "email-authendiction.firebasestorage.app",
    messagingSenderId: "500240530758",
    appId: "1:500240530758:web:20918f32ddf932148ff947",
    measurementId: "G-GMK7BVDGEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
firebase.initializeApp(firebaseConfig);