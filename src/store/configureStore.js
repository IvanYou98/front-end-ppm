import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import reducer from './reducer'

const func = () => {
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware({
                serializableCheck: false
            })
        ]
    })
}

export default func;