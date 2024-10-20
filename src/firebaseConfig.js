import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyD90H6UcD2cBttcqe2DdfcN55mqV9oO5rs",
    authDomain: "auth-test-d0e19.firebaseapp.com",
    projectId: "auth-test-d0e19",
    storageBucket: "auth-test-d0e19.appspot.com",
    messagingSenderId: "686327396647",
    appId: "1:686327396647:web:1e0e2b775f67a3014e1102",
    measurementId: "G-QP4YP6L8JC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;