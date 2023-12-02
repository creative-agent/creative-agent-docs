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
      items: ['tutorial-basics/web-apps'],
    },
    {
      type: 'category',
      label: 'Workflows',
      items: ['tutorial-basics/web-apps'],
    },
    {
      type: 'category',
      label: 'AI',
      items: ['tutorial-basics/web-apps'],
    },
    {
      type: 'category',
      label: 'Data sources',
      items: ['tutorial-basics/web-apps'],
    },
    {
      type: 'category',
      label: 'Queries',
      items: ['tutorial-basics/web-apps'],
    },
    {
      type: 'category',
      label: 'Organizations and users',
      items: ['tutorial-basics/web-apps'],
    },
    {
      type: 'category',
      label: 'Self-hosted deployments',
      items: ['tutorial-basics/web-apps'],
    },
    {
      type: 'category',
      label: 'Source control',
      items: ['tutorial-basics/web-apps'],
    },
    {
      type: 'category',
      label: 'SSO',
      items: ['tutorial-basics/web-apps'],
    },
    {
      type: 'category',
      label: 'Creative Agent API',
      items: ['tutorial-basics/web-apps'],
    },
  ],
   
};

export default sidebars;
