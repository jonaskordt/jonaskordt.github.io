import React from "react";
import { useParams } from "react-router-dom";

import Screen from "../../components/screen";

interface IProjectParams {
  projectId: string;
}

const Project: React.FC = () => {
  const { projectId } = useParams<IProjectParams>();
  return (
    <Screen>
      <p>Project {projectId} coming soon...</p>
    </Screen>
  );
};

export default Project;
