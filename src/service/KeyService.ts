import { doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import DbConnectionFactory from "./DbConnectionFactory";
import GetDocRef from "./GetDocRef";

export default async function KeyService() {
  var db = DbConnectionFactory();
  var ref = GetDocRef();

  const docRef = doc(db, "keyService", ref);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.error("Unable to connect to API");
    return;
  }
}
