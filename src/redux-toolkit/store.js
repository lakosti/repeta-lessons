import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balanceSlice";
import localeReducer from "./localeSlice";
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

const balancePersistConfig = {
  key: "balance",
  storage,
  whitelist: ["value"],
};
const persistedReducerBalance = persistReducer(balancePersistConfig, balanceReducer);

export const store = configureStore({
  reducer: {
    balance: persistedReducerBalance,
    locale: localeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
