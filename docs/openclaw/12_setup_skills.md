# 12. 配置技能（Skills）

**整理时间**: 2026-03-09  
**来源**: OpenClaw 官方指南  
**标签**: #OpenClaw #Skills #技能 #扩展 #插件  
**重要性**: ⭐⭐⭐⭐⭐

---

## TL;DR
Skills 是 OpenClaw 的扩展系统，通过安装技能可以为 AI 添加天气查询、文件操作、网络搜索等功能。

## 什么是 Skills？

Skills 是 OpenClaw 的插件系统，让每个 AI 助手可以拥有不同的能力组合：

```
OpenClaw 核心
├── 基础对话能力
└── Skills 系统
    ├── weather - 天气查询
    ├── web_search - 网络搜索
    ├── file_manager - 文件管理
    ├── coding_agent - 编程助手
    └── ... 更多技能
```

## 技能管理命令

```bash
# 列出已安装技能
openclaw skills list

# 搜索可用技能
openclaw skills search "weather"

# 安装技能
openclaw skills install weather

# 更新技能
openclaw skills update weather

# 卸载技能
openclaw skills uninstall weather

# 查看技能详情
openclaw skills info weather
```

## 安装技能

### 从官方仓库安装

```bash
# 安装天气技能
openclaw skills install weather

# 安装搜索技能
openclaw skills install web_search

# 安装文件管理技能
openclaw skills install file_manager
```

### 从 GitHub 安装

```bash
# 从 GitHub 仓库安装
openclaw skills install github:username/repo

# 指定分支
openclaw skills install github:username/repo#branch
```

### 从本地安装

```bash
# 安装本地技能
openclaw skills install /path/to/skill

# 开发模式（实时更新）
openclaw skills install /path/to/skill --dev
```

## 技能配置

### 全局配置

```yaml
# ~/.openclaw/config.yaml
skills:
  # 自动加载的技能
  auto_load:
    - weather
    - web_search
    - file_manager
  
  # 技能特定配置
  weather:
    default_location: "Beijing"
    unit: "celsius"
  
  web_search:
    engine: "brave"
    api_key: "${BRAVE_API_KEY}"
```

### 技能特定配置

每个技能可能有自己的配置文件：

```bash
# 技能配置目录
~/.openclaw/skills/weather/config.yaml
~/.openclaw/skills/web_search/config.yaml
```

## 使用技能

### 自然语言调用

安装后，AI 会自动识别何时使用技能：

```
用户: 北京今天天气怎么样？
AI: [自动调用 weather 技能]
    北京今天天气晴朗，气温 15-25°C...

用户: 搜索一下最新的 AI 新闻
AI: [自动调用 web_search 技能]
    以下是最近的 AI 新闻：...
```

### 命令式调用

也可以明确告诉 AI 使用某个技能：

```
用户: 用 weather 技能查一下上海天气
用户: 使用 web_search 搜索 OpenClaw 文档
```

### 查看技能帮助

```bash
# 查看技能帮助
openclaw skills help weather

# 或在对话中询问
用户: weather 技能怎么用？
```

## 技能开发基础

### 技能目录结构

```
my_skill/
├── SKILL.md          # 技能说明文档
├── index.js          # 主入口
├── package.json      # 依赖配置
├── config.yaml       # 默认配置
└── tools/            # 工具函数
    └── utils.js
```

### SKILL.md 模板

```markdown
# My Skill

## 描述
这个技能的功能描述...

## 安装
```bash
openclaw skills install my_skill
```

## 配置
```yaml
skills:
  my_skill:
    option1: value1
    option2: value2
```

## 使用示例
- "执行 xxx 操作"
- "查询 xxx 信息"

## 依赖
- 需要 API Key
- 需要外部服务
```

### 简单技能示例

```javascript
// my_skill/index.js
module.exports = {
  name: 'my_skill',
  version: '1.0.0',
  
  // 技能初始化
  async init(config) {
    this.config = config;
    return true;
  },
  
  // 定义工具
  tools: [
    {
      name: 'do_something',
      description: '执行某个操作',
      parameters: {
        type: 'object',
        properties: {
          input: {
            type: 'string',
            description: '输入参数'
          }
        },
        required: ['input']
      },
      async execute({ input }) {
        // 执行逻辑
        return `处理结果: ${input}`;
      }
    }
  ]
};
```

## 技能权限管理

### 安全级别

```yaml
skills:
  security:
    # 允许的技能
    allowlist:
      - weather
      - web_search
      - file_manager
    
    # 禁止的技能
    blocklist:
      - dangerous_skill
    
    # 需要确认的操作
    confirm_actions:
      - file_delete
      - system_command
```

### 运行时权限

```bash
# 临时禁用某个技能
openclaw skills disable weather

# 临时启用
openclaw skills enable weather
```

## 技能市场

### 官方技能库

访问 [ClawHub](https://clawhub.com) 发现更多技能：

| 技能名 | 功能 | 安装量 |
|--------|------|--------|
| weather | 天气查询 | 10k+ |
| web_search | 网络搜索 | 8k+ |
| coding_agent | 编程助手 | 5k+ |
| file_manager | 文件管理 | 4k+ |
| calendar | 日历管理 | 3k+ |
| email | 邮件发送 | 2k+ |

### 提交技能

开发好技能后，可以提交到社区：

```bash
# 打包技能
openclaw skills package ./my_skill

# 提交到市场（需要账号）
openclaw skills publish ./my_skill.zip
```

## 故障排除

### 技能加载失败

```bash
# 查看技能日志
openclaw skills logs my_skill

# 重新加载技能
openclaw skills reload my_skill
```

### 依赖缺失

```bash
# 安装技能依赖
cd ~/.openclaw/skills/my_skill
npm install

# 或
openclaw skills install my_skill --force
```

### 配置错误

```bash
# 验证配置
openclaw skills validate my_skill

# 重置配置
openclaw skills reset-config my_skill
```

---

## 下一步

查看推荐技能清单：
👉 [13. 推荐技能清单](13_recommended_skills.md)

---

**相关链接**:
- [上一章: 配置 LLM 模型](11_setup_llm.md)
- [下一章: 推荐技能清单](13_recommended_skills.md)
- [ClawHub 技能市场](https://clawhub.com)
- [技能开发文档](https://docs.openclaw.ai/skills)