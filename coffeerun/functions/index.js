const functions = require('firebase-functions');
var admin = require("firebase-admin");

var serviceAccount = require("C:/Users/Adam/iCloudDrive/Documents/School/Computer Science/349/coffee-run-b6d38-firebase-adminsdk-sfvqw-5ef5590f36.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coffee-run-b6d38.firebaseio.com"
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
