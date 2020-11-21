import React, { useCallback } from "react";

import classNames from "../../../styling";
import Card from "../card";
import gitHubIcon from "./icons/GitHub.png";
import twitterIcon from "./icons/Twitter.png";
import presets from "./socialMedia.module.scss";
import SocialMediaProps from "./socialMedia.props";

const SocialMedia: React.FC<SocialMediaProps> = (props) => {
  const { className, preset = "default", ...rest } = props;

  const gitHubLink = useCallback(() => {
    window.location.href = "https://github.com/jonaskordt";
  }, []);

  const twitterLink = useCallback(() => {
    window.location.href = "https://twitter.com/oJonasss";
  }, []);

  return (
    <div {...rest} className={classNames(presets[preset], className)}>
      <Card preset="socialMedia" clickCallback={gitHubLink}>
        <img src={gitHubIcon} alt="" />
      </Card>
      <Card preset="socialMedia" clickCallback={twitterLink}>
        <img src={twitterIcon} alt="" />
      </Card>
    </div>
  );
};

export default SocialMedia;
