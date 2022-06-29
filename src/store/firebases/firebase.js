import {initializeApp} from "firebase/app";
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore/lite';

import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBiXccVzLUarZp0y5WUhl8jpIXM5ktNeyI",
    authDomain: "auth-development-77c72.firebaseapp.com",
    projectId: "auth-development-77c72",
    storageBucket: "auth-development-77c72.appspot.com",
    messagingSenderId: "752512444014",
    appId: "1:752512444014:web:49d4fd1476f1b50222a87f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default getFirestore()


