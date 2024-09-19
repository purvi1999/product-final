import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userSlices from "../slices/userSlices";
import tasksSlices from "../slices/tasksSlices";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const presistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: userSlices,
  task: tasksSlices,
});

const presistReducer = persistReducer(presistConfig, rootReducer);
export const store = configureStore({
  reducer: presistReducer,
});

export const persistor = persistStore(store);
