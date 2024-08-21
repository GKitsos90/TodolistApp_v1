import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
      
      state.darkMode
        ? document.documentElement.setAttribute('data-theme', 'dark')
        : document.documentElement.removeAttribute('data-theme');
    }
  }
});

export const { toggleTheme } = themeSlice.actions;

export const darkModeSelector = (state) => state.theme.darkMode;

export default themeSlice.reducer;
