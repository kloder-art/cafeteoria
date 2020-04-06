const path = require('path');

const createArticlePages = async (createPage, result) => {
  const articleTemplate = path.resolve('src/templates/article.js');
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

const createTagsPages = async (createPage, result) => {
  const tagTemplate = path.resolve('src/templates/tag.js');
  const createdTags = new Set();
  result.data.allFile.edges.forEach(
    ({
      node: {
        childMarkdownRemark: {
          frontmatter: { tags },
        },
      },
    }) => {
      for (const tag of tags) {
        if (!createdTags.has(tag)) {
          createdTags.add(tag);
          createPage({
            path: `tag/${tag}`,
            component: tagTemplate,
            context: {
              tag,
            },
          });
        }
      }
    }
  );
};

const createCategoriesPages = async (createPage, result) => {
  const categoryTemplate = path.resolve('src/templates/category.js');
  const createdCategories = new Set();
  result.data.allFile.edges.forEach(
    ({
      node: {
        childMarkdownRemark: {
          frontmatter: { categories },
        },
      },
    }) => {
      for (const category of categories) {
        if (!createdCategories.has(category)) {
          createdCategories.add(category);
          createPage({
            path: `category/${category}`,
            component: categoryTemplate,
            context: {
              category,
            },
          });
        }
      }
    }
  );
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
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
                tags
                categories
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
  await createArticlePages(createPage, result);
  await createTagsPages(createPage, result);
  await createCategoriesPages(createPage, result);
};
