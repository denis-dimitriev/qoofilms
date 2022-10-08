import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import Homepage from "../pages/homepage/homepage";

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
      </Route>
    </Routes>
  );
};
