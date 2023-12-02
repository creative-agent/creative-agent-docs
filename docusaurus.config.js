// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Creative Agent docs',
  tagline: 'Lets start building the future of web apps',
  favicon: 'img/favicon.ico',
  url: 'https://creativeagent.xyz',
  baseUrl: '/',
  organizationName: 'creative-agent', // Usually your GitHub org/user name.
  projectName: 'creative-agent-docs', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/creative-agent/creative-agent-docs/tree/main/',
        },
        blog:false,
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Creative Agent Docs',
        logo: {
          alt: 'Lets get started',
          src: 'img/logo.svg',
        },
        items: [
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://creativeagent.xyz',
            label: 'Integration',
            position: 'right',
          },
          {
            href: 'https://creativeagent.xyz',
            label: 'Templates',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://creativeagent.xyz',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/home',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Creative Agent, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
