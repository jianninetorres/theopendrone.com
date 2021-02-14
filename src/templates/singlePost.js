import React from "react";
import { graphql, Link } from "gatsby";

// render raw body from mdx
import { MDXRenderer } from "gatsby-plugin-mdx";
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
      <h1>{data.mdx.frontmatter.title}</h1>
      <h4>{data.mdx.frontmatter.date}</h4>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <div className="post-pagination-container">
        <div>
          {newerPost && (
            <Link
              to={`/updates/${newerPost.frontmatter.slug}`}
              className="newer"
            >
              <FontAwesomeIcon icon={faChevronLeft} color="black" /> Next post:{" "}
              {newerPostTitle}
            </Link>
          )}
        </div>
        <div>
          {olderPost && (
            <Link
              to={`/updates/${olderPost.frontmatter.slug}`}
              className="older"
            >
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
