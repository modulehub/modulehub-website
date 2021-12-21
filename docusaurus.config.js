// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ModuleHub',
  tagline: 'Turn your Github repositories into Terraform modules. Securely store Terraform state without any hassle.',
  url: 'https://www.modulehub.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'modulehub', // Usually your GitHub org/user name.
  projectName: 'modulehub', // Usually your repo name.
  
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'beta',
        content:
          'We are in open beta! <a target="_blank" rel="noopener noreferrer" href="https://app.modulehub.io/">Start now</a>',
        textColor: '#091E42',
        isCloseable: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'ModuleHub Logo',
          src: 'img/logo-mh-white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/modulehub/modulehub-api',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
            href: 'https://app.modulehub.io/',
            label: 'Login',
            position: 'right',
            className: 'button button--warning'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Alternative to',
            items: [
              {
                label: 'Terraform Cloud',
                to: '/alternative-to-terraform-cloud',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Ra9d3ZT4ed',
              }
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ModuleHub.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
        require.resolve('docusaurus-gtm-plugin'),
        {
          id: 'GTM-5JG4QH4', // GTM Container ID
        }
      ]
    ],
};

module.exports = config;
