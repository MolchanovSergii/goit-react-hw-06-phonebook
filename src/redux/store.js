import { configureStore, createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const id = action.payload;
      return state.filter(contact => contact.id !== id);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    renderFilter(action) {
      return action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { renderFilter } = filterSlice.actions;
