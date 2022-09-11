import { configureStore,compose } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import thunk from 'redux-thunk'

const composeEnhancers =
typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
 ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
   // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  })
 : compose; 
export const store = configureStore({
    reducer: {
        counter: counterReducer,
      },
      middleware:[thunk],
      composeEnhancers
})