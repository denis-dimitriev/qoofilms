import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import Homepage from "../pages/homepage/homepage";
import Authentication from "../pages/authentication/authentication";
import SignIn from "../pages/sign-in/sign-in";
import SignUp from "../pages/sign-up/sign-up";

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/*" element={<Homepage />} />
        <Route path="authentication/*" element={<Authentication />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Route>
    </Routes>
  );
};
