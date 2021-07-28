import React, {createContext, useContext, useReducer, useState, useEffect} from 'react';
import * as Keychain from 'react-native-keychain';

const AuthCtx = createContext();

export const useAuth = () => useContext(AuthCtx);

const LOGIN = 'login',
    LOGOUT = 'logout';

const reducer = (isAuth, action) => {
    switch (action.type) {
        case LOGIN:
            return true;
        case LOGOUT: 
            return false;
        default:
            return isAuth;
    };
};

const AuthProvider = ({children}) => {
    
    const [isAuth, dispatch] = useReducer(reducer, false);
    const [userId, setUserId] = useState('');
    const logIn = () => dispatch({type: LOGIN});
    const logOut = () => dispatch({type: LOGOUT});
    const setSession = async(id) => {
        await Keychain.setGenericPassword(id, id);
    };
    const destroySession = async() => await Keychain.resetGenericPassword();
    const getUserId = async() => {
        try {
          const {username} = await Keychain.getGenericPassword();
          if (username) {
            setUserId(username);
            logIn();
          } else {
            console.log('no ID');
          }
        } catch (error) {
          console.log("session couldn't be accessed!", error);
        }
      };

    useEffect(() => {
        getUserId();
    }, [isAuth])

    return (
        <AuthCtx.Provider value={{isAuth, userId, logIn, logOut, setSession, destroySession}}>
            {children}
        </AuthCtx.Provider>
    );
};

export default AuthProvider;