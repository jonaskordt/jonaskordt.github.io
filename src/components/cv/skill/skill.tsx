import React from "react";
import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../shared";

import { ProgressBar } from "../progress-bar";
import { SkillProps } from "./skill.props";

const CenteredRow = styled(FlexRow)`
  align-items: center;
`;

const Name = styled.p`
  align-self: start;
  font-size: 18px;
  font-weight: 500;
  min-width: 100px;
`;

const StyledProgressBar = styled(ProgressBar)`
  flex-grow: 1;
`;

const Comment = styled.p`
  font-style: italic;
  margin-top: 10px;
  text-align: right;
`;

export const Skill: React.FC<SkillProps> = (props) => {
  const { name, level, comment, ...rest } = props;

  return (
    <FlexColumn {...rest}>
      <CenteredRow>
        <Name>{name}</Name>
        <StyledProgressBar level={level} />
      </CenteredRow>
      {comment && <Comment>{comment}</Comment>}
    </FlexColumn>
  );
};
