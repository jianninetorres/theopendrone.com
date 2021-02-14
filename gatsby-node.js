exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
            id
          }
        }
      }
    }
  `);

  // Create paginated pages for posts

  const postsPerPage = 2;

  const numPages = Math.ceil(data.allMdx.edges.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: `/updates/${i + 1}`,
      component: require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  const posts = data.allMdx.edges;

  // Create single blog posts
  posts.forEach((edge, index) => {
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;
    actions.createPage({
      path: `/updates/${slug}`,
      component: require.resolve(`./src/templates/singlePost.js`),
      context: {
        id,
        newerPost: index === 0 ? null : posts[index - 1].node,
        olderPost: index === posts.length - 1 ? null : posts[index + 1].node,
        newerPostTitle:
          index === 0 ? null : posts[index - 1].node.frontmatter.title,
        olderPostTitle:
          index === posts.length - 1
            ? null
            : posts[index + 1].node.frontmatter.title,
      },
    });
  });
};
