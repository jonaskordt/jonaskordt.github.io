import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Header, ThinScreen } from "../components";
import { blogs, papers } from "../content";
import { mediaQuery } from "../theme";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 30px 70px;

  ${mediaQuery("tinyScreens")} {
    margin: 30px 20px;
  }

  > div {
    > p {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 20px;
      text-align: justify;

      ${mediaQuery("tinyScreens")} {
        font-size: 18px;
        line-height: 25px;
      }
    }

    > div {
      margin: auto;
      max-width: 800px;
      margin-bottom: 20px;
    }
  }
`;

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
        <Container>{blog.content}</Container>
      ) : (
        <Container>
          <p>Blog {blogId} doesn&apos;t exist yet.</p>
        </Container>
      )}
    </ThinScreen>
  );
};
