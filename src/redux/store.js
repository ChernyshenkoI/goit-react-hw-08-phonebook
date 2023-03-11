import { configureStore, createReducer } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { setFilter } from './contactsRedux/contactsActions';
import contactsReducer from './contactsRedux/contactsSlice';
import authReducer from './authRedux/authSlice';

const filter = createReducer('', {
  [setFilter]: (_, action) => action.payload,
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistedReducer,
    filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// const reducer = (store = initialStore, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return { ...store, items: [...store.items, action.payload] };

//     case REMOVE_CONTACT:
//       return {
//         ...store,
//         items: store.items.filter(({ id }) => id !== action.payload),
//       };
//     case SET_FILTER:
//       return { ...store, filter: action.payload };
//     default:
//       return store;
//   }
// };

// const items = createReducer([], {
//   [addContact]: (state, action) => [...state, action.payload],

//   [removeContact]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
// });

export default store;
