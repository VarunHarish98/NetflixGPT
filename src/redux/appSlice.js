import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appConfig",
  initialState: { lang: "en" },
  reducers: {
    saveUserLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { saveUserLanguage } = appSlice.actions;
export default appSlice.reducer;
