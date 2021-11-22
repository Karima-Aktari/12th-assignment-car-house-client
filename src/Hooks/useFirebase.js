import {
    getAuth, signInWithPopup, GoogleAuthProvider,
    createUserWithEmailAndPassword, updateProfile,
    signInWithEmailAndPassword, signOut, onAuthStateChanged
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Sign in with google
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user?.email, user?.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.push(destination);
                setAuthError('');
            }).catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    //Sign in using Email
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser);
                //save user to the database
                saveUser(email, name, 'POST');

                // Send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }

    //Sign in using Email-Password
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const destination = location?.state?.from || '/';
                history.push(destination);
                setAuthError('');
                // ...
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    //observe user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    //set Admin
    useEffect(() => {
        fetch(`https://shielded-wave-62421.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data?.admin))
    }, [user.email])

    //Make user and save in database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://shielded-wave-62421.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }


    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
        signInUsingGoogle,

    }

}

export default useFirebase;
