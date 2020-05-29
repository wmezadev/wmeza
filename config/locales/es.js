module.exports = {
  tHome: 'Inicio',
  tRelativePosts: 'Entradas relacionadas',
  tTags: 'Etiquetada',
  tIndTitle: 'Todas las entradas',
  taIndKeywords: [`blog`, `gatsby`, `javascript`, `react`],
  tfIndCountPosts: (count) => `${count} entrada${count === 1 ? '' : 's'}`,
  tfTagHeader: (totalCount, tag) =>
    `${totalCount} entrada${totalCount === 1 ? '' : 's'} etiquetada con "${tag}"`,
  tLatestPosts: 'Últimas entradas',
  tPortfolio: 'Portafolio',
};
