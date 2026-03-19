# 16. 实用教程链接

**整理时间**: 2026-03-09  
**来源**: OpenClaw 官方指南  
**标签**: #OpenClaw #教程 #资源 #链接 #学习  
**重要性**: ⭐⭐⭐⭐

---

## TL;DR
汇总 OpenClaw 相关的学习资源、官方文档、社区链接和实用教程。

## 官方资源

### 官方网站
| 资源 | 链接 | 说明 |
|------|------|------|
| OpenClaw 官网 | https://openclaw.ai | 项目主页 |
| 官方文档 | https://docs.openclaw.ai | 完整文档 |
| GitHub 仓库 | https://github.com/openclaw/openclaw | 源码 |
| ClawHub 技能市场 | https://clawhub.com | 技能下载 |

### 官方文档章节

- [快速开始指南](https://docs.openclaw.ai/quickstart)
- [安装教程](https://docs.openclaw.ai/installation)
- [配置参考](https://docs.openclaw.ai/configuration)
- [Skills 开发](https://docs.openclaw.ai/skills)
- [API 文档](https://docs.openclaw.ai/api)
- [故障排除](https://docs.openclaw.ai/troubleshooting)

## 本指南文档集

### 完整指南目录

```
06_OpenClaw_Guide/
├── 01_prerequisites.md          # 前置条件
├── 02_install_core.md           # 安装核心程序
├── 03_install_terminal.md       # 安装交互式终端
├── 04_verify_installation.md    # 验证安装
├── 05_personality_config.md     # 配置文件说明
├── 06_memory_system.md          # 记忆系统原理
├── 07_short_term_memory.md      # 配置短期记忆
├── 08_channels_overview.md      # 支持的渠道
├── 09_setup_telegram.md         # 配置 Telegram
├── 10_setup_other_channels.md   # 配置其他渠道
├── 11_setup_llm.md              # 配置 LLM 模型
├── 12_setup_skills.md           # 配置 Skills
├── 13_recommended_skills.md     # 推荐技能清单
├── 14_multi_agent_system.md     # 多 Agent 系统原理
├── 15_team_setup.md             # 配置团队成员
└── 16_tutorials.md              # 实用教程链接（本文件）
```

## 模型服务文档

### OpenAI
- [API 文档](https://platform.openai.com/docs)
- [模型列表](https://platform.openai.com/docs/models)
- [定价页面](https://openai.com/pricing)

### Anthropic Claude
- [API 文档](https://docs.anthropic.com)
- [模型对比](https://docs.anthropic.com/claude/docs/models-overview)
- [定价页面](https://www.anthropic.com/pricing)

### 国内模型
- [DeepSeek 文档](https://platform.deepseek.com/docs)
- [Moonshot/Kimi 文档](https://platform.moonshot.cn/docs)
- [阿里云通义千问](https://help.aliyun.com/document_detail/2582322.html)

## 渠道配置教程

### Telegram
- [BotFather 指南](https://core.telegram.org/bots/features#botfather)
- [Bot API 文档](https://core.telegram.org/bots/api)
- [创建教程](https://core.telegram.org/bots/tutorial)

### Discord
- [开发者门户](https://discord.com/developers/applications)
- [Bot 开发指南](https://discordjs.guide/)
- [权限配置](https://discord.com/developers/docs/topics/permissions)

### Slack
- [API 文档](https://api.slack.com/)
- [创建应用](https://api.slack.com/start)
- [权限范围](https://api.slack.com/scopes)

### 飞书
- [开放平台](https://open.feishu.cn/)
- [开发文档](https://open.feishu.cn/document/home/index)
- [机器人指南](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/intro)

## 开发资源

### Skills 开发
- [Skills 开发指南](https://docs.openclaw.ai/skills/development)
- [API 参考](https://docs.openclaw.ai/skills/api)
- [示例 Skills](https://github.com/openclaw/example-skills)

### 代码示例
```bash
# 克隆示例仓库
git clone https://github.com/openclaw/example-skills.git
cd example-skills

# 查看示例
ls -la
```

## 社区资源

### 社区平台
| 平台 | 链接 | 用途 |
|------|------|------|
| Discord 社区 | https://discord.gg/clawd | 讨论交流 |
| GitHub Discussions | https://github.com/openclaw/openclaw/discussions | 问题讨论 |
| Twitter/X | https://twitter.com/openclaw | 最新动态 |

## 相关工具

### 终端工具
- [iTerm2](https://iterm2.com/) - macOS 终端
- [Warp](https://www.warp.dev/) - 现代终端
- [Oh My Zsh](https://ohmyz.sh/) - Zsh 配置框架

### 开发工具
- [Node.js](https://nodejs.org/) - 运行环境
- [npm](https://www.npmjs.com/) - 包管理器
- [VS Code](https://code.visualstudio.com/) - 代码编辑器

## 学习路径

### 初学者路径
1. 阅读 [01-04] - 安装配置
2. 配置 [05-07] - 人格和记忆
3. 设置 [08-10] - 消息渠道
4. 尝试 [11-13] - 模型和技能
5. 探索 [14-16] - 多 Agent 系统

### 进阶路径
1. 开发自定义 Skills
2. 配置多 Agent 团队
3. 集成内部系统（Webhook）
4. 优化性能和成本

## 故障排除

### 查看日志
```bash
# 查看日志
openclaw logs

# 查看特定渠道日志
openclaw logs --channel telegram

# 实时查看日志
openclaw logs --follow
```

### 调试命令
```bash
# 检查配置
openclaw config validate

# 测试连接
openclaw status

# 检查模型
openclaw models test
```

---

## 完成！

恭喜你完成了 OpenClaw 完整指南的学习！🎉

### 下一步行动建议

1. **立即开始**: 按照 01-04 章完成安装
2. **个性化**: 配置 SOUL.md 和 USER.md
3. **添加功能**: 安装 weather、web_search 等实用技能
4. **建立团队**: 配置你的 AI 专家团队
5. **持续学习**: 关注官方更新，尝试新功能

### 反馈与贡献

- 发现问题？提交 [GitHub Issue](https://github.com/openclaw/openclaw/issues)
- 有改进建议？参与 [GitHub Discussions](https://github.com/openclaw/openclaw/discussions)
- 开发了 Skills？发布到 [ClawHub](https://clawhub.com)

---

**指南版本**: v1.0  
**最后更新**: 2026-03-09  
**维护者**: OpenClaw 社区

---

**相关链接**:
- [上一章: 配置团队成员](15_team_setup.md)
- [OpenClaw 官网](https://openclaw.ai)
- [官方文档](https://docs.openclaw.ai)