import { HTMLAttributes } from "react";

interface SliderControlProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  name: string;
  callback: (value: number) => void;
  initialValue: number;
  min?: number;
  max?: number;
  step?: number;
}

export default SliderControlProps;
