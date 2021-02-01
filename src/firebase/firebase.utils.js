import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
	apiKey: "AIzaSyAbYGSwd6vaKV5HS9fGKSpfxCUnO-UpAJM",
	authDomain: "crown-shop-622bc.firebaseapp.com",
	projectId: "crown-shop-622bc",
	storageBucket: "crown-shop-622bc.appspot.com",
	messagingSenderId: "81326822766",
	appId: "1:81326822766:web:793c6091ec7d042cb89d7f",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
