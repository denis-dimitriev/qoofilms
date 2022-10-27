import React, { HTMLProps } from "react";
import { CloseIcon } from "../../../../assets/icons";

interface CloseButtonProps extends HTMLProps<HTMLButtonElement> {}

export const CloseButton = ({ className, onClick }: CloseButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      <CloseIcon className="h-[20px] w-[20px] fill-white" />
    </button>
  );
};
