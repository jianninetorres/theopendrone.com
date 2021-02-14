import React from "react";
import { graphql, Link } from "gatsby";

// render raw body from mdx
import { MDXRenderer } from "gatsby-plugin-mdx";
import H3 from "../components/structure/H3";
import Image from "../components/structure/Image";
import Post from "../components/structure/Post";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const singlePost = ({ data, pageContext }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed
    .src
    ? data.mdx.frontmatter.featureImage.childImageSharp.fixed.src
    : "";

  const { newerPost, newerPostTitle, olderPost, olderPostTitle } = pageContext;

  return (
    <Post>
      <Image imgSrc={featureImage} />
      <H3>{data.mdx.frontmatter.title}</H3>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <div className="post-pagination-container">
        <div>
          {newerPost && (
            <Link to={`/blog/${newerPost.frontmatter.slug}`} className="newer">
              <FontAwesomeIcon icon={faChevronLeft} color="black" /> Next post:{" "}
              {newerPostTitle}
            </Link>
          )}
        </div>
        <div>
          {olderPost && (
            <Link to={`/blog/${olderPost.frontmatter.slug}`} className="older">
              Older post: {olderPostTitle}{" "}
              <FontAwesomeIcon icon={faChevronRight} color="black" />
            </Link>
          )}
        </div>
      </div>
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
