import React from "react";
import { useParams } from "react-router-dom";

interface IProjectParams {
  projectId: string;
}

const Project: React.FC = () => {
  const { projectId } = useParams<IProjectParams>();
  return (
    <div>
      <p>Project {projectId}</p>
    </div>
  );
};

export default Project;
