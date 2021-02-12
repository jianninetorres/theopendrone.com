import React from "react";
import { graphql } from "gatsby";

// render raw body from mdx
import { MDXRenderer } from "gatsby-plugin-mdx";
import H3 from "../components/structure/H3";
import Image from "../components/structure/Image";
import Post from "../components/structure/Post";

const singlePost = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed
    .src
    ? data.mdx.frontmatter.featureImage.childImageSharp.fixed.src
    : "";

  return (
    <Post>
      <Image imgSrc={featureImage} />
      <H3>{data.mdx.frontmatter.title}</H3>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Post>
  );
};

export default singlePost;

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date
        excerpt
        slug
        title
        featureImage {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`;
