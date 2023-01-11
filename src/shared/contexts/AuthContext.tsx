import React, {createContext, useState} from 'react';
import {ChildrenInterface} from '../interfaces/general/ChildrenNode';

type HasUserType = boolean;

type PropsHasUser = {
  hasUser: HasUserType;
  setHasUser: React.Dispatch<React.SetStateAction<HasUserType>>;
};

const DEFAULT_VALUE = {
  hasUser: false as HasUserType,
  setHasUser: () => {},
};

const AuthContext = createContext({} as PropsHasUser);

const AuthContextProvider: React.FC<ChildrenInterface> = ({children}) => {
  const [hasUser, setHasUser] = useState<HasUserType>(DEFAULT_VALUE.hasUser);
  return (
    <AuthContext.Provider
      value={{
        hasUser,
        setHasUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export {AuthContextProvider};
export default AuthContext;
