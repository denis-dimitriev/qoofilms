import { createSlice } from "@reduxjs/toolkit";

interface IMobileMenuSlice {
  isOpen: boolean;
}

const initialState: IMobileMenuSlice = {
  isOpen: false,
};

export const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    openMobileMenu: () => ({ isOpen: true }),
    closeMobileMenu: () => ({ isOpen: false }),
  },
});

export const { openMobileMenu, closeMobileMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
