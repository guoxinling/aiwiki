import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI知识库',
  tagline: '面向非程序员的AI学习指南 - 从入门到精通',
  favicon: 'img/favicon.ico',

  url: 'https://guoxinling.github.io',
  baseUrl: '/aiwiki/',

  organizationName: 'guoxinling',
  projectName: 'aiwiki',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/guoxinling/aiwiki/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/guoxinling/aiwiki/edit/main/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'AI知识库',
      logo: {
        alt: 'AI知识库 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/ai-basics/',
          label: '🧠 基础',
          position: 'left',
        },
        {
          to: '/docs/ai-tools/',
          label: '🛠️ 工具',
          position: 'left',
        },
        {
          to: '/docs/ai-dev/',
          label: '💻 开发',
          position: 'left',
        },
        {
          to: '/docs/ai-industry/',
          label: '🏭 行业',
          position: 'left',
        },
        {
          to: '/docs/ai-news/',
          label: '📈 资讯',
          position: 'left',
        },
        {
          to: '/docs/ai-resources/',
          label: '📚 资源',
          position: 'left',
        },
        {
          to: '/docs/openclaw/',
          label: '🦞 OpenClaw',
          position: 'left',
        },
        {
          href: 'https://github.com/guoxinling/aiwiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '知识库',
          items: [
            {
              label: 'AI基础与原理',
              to: '/docs/ai-basics/',
            },
            {
              label: 'AI工具与应用',
              to: '/docs/ai-tools/',
            },
            {
              label: 'AI开发实践',
              to: '/docs/ai-dev/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'AI行业应用',
              to: '/docs/ai-industry/',
            },
            {
              label: 'AI资讯与趋势',
              to: '/docs/ai-news/',
            },
            {
              label: 'AI学习资源',
              to: '/docs/ai-resources/',
            },
            {
              label: 'OpenClaw',
              to: '/docs/openclaw/',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/guoxinling/aiwiki',
            },
            {
              label: '更新日志',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI知识库. 为非程序员打造的AI学习指南。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
