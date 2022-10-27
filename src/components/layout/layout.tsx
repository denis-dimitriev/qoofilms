import { Outlet } from "react-router-dom";
import { Footer, Header } from "../organisms";

export const Layout = () => {
  return (
    <div
      id="layout"
      className="layout relative flex flex-col gap-y-[50px] overflow-hidden"
    >
      <Header />
      <main className="overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
