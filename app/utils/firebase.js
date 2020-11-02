import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBLEuMDklQHoZ9yPMBiKXSFtrEo0zBn-T0",
    authDomain: "resto-trip-advisor.firebaseapp.com",
    databaseURL: "https://resto-trip-advisor.firebaseio.com",
    projectId: "resto-trip-advisor",
    storageBucket: "resto-trip-advisor.appspot.com",
    messagingSenderId: "30359154312",
    appId: "1:30359154312:web:9d50af7883dd3eec60393d"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
