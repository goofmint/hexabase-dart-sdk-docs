module.exports = {
  title: 'Hexabase SDK',
  tagline: 'Typescript SDK for Hexabase API',
  url: 'https://b-eee.github.io',
  baseUrl: '/hexabase-sdk-docs/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'b-eee', // Usually your GitHub org/user name.
  projectName: 'hexabase-sdk-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Hexabase SDK',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/Hexabase/Installation',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/b-eee/hexabase-sdk-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'API Docs',
          items: [
            {
              label: 'Redoc',
              to: 'https://az-lk.hexabase.com/redoc/index.html?url=/swagger/v1/swagger.json',
            },
            {
              label: 'Swagger',
              to: 'https://az-lk.hexabase.com/swagger/index.html',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discourse (Community Site)',
              href: 'https://community.hexabase.com/',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Company',
              href: 'https://www.hexabase.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hexabase-SDK. Built with Docusaurus.`,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'TT5KY47HTN',

      // Public API key: it is safe to commit it
      apiKey: '86c500a399a786aaacd4d2b28f177a1e',

      indexName: 'dev_hxb',


      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
      contextualSearch: true,
      // searchParameters: {
      //   facetFilters: ['language:en', ['filter1', 'filter2'], 'filter3'],
      // },
      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/b-eee/hexabase-sdk-docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/b-eee/hexabase-sdk-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  // themes: ['@docusaurus/theme-search-algolia'],
};
