import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISearchSlice {
  searchValue: string;
}

const initialState: ISearchSlice = {
  searchValue: "",
};

export const searchSlice = createSlice({
  name: "movieSearch",
  initialState,
  reducers: {
    addSearchValue: (state, action: PayloadAction<string>) => ({
      ...state,
      searchValue: action.payload,
    }),
  },
});

export const { addSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
