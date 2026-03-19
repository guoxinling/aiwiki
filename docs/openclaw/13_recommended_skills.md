# 13. 推荐技能清单

**整理时间**: 2026-03-09  
**来源**: OpenClaw 官方指南  
**标签**: #OpenClaw #Skills #推荐 #工具 #效率  
**重要性**: ⭐⭐⭐⭐⭐

---

## TL;DR
这份清单整理了 OpenClaw 最实用、最受欢迎的 Skills，按场景分类，帮助你快速找到适合自己的工具。

## 🌟 必备技能（强烈推荐）

### 1. weather - 天气查询

**功能**: 查询全球任意城市的天气信息

```bash
openclaw skills install weather
```

**使用示例**:
```
用户: 北京今天天气怎么样？
用户: 明天上海会下雨吗？
用户: 查一下纽约本周天气预报
```

**配置**:
```yaml
skills:
  weather:
    default_location: "Beijing"
    unit: "celsius"  # 或 fahrenheit
```

---

### 2. web_search - 网络搜索

**功能**: 使用 Brave Search API 进行网络搜索

```bash
openclaw skills install web_search
```

**使用示例**:
```
用户: 搜索 OpenClaw 最新更新
用户: 查一下 React 19 的新特性
用户: 找一篇关于 AI Agent 的文章
```

**配置**:
```yaml
skills:
  web_search:
    engine: "brave"
    api_key: "${BRAVE_API_KEY}"
    country: "CN"
    language: "zh"
```

**获取 API Key**: [Brave Search API](https://brave.com/search/api/)

---

### 3. file_manager - 文件管理

**功能**: 读取、写入、编辑文件，执行文件操作

```bash
openclaw skills install file_manager
```

**使用示例**:
```
用户: 读取 README.md 文件
用户: 创建一个测试文件
用户: 帮我整理 downloads 文件夹
```

**注意**: 默认限制在工作空间目录，谨慎开启系统级访问

---

### 4. coding_agent - 编程助手

**功能**: 代码编写、重构、审查，支持多种编程语言

```bash
openclaw skills install coding_agent
```

**使用示例**:
```
用户: 帮我写一个 Python 爬虫
用户: 重构这段 JavaScript 代码
用户: 检查这个函数的潜在问题
```

**特点**:
- 支持代码解释和优化
- 可生成单元测试
- 支持多种语言

---

## 💼 生产力技能

### 5. calendar - 日历管理

**功能**: 查看日程、创建事件、设置提醒

```bash
openclaw skills install calendar
```

**使用示例**:
```
用户: 我今天有什么安排？
用户: 帮我创建明天下午3点的会议
用户: 设置每周五的周报提醒
```

**支持平台**: Google Calendar, Outlook, Apple Calendar

---

### 6. email - 邮件处理

**功能**: 发送邮件、管理收件箱、自动回复

```bash
openclaw skills install email
```

**使用示例**:
```
用户: 给我发一份今天的总结
用户: 帮我回复这封邮件
用户: 检查有没有新邮件
```

---

### 7. notes - 笔记管理

**功能**: 创建、搜索、整理笔记

```bash
openclaw skills install notes
```

**使用示例**:
```
用户: 记一下这个灵感
用户: 搜索关于 AI 的笔记
用户: 整理本周的会议记录
```

---

### 8. task_manager - 任务管理

**功能**: 待办事项管理、项目跟踪

```bash
openclaw skills install task_manager
```

**使用示例**:
```
用户: 添加任务：完成周报
用户: 我今天有什么待办？
用户: 把项目 A 标记为已完成
```

---

## 🔧 开发工具技能

### 9. git_helper - Git 助手

**功能**: Git 操作辅助、提交信息生成、代码审查

```bash
openclaw skills install git_helper
```

**使用示例**:
```
用户: 生成这次提交的描述
用户: 帮我查看最近的提交历史
用户: 这个冲突怎么解决？
```

---

### 10. docker_manager - Docker 管理

**功能**: 容器管理、镜像操作、日志查看

```bash
openclaw skills install docker_manager
```

**使用示例**:
```
用户: 列出所有运行中的容器
用户: 查看 nginx 容器的日志
用户: 帮我构建这个 Dockerfile
```

---

### 11. database - 数据库助手

**功能**: SQL 查询、数据库管理、数据分析

```bash
openclaw skills install database
```

**使用示例**:
```
用户: 查询昨天的销售数据
用户: 帮我优化这条 SQL
用户: 导出用户表的数据
```

---

## 🎨 内容创作技能

### 12. image_generation - 图像生成

**功能**: 使用 DALL-E、Midjourney 等生成图像

```bash
openclaw skills install image_generation
```

**使用示例**:
```
用户: 生成一只穿西装的猫
用户: 帮我设计一个 logo
用户: 把这个描述变成图片
```

---

### 13. text_to_speech - 文字转语音

**功能**: 将文本转换为语音，支持多种声音

```bash
openclaw skills install text_to_speech
```

**使用示例**:
```
用户: 把这篇文章读给我听
用户: 用温柔的声音说这段话
用户: 生成一个音频文件
```

---

### 14. markdown_formatter - Markdown 格式化

**功能**: 自动格式化 Markdown 文档、生成目录

```bash
openclaw skills install markdown_formatter
```

**使用示例**:
```
用户: 格式化这份文档
用户: 给这个 README 生成目录
用户: 检查 Markdown 语法
```

---

## 🌐 网络工具技能

### 15. http_client - HTTP 客户端

**功能**: 发送 HTTP 请求、API 测试

```bash
openclaw skills install http_client
```

**使用示例**:
```
用户: GET https://api.example.com/users
用户: 帮我测试这个 API
用户: 发送一个 POST 请求
```

---

### 16. rss_reader - RSS 阅读器

**功能**: 订阅 RSS、阅读新闻、内容聚合

```bash
openclaw skills install rss_reader
```

**使用示例**:
```
用户: 订阅 TechCrunch 的 RSS
用户: 今天有什么科技新闻？
用户: 总结这些文章
```

---

## 📊 数据分析技能

### 17. csv_processor - CSV 处理器

**功能**: CSV 文件分析、数据转换、图表生成

```bash
openclaw skills install csv_processor
```

**使用示例**:
```
用户: 分析这个 sales.csv 文件
用户: 把数据转换成图表
用户: 筛选出销售额 > 1000 的记录
```

---

### 18. pdf_tools - PDF 工具

**功能**: PDF 读取、合并、拆分、转换

```bash
openclaw skills install pdf_tools
```

**使用示例**:
```
用户: 提取这份 PDF 的文字
用户: 合并这几个 PDF 文件
用户: 把 PDF 转成 Word
```

---

## 🎯 场景化推荐

### 开发者必备
```bash
openclaw skills install coding_agent git_helper docker_manager file_manager
```

### 内容创作者
```bash
openclaw skills install image_generation text_to_speech markdown_formatter
```

### 项目经理
```bash
openclaw skills install calendar task_manager notes email
```

### 数据分析师
```bash
openclaw skills install csv_processor database pdf_tools web_search
```

### 全能助手
```bash
openclaw skills install weather web_search file_manager calendar notes task_manager
```

---

## 技能组合建议

### 个人日常使用
- weather
- web_search
- notes
- calendar

### 团队协作
- file_manager
- task_manager
- email
- git_helper

### 学习研究
- web_search
- rss_reader
- notes
- pdf_tools

---

## 技能安装一键脚本

```bash
#!/bin/bash
# 安装推荐技能组合

ESSENTIAL="weather web_search file_manager coding_agent"
PRODUCTIVITY="calendar email notes task_manager"
DEV="git_helper docker_manager database"
CONTENT="image_generation text_to_speech markdown_formatter"

# 安装基础包
openclaw skills install $ESSENTIAL

# 可选：安装生产力包
# openclaw skills install $PRODUCTIVITY

# 可选：安装开发包
# openclaw skills install $DEV

echo "技能安装完成！"
openclaw skills list
```

---

## 下一步

了解多 Agent 协作系统：
👉 [14. 多 Agent 系统原理](14_multi_agent_system.md)

---

**相关链接**:
- [上一章: 配置技能](12_setup_skills.md)
- [下一章: 多 Agent 系统原理](14_multi_agent_system.md)
- [ClawHub 技能市场](https://clawhub.com)