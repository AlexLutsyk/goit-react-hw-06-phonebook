import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactReducer from "./phoneBookReducer";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const contactsPersistConfig = {
  key: "contacts",
  blacklist: ["filter", "_persist"],
  storage,
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactReducer),
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

const storeElements = { store, persistor };

export default storeElements;
