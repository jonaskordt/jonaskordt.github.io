import React from "react";
import { useParams } from "react-router-dom";

interface IBlogParams {
  blogId: string;
}

const Blog: React.FC = () => {
  const { blogId } = useParams<IBlogParams>();
  return (
    <div>
      <p>Blog {blogId}</p>
    </div>
  );
};

export default Blog;
