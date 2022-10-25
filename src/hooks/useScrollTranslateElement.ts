import { useEffect, useState } from "react";

export const useScrollTranslateElement = () => {
  const [translate, setTranslate] = useState<boolean>(false);

  const handleScroll = (event: WheelEvent) => {
    event.deltaY > 0 ? setTranslate(true) : setTranslate(false);
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const layout = document.getElementById("layout");
    const layoutHeight = layout?.offsetHeight;
    const windowsHeight = window.innerHeight;
    if (layout && layoutHeight && layoutHeight > windowsHeight) {
      layout.addEventListener("wheel", (e) => {
        timeout = setTimeout(() => handleScroll(e), 100);
      });
    }
    return () => {
      layout?.removeEventListener("wheel", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return { translate };
};
