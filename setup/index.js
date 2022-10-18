// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBuIvwlEh4Y-o1uMvaU6s7j8TyjwEElhp4",
  authDomain: "crud-da26f.firebaseapp.com",
  projectId: "crud-da26f",
  storageBucket: "crud-da26f.appspot.com",
  messagingSenderId: "198867527251",
  appId: "1:198867527251:web:aaa246f7957d808f8808a6",
  measurementId: "G-8VSYE7SZJ6"
};

const { async } = require('@firebase/util');
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     console.log(cityList);
//     return cityList;
// }

// console.log(getCities(db));





const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const fbAdmin= require('firebase-admin');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

 fbAdmin.initializeApp(
    { credential: fbAdmin.credential.cert(firebaseConfig)}
    );
const db = fbAdmin.firestore()

// const docRef = db.collection('users').doc('alovelace').set({
//   first: 'Ada',
//   last: 'Lovelace',
//   born: 1815
// });
// const addDetails = db.collection('users').doc('alovelace').set({
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815
// })

// const docRef = db.collection('users').doc('alovelace')

// const docRef = await db.collection('users').get();

const docRef = async (req, res) => {
    let usr=[]
     const users = await db.collection('users').doc('alovelace').get()
     console.log(users.data())
    if (users.docs.length > 0) {
      for (const user of users.docs) {
       usr.push(user.data())
    }}
    console.log(usr);
    res.json(usr)
}

docRef()
// console.log(docRef());
