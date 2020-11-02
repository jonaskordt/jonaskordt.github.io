import { HTMLAttributes } from "react";

interface KeyControlProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  keys: string[];
  action: string;
  callback: () => void;
}

export default KeyControlProps;
