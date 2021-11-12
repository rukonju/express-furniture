import { useEffect, useState } from "react";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, getIdToken } from "firebase/auth";
import initializeFirebase from '../Pages/Authentication/Firebase/firebase.init'
initializeFirebase();
getStorage(initializeFirebase())

const useFirebase =  () =>{
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    console.log(user)

    const createUser = (email, password, name, navigate, from) =>{
        console.log(email, password, name, navigate, from)
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const newUser = { email, displayName: name };
            setUser(newUser);
            console.log( userCredential.user);
            saveUser(email, name, 'POST');
            updateProfile(auth.currentUser, {
                displayName: name
              })
              .then(() => {
                  setUser(newUser)
                  navigate(from, { replace: true });
              })
              .catch((error) => {
                console.log(error)
              });
        })
        .catch((error) => {
            setError(error.message);
        });
        
        setLoading(false)
    }

    const googleSignIn = (navigate,from) =>{
        setLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const {displayName, email} = result?.user;
            saveUser(email, displayName, 'PUT');
            navigate(from, { replace: true });
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setLoading(false))
    }

    const signIn = (email, password, navigate, from) =>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate(from, { replace: true });
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setLoading(false))
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

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return{
        user,
        error,
        admin,
        token,
        loading,
        logOut,
        signIn,
        createUser,
        googleSignIn,
    }
}

export default useFirebase;

