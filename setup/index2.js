// import admin, { firestore } from "firebase-admin";

import * as ak from 'firebase-admin';

import pkg from 'firebase-admin';
const { firestore } = pkg;

import admin from "firebase-admin";
import { FieldValue } from '@google-cloud/firestore'

import serviceAccount from "./servkeys.json" assert { type: "json" };



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const usersDb = await db.collection('users').doc('alovelace').get()

console.log(usersDb.data())

const userDoc = {
  name : "test",
  number : "55885588"
}

const insert = await db.collection('users').doc('test').set(userDoc);

console.log(insert)

const updateDoc = {
  number : "123456789"
}

const update = await db.collection('users').doc('test').update(updateDoc);
console.log(update);

// const d = {number : "159"}
// const del = await db.collection('users').doc('test')
// console.log(del);

const d = await db.collection('users').doc('test').update({
  // number : FieldValue.delete()
  // number : FirebaseFirestore.FieldValue.delete()
  // number : firestore.FieldValue.delete()
  // name : ak.firestore.FieldValue.delete()
  name : FieldValue.delete()
});

console.log(d);

