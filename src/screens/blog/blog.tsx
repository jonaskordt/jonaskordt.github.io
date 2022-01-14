import React from "react";
import { useParams } from "react-router-dom";

import { Header, ThinScreen } from "../../components";
import { blogs, papers } from "../../content";
import presets from "./blog.module.scss";

interface IBlogParams {
  blogId: string;
}

export const Blog: React.FC = () => {
  const { blogId } = useParams<IBlogParams>();
  const blog = blogs[blogId] || papers[blogId];

  return (
    <ThinScreen>
      <Header />
      {blog ? (
        <div className={presets.container}>{blog.content}</div>
      ) : (
        <div className={presets.container}>
          <p>Blog {blogId} doesn&apos;t exist yet.</p>
        </div>
      )}
    </ThinScreen>
  );
};
