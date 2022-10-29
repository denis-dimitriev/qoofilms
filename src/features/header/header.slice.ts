import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  headerHidden: false,
} as { headerHidden: boolean };

export const headerSlice = createSlice({
  name: "headerHidden",
  initialState,
  reducers: {
    setHiddenHeader: (state, action: PayloadAction<boolean>) => ({
      headerHidden: action.payload,
    }),
  },
});

export const { setHiddenHeader } = headerSlice.actions;
export default headerSlice.reducer;
