import { Tag } from "../../atoms";
import { IBackdrop } from "../../../types/movie-images";
import { Gallery } from "../../organisms/gallery/gallery";
import { MutableRefObject, useCallback, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setOpenGallery } from "../../../features/gallery/gallery.slice";
import { useDraggable } from "react-use-draggable-scroll";

interface BackdropModalProps {
  backdrops: IBackdrop[];
}

export const BackdropList = ({ backdrops }: BackdropModalProps) => {
  const [image, setImage] = useState<string>("");
  const { galleryOpen } = useAppSelector((state) => state.gallery);
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLUListElement>() as MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });

  const onImageClickHandler = useCallback((img: string) => {
    setImage(img);
    dispatch(setOpenGallery());
  }, []);

  return (
    <div className="flex flex-col">
      <Tag>Backdrops</Tag>
      <ul
        className="mt-1 flex cursor-pointer gap-x-2 overflow-x-scroll pb-3 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900"
        {...events}
        ref={ref}
      >
        {backdrops.map((backdrop) => (
          <li
            key={backdrop.file_path}
            className="h-[180px] min-w-[300px] overflow-hidden"
          >
            <img
              className="h-full w-full object-contain transition-all duration-300 hover:scale-[1.03]"
              src={backdrop.file_path}
              alt=""
              onClick={() => onImageClickHandler(backdrop.file_path)}
            />
          </li>
        ))}
      </ul>
      {galleryOpen && <Gallery image={image} />}
    </div>
  );
};
