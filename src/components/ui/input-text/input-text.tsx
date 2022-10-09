import React, { HTMLProps } from "react";

interface InputTextProps extends HTMLProps<HTMLInputElement> {
  label?: string;
}

export const InputText = ({ label, value, onChange }: InputTextProps) => {
  return (
    <div className="mb-4" key={label}>
      <label
        className="mb-2 block text-sm font-bold text-gray-700"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        id={label}
        value={value}
        type="text"
        onChange={onChange}
        placeholder={label}
      />
    </div>
  );
};
