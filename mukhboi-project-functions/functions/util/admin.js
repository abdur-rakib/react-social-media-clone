const admin = require("firebase-admin");

var serviceAccount = require("../config/serviceAccount.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-mukh-boi-project.firebaseio.com",
  storageBucket: "react-mukh-boi-project.appspot.com",
});
// admin.initializeApp();
const firebase = require("firebase");
const db = admin.firestore();
const timeStamp = admin.firestore.FieldValue.serverTimestamp();

module.exports = { admin, db, firebase, timeStamp };
