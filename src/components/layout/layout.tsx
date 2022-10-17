import { Outlet } from "react-router-dom";
import { Header } from "../organisms/header/header";
import { Footer } from "../organisms/footer/footer";

export const Layout = () => {
  return (
    <div className="layout flex flex-col gap-y-[50px]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
