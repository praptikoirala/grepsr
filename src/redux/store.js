import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'

import userReducer from './slices/user-slice'
import categoriesReducer from './slices/category-slice'
import productDetailsReducer from './slices/details-slice'

export const store = configureStore({
    reducer: {
        user: userReducer,    
        categories: categoriesReducer,
        details: productDetailsReducer
    },
    middleware: [logger]
})
