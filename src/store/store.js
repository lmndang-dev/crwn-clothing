import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"], //User in Redux state will not be storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//Only using middleware in development stage
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
