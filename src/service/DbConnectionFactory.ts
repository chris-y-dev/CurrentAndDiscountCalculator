import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default function DbConnectionFactory() {
  const firebaseConfig = {
    apiKey: "AIzaSyB_b3X-80x2IDuru-aTFBCHBXg_u3Hz5s4",
    authDomain: "currency-and-price-calculator.firebaseapp.com",
    databaseURL: "https://currency-and-price-calculator.firebaseio.com",
    projectId: "currency-and-price-calculator",
    storageBucket: "currency-and-price-calculator.appspot.com",
    addId: "1:890083862609:android:f3f0a583f1d1503bdfb070",
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  return db;
}
