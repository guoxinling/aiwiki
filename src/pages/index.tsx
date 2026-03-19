import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// 七大分类数据
const categories = [
  {
    title: 'AI基础与原理',
    description: '了解AI本质，掌握核心概念',
    icon: '🧠',
    link: '/docs/ai-basics/',
    color: '#4A90E2',
  },
  {
    title: 'AI工具与应用',
    description: '精选实用工具，提升效率',
    icon: '🛠️',
    link: '/docs/ai-tools/',
    color: '#50C878',
  },
  {
    title: 'AI开发实践',
    description: '提示词工程到应用开发',
    icon: '💻',
    link: '/docs/ai-dev/',
    color: '#FF6B35',
  },
  {
    title: 'AI行业应用',
    description: '各行业实际案例与方案',
    icon: '🏭',
    link: '/docs/ai-industry/',
    color: '#9B59B6',
  },
  {
    title: 'AI资讯与趋势',
    description: '追踪前沿动态，把握趋势',
    icon: '📈',
    link: '/docs/ai-news/',
    color: '#F39C12',
  },
  {
    title: 'AI学习资源',
    description: 'curated优质学习资源',
    icon: '📚',
    link: '/docs/ai-resources/',
    color: '#E74C3C',
  },
  {
    title: 'OpenClaw',
    description: '打造你的24小时AI助手团队',
    icon: '🦞',
    link: '/docs/openclaw/',
    color: '#FF6B9D',
  },
];

// 快速入口
const quickStarts = [
  { title: 'AI新手入门', desc: '从零开始了解AI', link: '/docs/01-ai-basics/what-is-ai', icon: '🌱' },
  { title: 'ChatGPT指南', desc: '最流行的AI助手', link: '/docs/02-ai-tools/chatgpt-guide', icon: '💬' },
  { title: '提示词技巧', desc: '让AI更听话', link: '/docs/03-ai-dev/prompt-basics', icon: '🎯' },
  { title: 'AI工具导航', desc: '精选工具大全', link: '/tools', icon: '🧭' },
];

// 热门内容
const hotContent = [
  { title: '2024年最值得用的10个AI工具', link: '/blog/2024-top-ai-tools', views: '12.5k' },
  { title: '提示词工程完全指南', link: '/docs/03-ai-dev/prompt-basics', views: '8.3k' },
  { title: 'AI绘画入门：Midjourney vs 即梦', link: '/docs/02-ai-tools/ai-image-tools', views: '6.7k' },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/01-ai-basics/what-is-ai">
            🚀 开始AI之旅
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/tools"
            style={{marginLeft: '12px'}}>
            🧭 AI工具导航
          </Link>
        </div>
      </div>
    </header>
  );
}

function CategoryCards() {
  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          📂 六大知识板块
        </Heading>
        <div className={styles.categoryGrid}>
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={cat.link}
              className={styles.categoryCard}
              style={{'--category-color': cat.color} as React.CSSProperties}>
              <div className={styles.categoryIcon}>{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStart() {
  return (
    <section className={styles.quickStartSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          ⚡ 快速开始
        </Heading>
        <div className={styles.quickGrid}>
          {quickStarts.map((item, idx) => (
            <Link key={idx} to={item.link} className={styles.quickCard}>
              <span className={styles.quickIcon}>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HotContent() {
  return (
    <section className={styles.hotSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          🔥 热门内容
        </Heading>
        <div className={styles.hotList}>
          {hotContent.map((item, idx) => (
            <Link key={idx} to={item.link} className={styles.hotItem}>
              <span className={styles.hotRank}>{idx + 1}</span>
              <span className={styles.hotTitle}>{item.title}</span>
              <span className={styles.hotViews}>👁 {item.views}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: '为非程序员设计',
      description: '用通俗易懂的语言讲解AI，不需要编程基础也能看懂',
      icon: '🎯',
    },
    {
      title: '实用工具推荐',
      description: '精选真正好用的AI工具，附带详细使用教程',
      icon: '🛠️',
    },
    {
      title: '持续更新',
      description: 'AI领域变化快，我们持续跟进最新动态和工具',
      icon: '🔄',
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.featureGrid}>
          {features.map((f, idx) => (
            <div key={idx} className={styles.featureItem}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="面向非程序员的AI知识库 - 从入门到精通">
      <HomepageHeader />
      <main>
        <CategoryCards />
        <QuickStart />
        <HotContent />
        <Features />
      </main>
    </Layout>
  );
}
