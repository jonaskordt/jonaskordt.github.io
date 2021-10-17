import { HTMLAttributes } from "react";

import { Classifai3D } from "../classifai-3d";

export interface Classifai3DControlsProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  classifai3D: Classifai3D;
}
