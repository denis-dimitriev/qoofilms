import { Logo } from "../../components/atoms";
import { Link, Outlet } from "react-router-dom";
import { CloseIcon } from "../../assets/icons";

const Authentication = () => {
  return (
    <div className="absolute top-0 z-[1000] flex h-[100vh] w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,0.4)]">
      <div className="rounded-1xl relative flex h-auto min-w-[320px] animate-fadeIn flex-col items-center bg-white pt-5 pb-5 shadow-xl shadow-black/20">
        <Link to="/" className="absolute top-[10px] right-[10px] h-[22px] w-[22px]">
          <CloseIcon />
        </Link>
        <Logo />
        <Outlet />
      </div>
    </div>
  );
};

export default Authentication;
