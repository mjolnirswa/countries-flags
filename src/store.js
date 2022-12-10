import axios from "axios";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { themeReducer } from "./features/theme/theme-slice";

import * as api from './config';
import { controlReducer } from "./features/controls/controls-slice";
import { countryReducer } from "./features/countries/countries-slice";
import { detailsReducer } from "./features/details/details-slice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        controls: controlReducer,
        countries: countryReducer,
        details: detailsReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api,
            },
        },
        serializableCheck: false,
    })
})