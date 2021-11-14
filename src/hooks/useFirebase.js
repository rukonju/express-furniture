import { useEffect, useState } from "react";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile} from "firebase/auth";
import initializeFirebase from '../Pages/Authentication/Firebase/firebase.init';
initializeFirebase();
getStorage(initializeFirebase())

const useFirebase =  () =>{
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [orderCancelId, setOrderCancelId] = useState('');
    const [deletedProductId, setDeletedProductId] = useState('');
    console.log(user)

    const createUser = (email, password, name, history) =>{

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
                    setUser(newUser);
                    history.replace('/');
              })
              .catch((error) => {
                setError(error.message);
              });
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setLoading(false))
        
    }

    const googleSignIn = (location, history) =>{
        setLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const {displayName, email} = result.user;
            saveUser(email, displayName, 'PUT');
            const destination = location?.state?.from || '/';
            history.replace(destination);
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setLoading(false))
    }

    const signIn = (email, password, location, history) =>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination)
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setLoading(false))
    }

    const logOut = () =>{
        setLoading(true);
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
            } 
            else {
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        fetch(`https://damp-meadow-99405.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
            })
    }, [user.email])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://damp-meadow-99405.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(result=>console.log(result))
    }

    const handleDeleteProduct = (id) =>{
        const url = `https://damp-meadow-99405.herokuapp.com/products/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.deletedCount>0){
                setDeletedProductId(id)
            }
        })
    }
    
    const handleCancelOrder = (id) =>{
        const url = `https://damp-meadow-99405.herokuapp.com/orders/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.deletedCount>0){
                setOrderCancelId(id)
            }
        })
    }

    return{
        user,
        error,
        admin,
        loading,
        orderCancelId,
        deletedProductId,
        logOut,
        signIn,
        createUser,
        googleSignIn,
        handleCancelOrder,
        handleDeleteProduct
    }
}

export default useFirebase;

