/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'AI Apps',
      items: ['web-apps', 'mobile-apps', 'external-web-apps', 'scripting-and-events', 'app-management'],
    },
    {
      type: 'category',
      label: 'Workflows',
      items: ['quickstart', 'concepts', 'how-to'],
    },
    {
      type: 'category',
      label: 'AI',
      items: ['quickstart', 'concepts', 'how-to'],
    },
    {
      type: 'category',
      label: 'Data sources',
      items: ['quickstart', 'concepts', 'how-to'],
    },
    {
      type: 'category',
      label: 'Queries',
      items: ['quickstart', 'concepts'],
    },
    {
      type: 'category',
      label: 'Organizations and users',
      items: ['quickstart', 'concepts'],
    },
    {
      type: 'category',
      label: 'Self-hosted deployments',
      items: ['requirements', 'quickstart', 'concepts', 'how-to', 'release-notes'],
    },
    {
      type: 'category',
      label: 'Source control',
      items: ['quickstart', 'concepts', 'how-to'],
    },
    {
      type: 'category',
      label: 'SSO',
      items: ['quickstart', 'concepts', 'how-to'],
    },
    {
      type: 'category',
      label: 'Creative Agent API',
      items: ['reference', 'how-to'],
    },
  ],
   
};

export default sidebars;
