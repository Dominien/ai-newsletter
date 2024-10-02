/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'KI-Agenda',
  author: 'Marco Patzelt',
  headerTitle: 'KI-Agenda',
  description:
    'Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten, Trends und Entwicklungen in der Künstlichen Intelligenz.',
  language: 'de-DE', // Set to German
  theme: 'system', // system, dark, or light
  siteUrl: 'https://ki-agenda.com',
  siteRepo: 'https://github.com/Dominien/ai-newsletter',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/ki-agenda-banner.png`,
  mastodon: '',
  email: 'marco@ki-agenda.com',
  github: 'https://github.com/Dominien',
  x: 'https://twitter.com/x', // You can update this with your personal Twitter handle or replace with Mastodon/LinkedIn
  facebook: '',
  youtube: '',
  linkedin: 'https://www.linkedin.com/in/marco-patzelt-2574b1257', // Updated with your LinkedIn profile
  threads: '',
  instagram: '',
  locale: 'de-DE',
  stickyNav: false,
  analytics: {
    // Example for Google Analytics or Plausible:
    googleAnalytics: {
      googleAnalyticsId: 'G-Y55M0TCHDG', // Replace with your Google Analytics ID if applicable
    },
  },
  newsletter: {
    provider: 'buttondown', // Set up your Buttondown account for newsletters
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'de', // Set to German
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
