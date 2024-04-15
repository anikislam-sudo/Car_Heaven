import { MouseEventHandler } from "react";

export interface customButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?:MouseEventHandler<HTMLButtonElement>;
}
