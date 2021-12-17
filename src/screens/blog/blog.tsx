import React from "react";
import { useParams } from "react-router-dom";

import { Header, Screen } from "../../components";
import { blogs, papers } from "../../content";
import presets from "./blog.module.scss";

interface IBlogParams {
  blogId: string;
}

export const Blog: React.FC = () => {
  const { blogId } = useParams<IBlogParams>();
  const blog = blogs[blogId] || papers[blogId];

  return (
    <Screen preset="thin">
      <Header />
      {blog ? (
        <div className={presets.container}>{blog.content}</div>
      ) : (
        <div className={presets.container}>
          <p>Blog {blogId} doesn&apos;t exist yet.</p>
        </div>
      )}
    </Screen>
  );
};