import { useEffect, useState} from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

//     const SignInUsingGoogle = () => {
//       setIsLoading(true);
//      signInWithPopup(auth, googleProvider)
//     .then(result => {
//       setUser(result.user)
//       // console.log(result.user)
//     })
//     // .catch(error => {
//     //   setError(error.message)
//     // })
//     .finally(() => {
//       setIsLoading(false)
//     })
// }

    const SignInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
    .finally(() => {
      setIsLoading(false)
    })
}

useEffect( () => {
   const unsubscribed =  onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user)
        } else {
            setUser({})
        }
        setIsLoading(false)
      });
      return () => unsubscribed;
}, [])

const logOut = () => {
  setIsLoading(true);
    signOut(auth)
    .then(() => {})
    .finally(() => {
      setIsLoading(false)
    })
}

    return {user, isLoading, SignInUsingGoogle, logOut}
};

export default useFirebase;