import { Outlet } from "react-router-dom";
import { Header } from "../organisms/header/header";

export const Layout = () => {
  return (
    <div className="h-full w-full">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
