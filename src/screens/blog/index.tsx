import React from "react";
import { useParams } from "react-router-dom";

import Screen from "../../components/screen";

interface IBlogParams {
  blogId: string;
}

const Blog: React.FC = () => {
  const { blogId } = useParams<IBlogParams>();
  return (
    <Screen>
      <p>Blog {blogId} coming soon...</p>
    </Screen>
  );
};

export default Blog;
