import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



// import React, { createContext } from 'react';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
// import { useState } from 'react';
// import app from '../Login/Firebase/firebase.config';
// import { useEffect } from 'react';

// export const AuthContext = createContext();
//     const auth = getAuth(app);

// const AuthProvider = ({children}) => {

//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     //Google Sign in
//     const providerLogin = (provider) =>{
//         return signInWithPopup(auth, provider);
//     }



//     //Email And Password
//     const createUser = (email, password) =>{
//         return createUserWithEmailAndPassword(auth, email, password);
//     } 


//     useEffect(() =>{
//         const unsubscribe = onAuthStateChanged(auth, currentUser =>{
//             console.log(currentUser);
//             setUser(currentUser);
//         });

//         return () =>{
//             return unsubscribe();
//         }
//     },[])
    


//     // user logout
//     const logOut = () =>{
//         return signOut(auth);
//     }

    
//     const authInfo ={
//         user,
//         loading,
//         providerLogin,
//         createUser,
//         logOut,
//         setLoading,
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;