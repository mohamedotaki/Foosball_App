import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import db from "../firebase";

async function addUserToDB(Name, Win, Losse) {
  await setDoc(doc(db, "users", Name), {
    Win: Win,
    Losse: Losse,
  });
}

async function getUsersFromDB() {
  var users = [];
  const querySnapshot = await getDocs(query(collection(db, "users")));
  querySnapshot.forEach((doc) => {
    users.push({ Name: doc.id, Win: doc.data().Win, Losse: doc.data().Losse });
  });
  return users;
}

async function getUserWinsDB() {
  var users = [];
  const querySnapshot = await getDocs(
    query(collection(db, "users"), orderBy("Win", "desc"))
  );
  querySnapshot.forEach((doc) => {
    users.push({ Name: doc.id, Win: doc.data().Win, Losse: doc.data().Losse });
  });
  return users;
}

function writeToLocalDB(key, data) {
  return localStorage.setItem(key, JSON.stringify(data));
}

function readFromLocalDB(key) {
  return JSON.parse(localStorage.getItem(key));
}

export {
  getUsersFromDB,
  addUserToDB,
  getUserWinsDB,
  readFromLocalDB,
  writeToLocalDB,
};
