// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { firebaseConfig } from './FirebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 永続性の設定
setPersistence(auth, browserLocalPersistence);

export { auth };
