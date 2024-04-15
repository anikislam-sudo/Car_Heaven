"use client";

import { customButtonProps } from "@/types";
import Image from "next/image";


const Button = ({  btnType, containerStyle,  title,  handleClick }: customButtonProps) => (
  <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyle}`}
    onClick={handleClick}
  >
    <span className={`flex-1 `}>{title}</span>
   
     
  </button>
);

export default Button;