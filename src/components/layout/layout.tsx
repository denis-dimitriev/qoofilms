import { Outlet } from "react-router-dom";
import { Footer, Header } from "../organisms";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { setHiddenHeader } from "../../features/header/header.slice";

export const Layout = () => {
  const dispatch = useAppDispatch();

  const handleScroll = (event: WheelEvent) => {
    const windowsHeight = window.innerHeight;
    const layoutHeight = document.getElementById("layout")?.offsetHeight;
    if (!layoutHeight) {
      return;
    }
    if (layoutHeight > windowsHeight) {
      event.deltaY > 0
        ? dispatch(setHiddenHeader(true))
        : dispatch(setHiddenHeader(false));
    }
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const layout = document.getElementById("layout");
    const windowsHeight = window.innerHeight;
    layout?.addEventListener("wheel", (e: WheelEvent) => {
      if (layout.offsetHeight > windowsHeight) {
        timeout = setTimeout(() => handleScroll(e), 100);
      }
    });
    return () => {
      layout?.removeEventListener("wheel", handleScroll);
      clearTimeout(timeout);
    };
  }, [dispatch]);

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
