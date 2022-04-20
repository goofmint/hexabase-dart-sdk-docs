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
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
        // whether to index docs pages
        indexDocs: true,
        // must start with "/" and correspond to the routeBasePath configured for the docs plugin
        // use "/" if you use docs-only-mode
        // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/docs-introduction#docs-only-mode)
        docsRouteBasePath: '/docs',

        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 0,

        // whether to index static pages
        // /404.html is never indexed
        indexPages: false,

        // language of your documentation, see next section
        language: ["en", "ja"],

        // lunr.js-specific settings
        lunr: {
            // When indexing your documents, their content is split into "tokens".
            // Text entered into the search box is also tokenized.
            // This setting configures the separator used to determine where to split the text into tokens.
            // By default, it splits the text at whitespace and dashes.
            //
            // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
            tokenizerSeparator: /[\s\-\u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E}]+/gu
        }
    }]
  ],
};
