const { initializeApp } = require('firebase/app');
const config = require('./config');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const db = initializeApp(config.firebaseConfig);
module.exports.firestore = getFirestore(db)

// module.exports = {
//     db
// }