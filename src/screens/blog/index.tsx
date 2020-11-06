import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/shared/header";
import Screen from "../../components/shared/screen";
import { blogs } from "../../content";
import presets from "./blog.module.scss";

interface IBlogParams {
  blogId: string;
}

const Blog: React.FC = () => {
  const { blogId } = useParams<IBlogParams>();
  const blog = blogs[blogId];

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

export default Blog;
