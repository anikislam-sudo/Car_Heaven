import { MouseEventHandler } from "react";

export interface customButtonProps {
  title: string;
  btnType?: "button" | "submit";
  containerStyle?: string;
  handleClick?:MouseEventHandler<HTMLButtonElement>;
}
export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
  }