import { createSlice } from "@reduxjs/toolkit";

interface IMobileMenuSlice {
  MobileMenuOpen: boolean;
}

const initialState: IMobileMenuSlice = {
  MobileMenuOpen: false,
};

export const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    openMobileMenu: () => ({ MobileMenuOpen: true }),
    closeMobileMenu: () => ({ MobileMenuOpen: false }),
  },
});

export const { openMobileMenu, closeMobileMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
