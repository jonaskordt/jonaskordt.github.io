import { HTMLAttributes } from "react";

import Classifai3D from "..";

interface Classifai3DControlsProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  classifai3D: Classifai3D;
}

export default Classifai3DControlsProps;
