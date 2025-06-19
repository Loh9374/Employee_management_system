import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

export const AuthProvide = ({children}) => {

let [userData,setuserData] = useState(null);
localStorage.clear()
setLocalStorage();
useEffect(()=>{
    const {employees,admin} = getLocalStorage()
    setuserData({employees,admin})
},[getLocalStorage]);


  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
