const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve('src/templates/article.js');
  const result = await graphql(`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "articles" }
          extension: { eq: "md" }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allFile.edges.forEach(
    ({
      node: {
        childMarkdownRemark: {
          frontmatter: { slug },
        },
      },
    }) => {
      createPage({
        path: `articles/${slug}`,
        component: articleTemplate,
        context: {
          slug,
        },
      });
    }
  );
};
