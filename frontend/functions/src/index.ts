import * as functions from "firebase-functions";
import algoliasearch from "algoliasearch";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const env = functions.config();

// Initialize the Algolia Client
const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex("customers");

exports.indexCustomer = functions.firestore
  .document("customers/{customerId}")
  .onCreate((snap, context) => {
    const data = snap.data();
    const objectId = snap.id;

    return index.saveObject({
      objectId,
      ...data,
    });
  });

exports.updateIndex = functions.firestore
  .document("customers/{customerId}")
  .onUpdate((change) => {
    const newData = change.after.data();
    const objectID = change.after.id;
    return index.saveObject({ ...newData, objectID });
  });

exports.deleteFromIndex = functions.firestore
  .document("customers/{customerId}")
  .onDelete((snapshot) => index.deleteObject(snapshot.id));
