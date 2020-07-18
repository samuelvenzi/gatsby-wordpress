const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/samuelvenzi/Repos/gatsby-wordpress/gatsby-site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/samuelvenzi/Repos/gatsby-wordpress/gatsby-site/src/pages/404.js"))),
  "component---src-templates-index-js": hot(preferDefault(require("/Users/samuelvenzi/Repos/gatsby-wordpress/gatsby-site/src/templates/index.js"))),
  "component---src-templates-single-page-js": hot(preferDefault(require("/Users/samuelvenzi/Repos/gatsby-wordpress/gatsby-site/src/templates/single/Page.js"))),
  "component---src-templates-single-post-js": hot(preferDefault(require("/Users/samuelvenzi/Repos/gatsby-wordpress/gatsby-site/src/templates/single/Post.js")))
}

