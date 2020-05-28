module.exports = {
  tHome: 'Inicio',
  tRelativePosts: 'Posts relacionados',
  tTags: 'Etiquetado',
  tIndTitle: 'Todos los posts',
  taIndKeywords: [`blog`, `gatsby`, `javascript`, `react`],
  tfIndCountPosts: (count) => `${count} posts`,
  tfTagHeader: (totalCount, tag) =>
    `${totalCount} post${totalCount === 1 ? '' : 's'} etiquetado con "${tag}"`,
};
