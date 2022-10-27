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
    <div className="fixed top-0 left-0 bottom-0 right-0 z-[299] flex items-center justify-center bg-gray-900 p-2">
      <CloseButton
        className="absolute top-[2%] right-[2%]"
        onClick={onCloseClickHandler}
      />
      <div className="flex max-h-[1080px] max-w-[1920px] items-center justify-center rounded">
        <img className="h-full w-full" src={image} alt="" />
      </div>
    </div>
  );
};
