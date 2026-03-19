---
sidebar_position: 10
---

# 10. 配置其他渠道

**整理时间**: 2026-03-09  
**来源**: OpenClaw 官方指南  
**标签**: #OpenClaw #Discord #Slack #飞书 #Email #Webhook  
**重要�?*: ⭐⭐⭐⭐

---

## TL;DR
除了 Telegram，OpenClaw 还支�?Discord、Slack、飞书等多种渠道，本节介绍它们的配置方法�?
## Discord 配置

### 创建 Discord 机器�?
1. 访问 [Discord Developer Portal](https://discord.com/developers/applications)
2. 点击 "New Application"，输入应用名�?3. 进入 "Bot" 页面，点�?"Add Bot"
4. 复制 **Token**（点�?"Reset Token" 获取�?5. �?"Privileged Gateway Intents" 中启�?
   - SERVER MEMBERS INTENT
   - MESSAGE CONTENT INTENT

### 邀请机器人加入服务�?
1. 进入 "OAuth2" �?"URL Generator"
2. 选择权限�?   - `bot` scope
   - 权限：`Send Messages`, `Read Message History`, `Attach Files`
3. 复制生成�?URL，在浏览器中打开
4. 选择要加入的服务器，授权

### OpenClaw 配置

```yaml
# ~/.openclaw/config.yaml
channels:
  discord:
    enabled: true
    token: "YOUR_DISCORD_BOT_TOKEN"
    
    # 可选配�?    default_guild: "your-server-id"  # 默认服务�?    allowed_channels: []              # 限制特定频道
```

### 使用方法

- **私聊**: 直接给机器人发消�?- **群聊**: @提及机器�?`@YourBot 你好`
- **线程**: 支持 Discord 线程回复

---

## Slack 配置

### 创建 Slack 应用

1. 访问 [Slack API](https://api.slack.com/apps)
2. 点击 "Create New App" �?"From scratch"
3. 输入应用名称，选择工作�?4. �?"OAuth & Permissions" 页面添加权限�?   - `chat:write`
   - `im:history`
   - `im:read`
   - `users:read`
5. 安装应用到工作区，复�?**Bot User OAuth Token**

### OpenClaw 配置

```yaml
# ~/.openclaw/config.yaml
channels:
  slack:
    enabled: true
    token: "xoxb-your-bot-token"
    
    # 可选配�?    default_channel: "#general"
    allowed_users: []
```

### 使用方法

- **私聊**: �?Slack 中直接给应用发消�?- **频道**: @提及应用 `@OpenClaw 总结一下`
- **快捷命令**: 可配�?Slash Commands

---

## 飞书配置

### 创建飞书应用

1. 访问 [飞书开放平台](https://open.feishu.cn/app)
2. 点击 "创建企业自建应用"
3. 填写应用信息，创建应�?4. �?"权限管理" 中添加：
   - `im:chat:readonly`
   - `im:message:send_as_bot`
   - `im:message.group_msg`
5. 发布版本，获�?**App ID** �?**App Secret**

### 配置事件订阅

1. �?"事件订阅" 中启�?2. 配置请求 URL（需要公网可访问的服务器�?3. 订阅事件：`im.message.receive_v1`

### OpenClaw 配置

```yaml
# ~/.openclaw/config.yaml
channels:
  feishu:
    enabled: true
    app_id: "cli_xxxxxxxxxxxxxxxx"
    app_secret: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    
    # 加密密钥（如果在飞书启用了加密）
    encrypt_key: ""
    verification_token: ""
```

### 使用方法

- **私聊**: 在飞书中搜索应用，开始对�?- **群聊**: 将应用添加到群组，@应用发送消�?
---

## Email 配置

### SMTP 配置

```yaml
# ~/.openclaw/config.yaml
channels:
  email:
    enabled: true
    smtp:
      host: "smtp.gmail.com"
      port: 587
      username: "your-email@gmail.com"
      password: "your-app-password"
      secure: false  # true for port 465
      
    # 发件设置
    from: "OpenClaw your-email@gmail.com"
    to: "user@example.com"  # 默认收件�?```

### 使用场景

- **日报/周报**: 定时发送总结邮件
- **通知提醒**: 重要事件邮件通知
- **备份存档**: 自动发送记�?
### 发送邮件示�?
```bash
# 发送测试邮�?openclaw email send "测试邮件" --content "这是一封测试邮�?

# AI 自动发�?# 在对话中说："把这份总结发到我的邮箱"
```

---

## Webhook 配置

### 基础配置

```yaml
# ~/.openclaw/config.yaml
channels:
  webhook:
    enabled: true
    port: 3000
    path: "/webhook"
    secret: "your-webhook-secret"  # 用于验证请求
```

### 自定义集成示�?
可以集成任意支持 HTTP 的系统：

```javascript
// 发送消息到 OpenClaw
fetch('http://localhost:3000/webhook', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Webhook-Secret': 'your-webhook-secret'
  },
  body: JSON.stringify({
    message: '来自其他系统的消�?,
    user: 'system',
    channel: 'webhook'
  })
});
```

### 使用场景

- **内部系统集成**: 与公司的 ERP、CRM 集成
- **自动化工作流**: �?Zapier、Make 等工具集�?- **自定义客户端**: 开发自己的 UI 界面

---

## 渠道对比与选择

| 渠道 | 配置难度 | 适合场景 | 特色功能 |
|------|----------|----------|----------|
| Telegram | ⭐⭐ | 个人使用 | 简单、稳�?|
| Discord | ⭐⭐�?| 社区/团队 | 富文本、线�?|
| Slack | ⭐⭐�?| 企业办公 | 工作流集�?|
| 飞书 | ⭐⭐�?| 国内企业 | 国内优化 |
| Email | ⭐⭐ | 正式通知 | 异步、存�?|
| Webhook | ⭐⭐�?| 自定�?| 完全灵活 |

## 多渠道并�?
可以同时启用多个渠道�?
```yaml
channels:
  telegram:
    enabled: true
    token: "..."
    
  discord:
    enabled: true
    token: "..."
    
  slack:
    enabled: false  # 暂时禁用
    token: "..."
```

AI 会根据消息来源的渠道自动识别上下文�?
---

## 下一�?
渠道配置完成后，设置模型和技能：
👉 [11. 配置 LLM 模型](11_setup_llm.md)

---

**相关链接**:
- [上一�? 配置 Telegram 机器人](09_setup_telegram.md)
- [下一�? 配置 LLM 模型](11_setup_llm.md)