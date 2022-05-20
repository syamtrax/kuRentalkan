import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig =  {
    apiKey: "AIzaSyBjmvMjCMT15T3KaswVnfA_lyG0C5t_Tf8",
    authDomain: "kurentalkan-mvp.firebaseapp.com",
    projectId: "kurentalkan-mvp",
    storageBucket: "kurentalkan-mvp.appspot.com",
    messagingSenderId: "162606138291",
    appId: "1:162606138291:web:881c8fd9dc380f3cd1c1c6",
    measurementId: "G-1NWCP9SB6D"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);;

