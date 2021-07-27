import React, {createContext, useContext, useReducer, useEffect} from 'react';
import { design } from '../UI/theme';
import { useAuth } from './AuthCtx';

const ThemeCtx = createContext();

export const useTheme = () => useContext(ThemeCtx);

const CLEEX = 'cleex',
    TOPKA = 'topka';

const reducer = (theme, action) => {
    switch (action.type) {
        case CLEEX:
            return design.cleex;
        case TOPKA: 
            return design.topka;
        default:
            return theme;
    };
};

const ThemeProvider = ({children}) => {
    const {isAuth} = useAuth();
    const [theme, dispatch] = useReducer(reducer, design.cleex)
    const switchTheme = (company) => dispatch({type: company});
    
    useEffect(() => {
        if (isAuth == false) {
            switchTheme(CLEEX);
        }
    }, [isAuth])

    return (
        <ThemeCtx.Provider value={{theme, switchTheme}}>
            {children}
        </ThemeCtx.Provider>
    );
};

export default ThemeProvider;