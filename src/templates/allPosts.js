import React from "react";
import { graphql } from "gatsby";
import Pagination from "../components/structure/Pagination";
import styled from "styled-components";

const PostStyles = styled.div`
  position: relative;
  top: 100px;
`;

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext;
  const homePage = `/`;
  const isfirstBlogPage = currentPage === 1 ? true : false;
  const islastBlogPage = currentPage === numPages ? true : false;

  // if the previous page is the home page (0), don't add a route
  const prevPage = currentPage - 1 === 0 ? "" : `/blog/${currentPage - 1}/`;

  // give nextPage a route if there is a page following the current page
  const nextPage =
    currentPage + 1 === numPages ? `/blog/${currentPage + 1}` : "";
  const posts = data.allMdx.edges;

  return (
    <PostStyles>
      {posts.map((post) => (
        <div
          key={post.node.frontmatter.slug}
          date={post.node.frontmatter.date}
          title={post.node.frontmatter.title}
          excerpt={post.node.frontmatter.excerpt}
          slug={post.node.frontmatter.slug}
        />
      ))}
      <Pagination
        homePage={homePage}
        isfirstBlogPage={isfirstBlogPage}
        islastBlogPage={islastBlogPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </PostStyles>
  );
};

export default allPosts;

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`;
