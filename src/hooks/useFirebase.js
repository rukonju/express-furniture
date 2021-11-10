import { useEffect, useState } from "react";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile } from "firebase/auth";
import initializeFirebase from '../Pages/Authentication/Firebase/firebase.init'
initializeFirebase();
getStorage(initializeFirebase())

const useFirebase =  () =>{

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
    console.log(user)

    const createUser = (email, password, name) =>{
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const newUser = { email, displayName: name };
            setUser(newUser)
            console.log( userCredential.user);
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
                console.log(error)
              });
        })
        .catch((error) => {
            setError(error.message);
        });
        
        setLoading(false)
    }

    const googleSignIn = (navigate,from) =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            navigate(from, { replace: true });
            console.log( result.user);
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    const signIn = (email, password, navigate, from) =>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate(from, { replace: true });
        })
        .catch((error) => {
            setError(error.message);
        });
        setLoading(false)
    }

    const logOut = () =>{
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .catch((error) => {
            setError(error.message)
        });
    }

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            setLoading(true)
            if (user) {
              setUser(user)
            } 
            else {
              setUser({})
            }
            setLoading(false)
          });
    },[auth])

    return{
        user,
        error,
        loading,
        createUser,
        googleSignIn,
        signIn,
        logOut
    }
}

export default useFirebase;

