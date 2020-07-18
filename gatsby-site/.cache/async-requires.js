// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-templates-index-js": () => import("./../src/templates/index.js" /* webpackChunkName: "component---src-templates-index-js" */),
  "component---src-templates-single-page-js": () => import("./../src/templates/single/Page.js" /* webpackChunkName: "component---src-templates-single-page-js" */),
  "component---src-templates-single-post-js": () => import("./../src/templates/single/Post.js" /* webpackChunkName: "component---src-templates-single-post-js" */)
}

