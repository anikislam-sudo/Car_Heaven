import { MouseEventHandler } from "react";

export interface customButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyle?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
  }


  export interface carProps  {
    city_mpg:number,
    class:string,
    combination_mpg:number
    cylinders:number
    displacement:number,
    drive:string,
    fuel_type:string,
    highway_mpg:number,
    make:string,
    model:string
    transmission:string,
    year:number
  };