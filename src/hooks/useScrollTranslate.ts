import { useEffect, useState } from "react";

export const useScrollTranslate = () => {
  const [translate, setTranslate] = useState<boolean>(false);

  const handleScroll = (event: WheelEvent) => {
    event.deltaY > 0 ? setTranslate(true) : setTranslate(false);
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const homepage = document.getElementById("homepage");
    homepage?.addEventListener("wheel", (e) => {
      timeout = setTimeout(() => handleScroll(e), 100);
    });

    return () => {
      homepage?.removeEventListener("wheel", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return { translate };
};
