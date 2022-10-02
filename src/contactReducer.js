import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    value: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.value.push(action.payload);
    },
    removeContact: (state, action) => {
      state.value.splice(action.payload - 1, 1);
    },

    editContact: (state, action) => {
      state.value.splice(action.payload.id, 1, action.payload.data);
    },
  },
});
console.log(contactSlice.actions)
export const { addContact, removeContact, editContact } = contactSlice.actions;

export default contactSlice.reducer;
