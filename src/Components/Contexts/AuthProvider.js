// import React, { createContext } from 'react';
// import { getAuth } from "firebase/auth";
// import { useState } from 'react';
// import app from '../Login/Firebase/firebase.config';

// const AuthContext = createContext;
//     const auth = getAuth(app);

// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
    
//     const authInfo ={
//         user,
//         loading
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;