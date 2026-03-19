# 🤖 AI知识库

面向非程序员的AI学习指南 - 从入门到精通

**在线访问**: https://your-domain.vercel.app

---

## 📚 六大知识板块

| 板块 | 内容 | 适合人群 |
|------|------|----------|
| 🧠 [AI基础与原理](./docs/01-ai-basics/) | AI概念、术语、工作原理 | 纯新手 |
| 🛠️ [AI工具与应用](./docs/02-ai-tools/) | 精选工具推荐与使用教程 | 想提高效率 |
| 💻 [AI开发实践](./docs/03-ai-dev/) | 提示词工程、应用开发 | 想深入使用 |
| 🏭 [AI行业应用](./docs/04-ai-industry/) | 各行业案例与方案 | 行业从业者 |
| 📈 [AI资讯与趋势](./docs/05-ai-news/) | 最新动态、技术趋势 | 关注前沿 |
| 📚 [AI学习资源](./docs/06-ai-resources/) | 课程、书籍、社区 | 系统学习 |

---

## 🚀 快速开始

### 本地开发

```bash
# 进入项目目录
cd ai-wiki

# 安装依赖
npm install

# 启动开发服务器
npm start
```

浏览器自动打开 http://localhost:3000

---

## 📁 项目结构

```
ai-wiki/
├── docs/                          # 文档内容
│   ├── 01-ai-basics/             # AI基础与原理
│   │   ├── index.md              # 分类首页
│   │   ├── what-is-ai.md         # 什么是AI
│   │   └── ...
│   ├── 02-ai-tools/              # AI工具与应用
│   ├── 03-ai-dev/                # AI开发实践
│   ├── 04-ai-industry/           # AI行业应用
│   ├── 05-ai-news/               # AI资讯与趋势
│   └── 06-ai-resources/          # AI学习资源
├── blog/                          # 博客文章
├── src/
│   ├── pages/                    # 独立页面
│   │   ├── index.tsx            # 首页
│   │   └── tools.md             # 工具导航
│   └── css/custom.css            # 自定义样式
├── static/                        # 静态资源
├── docusaurus.config.ts          # 网站配置
└── sidebars.ts                   # 侧边栏配置
```

---

## 📝 内容创作指南

### 新建文档

1. 在对应分类目录下创建 `.md` 文件
2. 添加 front matter：
   ```yaml
   ---
   sidebar_position: 1
   ---
   ```
3. 使用 Markdown 格式编写内容

### 文章模板

```markdown
---
sidebar_position: 1
---

# 文章标题

## 核心要点

- 要点1
- 要点2

## 详细内容

...

## 实践建议

...

---

💡 **提示**：重要提示信息
```

---

## 🎨 自定义配置

### 修改网站信息

编辑 `docusaurus.config.ts`：

```typescript
title: '你的网站标题',
tagline: '网站副标题',
organizationName: '你的GitHub用户名',
projectName: '仓库名',
```

### 修改主题色

编辑 `src/css/custom.css`：

```css
:root {
  --ifm-color-primary: #667eea;
  --ifm-color-primary-dark: #764ba2;
}
```

---

## 📦 部署

### 部署到Vercel

1. 推送代码到GitHub
   ```bash
   git add .
   git commit -m "更新内容"
   git push
   ```

2. 登录 [Vercel](https://vercel.com)
3. 点击 "New Project"
4. 导入GitHub仓库
5. 点击 "Deploy"

---

## 📚 文档

- [Docusaurus文档](https://docusaurus.io/)
- [Markdown语法](https://www.markdownguide.org/)

---

## 🤝 贡献指南

欢迎提交PR补充内容！请确保：

1. 内容面向非程序员，通俗易懂
2. 工具推荐经过实际测试
3. 案例来源于真实场景

---

**开始学习AI吧！** 🚀
