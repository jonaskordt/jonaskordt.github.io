import React, { useCallback } from "react";

import { classNames } from "../../../styling";
import { Card } from "../card";
import { gitHubIcon, twitterIcon } from "./icons";
import presets from "./social-media.module.scss";
import { SocialMediaProps } from "./social-media.props";

export const SocialMedia: React.FC<SocialMediaProps> = (props) => {
  const { className, preset = "default", ...rest } = props;

  const gitHubLink = useCallback(() => {
    window.location.href = "https://github.com/jonaskordt";
  }, []);

  const twitterLink = useCallback(() => {
    window.location.href = "https://twitter.com/oJonasss";
  }, []);

  return (
    <div {...rest} className={classNames(presets[preset], className)}>
      <Card className={presets.card} clickCallback={gitHubLink}>
        <img src={gitHubIcon} alt="" />
      </Card>
      <Card className={presets.card} clickCallback={twitterLink}>
        <img src={twitterIcon} alt="" />
      </Card>
    </div>
  );
};
