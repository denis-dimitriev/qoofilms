import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { Homepage } from "../pages/homepage/homepage";
import { TabletMenu } from "./organisms";
import { useAppSelector } from "../hooks/redux";

export const App = () => {
  const { isOpen } = useAppSelector((state) => state.mobileMenu);

  return (
    <div>
      {isOpen && <TabletMenu />}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/*" element={<Homepage />} />
          <Route path="home/*" element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
};
