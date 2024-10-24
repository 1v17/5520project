import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { database } from "./FirebaseSetup";

export async function writeToDB(data, collectionName) {
  try {
    await addDoc(collection(database, collectionName), data);
    // console.log("Document written with ID: ", docRef.id);
    // using async/await to handle the promise returned by addDoc when calling the function
  } catch (err) {
    console.log("Write to DB ", err);
  }
}

export async function deleteFromDB(id, collectionName) {
  try {
    await deleteDoc(doc(database, collectionName, id));
    // console.log("Document deleted with ID: ", id);
  } catch (err) {
    console.log("Delete from DB", err);
  }
}

export async function deleteAllFromDB(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(database, collectionName));
    querySnapshot.forEach((snapshotDoc) => {
      deleteFromDB(snapshotDoc.id, collectionName);
    });
  } catch (err) {
    console.log("Delete all from DB", err);
  }
}

export async function readAllDocs(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(database, collectionName));
    let newArray = [];
    querySnapshot.forEach((doc) => {
      newArray.push({ ...doc.data(), id: doc.id });
    });
    return newArray;
  } catch (err) {
    console.log("Read all docs", err);
  }
  
}

export async function updateDB(id, data, collectionName) {
  try {
    // you can use setDoc() and merge: true as well, if the document does not exist, it will be created
    await updateDoc(doc(database, collectionName, id), data);
  } catch (err) {
    console.log("Update DB ", err);
  }
}
