import React, { useState, useContext, createContext } from "react";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const signIn = (email, password) => {
    if (email === 'admin@mail.com' && password === 'admin') {
      const dataUser = { email: 'admin@mail.com', role: 'admin' }
      setUser(dataUser)
      localStorage.setItem('user', JSON.stringify(dataUser))
    }
  }

  const signOut = () => { 
    setUser(null)
    localStorage.clear()
  }

  return {
    user,
    signIn,
    signOut,
  };
}
