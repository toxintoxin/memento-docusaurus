// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JY\'s memento',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://toxintoxin.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/memento/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'toxintoxin', // Usually your GitHub org/user name.
  projectName: 'memento', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/toxintoxin/memento/tree/main/',
        },
        blog: {
          showReadingTime: false,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/toxintoxin/memento/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'JY\'s memento',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'messSidebar',
            position: 'left',
            label: 'Mess',
          },
          {
            type: 'docSidebar',
            sidebarId: 'workflowSidebar',
            position: 'left',
            label: 'Workflow',
          },
          {
            type: 'docSidebar',
            sidebarId: 'rSidebar',
            position: 'left',
            label: 'R',
          },
          {
            type: 'docSidebar',
            sidebarId: 'shinySidebar',
            position: 'left',
            label: 'Shiny',
          },
          {
            type: 'docSidebar',
            sidebarId: 'labSidebar',
            position: 'left',
            label: 'Lab',
          },
          {
            type: 'docSidebar',
            sidebarId: 'fastlabSidebar',
            position: 'left',
            label: 'fastlab',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/toxintoxin/memento',
            label: 'GitHub-link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Bilibili',
                href: 'https://www.bilibili.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Tutorial',
                href: 'https://tutorial.docusaurus.io',
              },
            ],
          },
        ],
        copyright: `Copyright © 2024-${new Date().getFullYear()} toxintoxin Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    themes: [
      // ... Your other themes.
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        ({
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
  
          // For Docs using Chinese, it is recomended to set:
          // language: ["en", "zh"],
  
          // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
          // forceIgnoreNoIndex: true,
        }),
      ],
    ],

};

export default config;
