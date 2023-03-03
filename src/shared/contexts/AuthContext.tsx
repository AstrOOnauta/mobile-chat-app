import React, {createContext, useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {ChildrenInterface} from '../interfaces/general/ChildrenNode';

type UserType = FirebaseAuthTypes.User | null;

type PropsUser = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

const DEFAULT_VALUE = {
  user: null,
  setUser: () => {},
};

const AuthContext = createContext({} as PropsUser);

const AuthContextProvider: React.FC<ChildrenInterface> = ({children}) => {
  const [user, setUser] = useState<UserType>(DEFAULT_VALUE.user);

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export {AuthContextProvider};
export default AuthContext;
