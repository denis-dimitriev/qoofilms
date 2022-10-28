import { HamburgerIcon } from "../../../../assets/icons";
import { useAppDispatch } from "../../../../hooks/redux";
import { openMobileMenu } from "../../../../features/mobile-menu/mobile-menu.slice";

export const HamburgerButton = () => {
  const dispatch = useAppDispatch();

  const onOpenMobileMenuHandler = () => dispatch(openMobileMenu());

  return (
    <button
      className="mr-4 hidden p-1 tablet:block"
      onClick={onOpenMobileMenuHandler}
    >
      <HamburgerIcon className="h-[25px] w-[25px]" />
    </button>
  );
};
