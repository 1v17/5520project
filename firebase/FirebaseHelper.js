import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"; 
import { database } from "./FirebaseSetup";

export async function writeToDB(data, collectionName) {
  try {
    const docRef = await addDoc(collection(database, collectionName), data);
    // console.log("Document written with ID: ", docRef.id);
    // using async/await to handle the promise returned by addDoc when calling the function
  }
  catch (err) {
   console.log("Write to DB ", err);
  }
}
