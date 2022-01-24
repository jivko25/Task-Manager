import React, { createContext } from 'react';
import { Store } from './Store';
import {useLocalObservable} from 'mobx-react'

const StoreContext = createContext(null as any);



export const StoreProvider : React.FC = ({children}) => {
    const store = useLocalObservable(Store);
    return(
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => React.useContext(StoreContext);