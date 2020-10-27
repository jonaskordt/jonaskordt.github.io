import { HTMLAttributes } from "react";

export default interface HeaderProps extends HTMLAttributes<HTMLElement> {
  preset?: string;
}
