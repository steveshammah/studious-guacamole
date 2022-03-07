import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const provider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.log("Google sign in fialed: ", error);
  }
};


export const signUp = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("The following error occured during sign up: ", error);
  }
};

export const logIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("The following error occured during log in: ", error);
  }
};
export const logOut = () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log("The following error occured during sign out");
  }
};
