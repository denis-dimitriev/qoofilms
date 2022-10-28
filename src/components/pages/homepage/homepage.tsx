import { Outlet } from "react-router-dom";

export const Homepage = () => {
  return (
    <div
      id="homepage"
      className="container relative flex flex-col gap-y-5 pt-[70px]"
    >
      <Outlet />
    </div>
  );
};
