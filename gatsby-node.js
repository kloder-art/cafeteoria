const path = require('path');

// Added fileInfo to markdownRemark nodes
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type MarkdownRemark implements Node {
      fileInfo: File @link(from: "parent")
    }
  `);
};

// Create article pages
const createArticlePages = (createPage, result) => {
  const articleTemplate = path.resolve('src/templates/article.js');
  result.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        frontmatter: { slug },
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

// Create tags pages
const createTagsPages = (createPage, result) => {
  const tagTemplate = path.resolve('src/templates/tag.js');
  const createdTags = new Set();
  result.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        frontmatter: { tags },
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

// Create category pages
const createCategoriesPages = (createPage, result) => {
  const categoryTemplate = path.resolve('src/templates/category.js');
  const createdCategories = new Set();
  result.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        frontmatter: { categories },
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

// Create pages main process
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "articles" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              tags
              categories
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
  createArticlePages(createPage, result);
  createTagsPages(createPage, result);
  createCategoriesPages(createPage, result);
};
