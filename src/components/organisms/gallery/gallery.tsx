import { CloseButton } from "../../atoms";
import { useAppDispatch } from "../../../hooks/redux";
import { setCloseGallery } from "../../../features/gallery/gallery.slice";

interface GalleryProps {
  image: string;
}

export const Gallery = ({ image }: GalleryProps) => {
  const dispatch = useAppDispatch();

  const onCloseClickHandler = () => dispatch(setCloseGallery());

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-[299] flex items-center justify-center overflow-auto bg-black/90 p-2">
      <CloseButton
        className="absolute top-[5%] right-[5%]"
        onClick={onCloseClickHandler}
      />
      <div className="flex max-h-[70%] max-w-[75%] items-center justify-center">
        <img className=" h-full w-full rounded shadow-lg" src={image} alt="" />
      </div>
    </div>
  );
};
