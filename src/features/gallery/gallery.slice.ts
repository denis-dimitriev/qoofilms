import { createSlice } from "@reduxjs/toolkit";

interface IGallery {
  galleryOpen: boolean;
}

const initialState: IGallery = {
  galleryOpen: false,
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setOpenGallery: () => ({ galleryOpen: true }),
    setCloseGallery: () => ({ galleryOpen: false }),
  },
});

export const { setOpenGallery, setCloseGallery } = gallerySlice.actions;
export default gallerySlice.reducer;
