import { HTMLAttributes } from "react";

import { Classifai3D } from "../classifai-3d";

export interface Classifai3DDomOverlayProps
  extends HTMLAttributes<HTMLElement> {
  classifai3D: Classifai3D;
}
