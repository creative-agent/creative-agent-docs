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
      items: [
        {
          type: 'category',
          label: 'web apps',
          items: [
            'web-apps/quickstart',
            'web-apps/tutorial',
            'web-apps/how-to',
            'web-apps/concepts',
          ],
        },
        {
          type: 'category',
          label: 'external-web-apps',
          items: [
            'web-apps/quickstart',
            'web-apps/tutorial',
            'web-apps/how-to',
          ],
        },
        {
          type: 'category',
          label: 'scripting-and-events',
          items: [
            'web-apps/quickstart',
            'web-apps/tutorial',
          ],
        },
        {
          type: 'category',
          label: 'app-management',
          items: [
            'web-apps/concepts',
            'web-apps/how-to',
          ],
        },
      ],
    },
    // next up workflows
    {
      type: 'category',
      label: 'Workflows',
      items: [
        {
          type: 'category',
          label: 'quickstarts',
          items: [
            'web-apps/notifications',
            'web-apps/creative-agent-events',
          ],
        },
        {
          type: 'category',
          label: 'concepts',
          items: [
            'web-apps/best-practices',
            'web-apps/blocks',
            'web-apps/ontrol-flow',
            'web-apps/ide',
            'web-apps/usage-and-billing',
            'web-apps/creative-agent-events',
            'web-apps/souce-control-for-workflows',
            'web-apps/triggers',
          ],
        },
        {
          type: 'category',
          label: 'how-to',
          items: [
            'web-apps/blocks',
            'web-apps/deploy-a-workflow',
            'web-apps/import-and-export',
            'web-apps/creative-agent-events',
            'web-apps/triggers',
            'web-apps/trouble-shooting',
          ],
        },
      ],
    },
    // next up workflows
    {
      type: 'category',
      label: 'AI',
      items: [
        {
          type: 'category',
          label: 'quickstarts',
          items: [
            'web-apps/quickstart',
            'web-apps/tutorial',
            'web-apps/how-to',
          ],
        },
        {
          type: 'category',
          label: 'concepts',
          items: [
            'web-apps/quickstart',
            'web-apps/tutorial',
            'web-apps/how-to',
            'web-apps/concepts',
            'web-apps/concepts',
          ],
        },
        {
          type: 'category',
          label: 'how-to',
          items: [
            'web-apps/quickstart',
            'web-apps/tutorial',
            'web-apps/how-to',
            'web-apps/concepts',
          ],
        },
      ],
    },
    // next up ai
    {
      type: 'category',
      label: 'Data Sources',
      items: [
        {
          type: 'category',
          label: 'quickstarts',
          items: [
            'web-apps/creative-agent-database',
            'web-apps/connect-apis',
            'web-apps/connect-databases',
          ],
        },
        {
          type: 'category',
          label: 'concepts',
          items: [
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
          ],
        },
        {
          type: 'category',
          label: 'how-to',
          items: [
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
          ],
        },
      ],
    },
    // next up queries
    {
      type: 'category',
      label: 'Queries',
      items: [
        {
          type: 'category',
          label: 'concepts',
          items: [
            'web-apps/query-catching',
            'web-apps/queries',
            'web-apps/query-library',
            'web-apps/row-level-security',
          ],
        },
        {
          type: 'category',
          label: 'how-to',
          items: [
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
            'web-apps/coming-soon',
          ],
        },
      ],
    },
    // next up organization and users
    {
      type: 'category',
      label: 'Organizations and users',
      items: [
        {
          type: 'category',
          label: 'concepts',
          items: [
            'web-apps/quickstart',
            'web-apps/tutorial',
            'web-apps/how-to',
            'web-apps/concepts',
            'web-apps/concepts',
            'web-apps/concepts',
          ],
        },
        {
          type: 'category',
          label: 'how-to',
          items: [
            'web-apps/quickstart',
            'web-apps/tutorial',
            'web-apps/how-to',
            'web-apps/concepts',
            'web-apps/concepts',
            'web-apps/concepts',
            'web-apps/concepts',
            'web-apps/concepts',
            'web-apps/concepts',
            'web-apps/concepts',
            'web-apps/concepts',
            'web-apps/concepts',
            'web-apps/concepts',
            'web-apps/concepts',
          ],
        },
      ],
    },
    // next up self-hosted deployments
    {
      type: 'category',
      label: 'Self-hosted deployments',
      items: [
        {
          type: 'category',
          label: 'requirements',
          items: [
          ],
        },
        {
          type: 'category',
          label: 'quickstarts',
          items: [
            'web-apps/azure-vm',
            'web-apps/docker-compose',
            'web-apps/amazon-ec2',
            'web-apps/aws-fargate-and-ecs',
            'web-apps/gcp-compute-engine',
            'web-apps/kubernetes',
          ],
        },
        {
          type: 'category',
          label: 'concepts',
          items: [
            'web-apps/architecture',
            'web-apps/deployment-logs',
            'web-apps/multi-instance-deployment',
            'web-apps/temporal',
            'web-apps/upgrade-deployments',
          ],
        },
        {
          type: 'category',
          label: 'how-to',
          items: [
            'web-apps/configure-certificates',
            'web-apps/migrate-to-and-or-from-cloud',
            'web-apps/monitor-resource-utilization',
            'web-apps/rotate-ssh-keys',
            'web-apps/scale-creative-agent-infrastructure',
            'web-apps/manage-secrets',
            'web-apps/migrate-to-external-database',
          ],
        },
        {
          type: 'category',
          label: 'release-notes',
          items: [
          ],
        },
      ],
    },
    // next up source control
    {
      type: 'category',
      label: 'Source control',
      items: [
        {
          type: 'category',
          label: 'Quickstarts',
          items: [
            'web-apps/setup',
            'web-apps/protect-apps',
            'web-apps/protect-queries',
            'web-apps/protect-resources',
          ],
        },
        {
          type: 'category',
          label: 'Concepts',
          items: [
            'web-apps/toolscript',
            'web-apps/recommended-workflow',
            'web-apps/multi-instance-development',
          ],
        },
        {
          type: 'category',
          label: 'How to',
          items: [
            'web-apps/manage-branches',
            'web-apps/manage-deployments',
            'web-apps/resolve-merge-conflicts',
            'web-apps/migrate-from-yaml-to-toolscript',
            'web-apps/migrate-from-git-syncing',
            'web-apps/troubleshooting',
            'web-apps/using-git-syncing',
          ],
        },
      ],
    },
    // next up sso
    {
      type: 'category',
      label: 'SSO',
      items: [
        {
          type: 'category',
          label: 'Quickstarts',
          items: [
            'web-apps/coming-soon',
          ],
        },
        {
          type: 'category',
          label: 'Concepts',
          items: [
            'web-apps/single-sign-on-sso',
          ],
        },
        {
          type: 'category',
          label: 'How to',
          items: [
            'web-apps/sync-saml-group-memberships',
            'web-apps/provision-users-with-scim'
          ],
        },
      ],
    },
    // next up creative agent api
    {
      type: 'category',
      label: 'Creative Agent API',
      items: [
        {
          type: 'category',
          label: 'How to',
          items: [
            'web-apps/automate-user-onboarding',
            'web-apps/automate-spaces-configuration',
          ],
        },
      ],
    },
  ],
   
};

export default sidebars;
