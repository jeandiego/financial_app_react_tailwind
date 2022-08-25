import React from "react";

interface IButtonProps {
  styles?: string;
  label: string;
}

const Button = ({ styles, label }: IButtonProps) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    {label}
  </button>
);

export default Button;