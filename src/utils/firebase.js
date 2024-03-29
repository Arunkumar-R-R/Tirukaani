import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAYcf37_IHoArlTUqI99w5axuwExBJZB7w",
  authDomain: "thiruvaniapp.firebaseapp.com",
  projectId: "thiruvaniapp",
  storageBucket: "thiruvaniapp.appspot.com",
  messagingSenderId: "306408633303",
  appId: "1:306408633303:web:ee2832f48a2ca80f6b9192",
};

// const app = firebase.initializeApp(firebaseConfig);
let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const useFirestore = firebase.firestore();
export const auth = firebase.auth();
export default app;

export function addCollection(clientName) {
  useFirestore
    .collection("clients")
    .doc(clientName)
    .set({
      name: clientName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
}

export function addSubCollection(data) {
  data.timestamp = firebase.firestore.FieldValue.serverTimestamp();
  const documentRef = useFirestore.collection("clients").doc(data.name);

  documentRef.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
      documentRef.onSnapshot(() => {
        documentRef
          .collection("deals")
          .add(data)
          .then(() => {
            alert("successfully added");
          })
          .catch((err) => {
            alert(`error occured ${err}`);
          });
      });
    } else {
      documentRef.set({
        name: data.name,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  });
}

export function deleteDoc(document) {
  useFirestore
    .collection("clients")
    .doc(document)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
}

export function UpdateDoc(document) {
  useFirestore
    .collection("clients")
    .doc(document.data.name)
    .collection("deals")
    .doc(document.id)
    .update(document.data)
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
}
