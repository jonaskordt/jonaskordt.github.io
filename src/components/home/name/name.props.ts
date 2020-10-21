import { HTMLAttributes } from "react";

export default interface NameProps extends HTMLAttributes<HTMLElement> {
  preset?: string;
}
