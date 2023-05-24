import { createSlice } from '@reduxjs/toolkit';
import { getLanguageFromLocalStorage } from './languageLocalStorage';

const languageAppSlice = createSlice({
  name: 'languageApp',
  initialState: {
    language: getLanguageFromLocalStorage(),
  },
  reducers: {
    toggleLanguageApp: (state, { payload }) => {
      state.language = payload;
    },
  },
});

export const { toggleLanguageApp } = languageAppSlice.actions;

export const selectLanguageSlice = (state) => state.languageApp;
export const selectLanguageApp = (state) => selectLanguageSlice(state).language;

export default languageAppSlice.reducer;
