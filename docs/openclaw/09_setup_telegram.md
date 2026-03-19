---
sidebar_position: 09
---

# 09. 配置 Telegram 机器�?
**整理时间**: 2026-03-09  
**来源**: OpenClaw 官方指南  
**标签**: #OpenClaw #Telegram #机器�?#BotFather #配置  
**重要�?*: ⭐⭐⭐⭐�?
---

## TL;DR
通过 BotFather 创建 Telegram 机器人，获取 Token，配置到 OpenClaw 即可使用�?
## 创建机器�?
### 步骤 1: 打开 BotFather

1. �?Telegram 中搜�?`@BotFather`
2. 点击 "Start" 或发�?`/start`
3. 你会看到机器人创建菜�?
### 步骤 2: 创建新机器人

发送命令：
```
/newbot
```

BotFather 会提示：
```
Alright, a new bot. How are we going to call it? Please choose a name for your bot.
```

### 步骤 3: 设置机器人名�?
输入机器人的**显示名称**（用户看到的名字）：
```
My OpenClaw Assistant
```

然后 BotFather 会提示：
```
Good. Now let's choose a username for your bot. It must end in `bot`.
```

### 步骤 4: 设置用户�?
输入机器人的**用户�?*（必须以 bot 结尾，用�?@提及）：
```
myopenclaw_bot
```

如果用户名可用，你会收到成功消息�?```
Done! Congratulations on your new bot. 
You will find it at t.me/myopenclaw_bot
Use this token to access the HTTP API:
123456789:ABCdefGHIjklMNOpqrsTUVwxyz
```

**⚠️ 重要**: 保存�?Token（`123456789:ABCdefGHIjklMNOpqrsTUVwxyz`），这是连接机器人的密钥�?
## 配置 OpenClaw

### 步骤 1: 编辑配置文件

```bash
# 打开配置文件
openclaw config edit

# 或手动编�?vim ~/.openclaw/config.yaml
```

### 步骤 2: 添加 Telegram 配置

```yaml
# ~/.openclaw/config.yaml
channels:
  telegram:
    enabled: true
    token: "123456789:ABCdefGHIjklMNOpqrsTUVwxyz"  # 你的 Bot Token
    
    # 可选配�?    parse_mode: "Markdown"  # �?"HTML"
    allowed_users: []       # 限制特定用户访问（留空表示允许所有）
```

### 步骤 3: 测试连接

```bash
# 测试 Telegram 连接
openclaw channels test telegram

# 预期输出: �?Telegram connection successful
```

### 步骤 4: 启动服务

```bash
# 启动 OpenClaw（包�?Telegram 监听�?openclaw start

# 或在后台运行
openclaw start --daemon
```

## 使用机器�?
### 基础对话

1. �?Telegram 中搜索你的机器人（如 `@myopenclaw_bot`�?2. 点击 "Start"
3. 发送消息即可与 AI 对话

### 支持的命�?
```
/start - 开始对�?/help - 显示帮助
/status - 查看系统状�?/reset - 重置当前会话
```

### 支持的格�?
Telegram 支持丰富的消息格式：

```markdown
**粗体文字**
*斜体文字*
`代码片段`
```代码块```
[链接文本](https://example.com)
```

## 高级配置

### 限制访问用户

只允许特定用户使用：

```yaml
channels:
  telegram:
    enabled: true
    token: "YOUR_TOKEN"
    allowed_users:
      - "12345678"      # 用户 ID
      - "87654321"
```

获取用户 ID�?- 发送消息给 @userinfobot
- 或查�?OpenClaw 日志

### 配置 Webhook（生产环境）

对于生产环境，建议使�?Webhook 而非轮询�?
```yaml
channels:
  telegram:
    enabled: true
    token: "YOUR_TOKEN"
    webhook:
      enabled: true
      url: "https://your-domain.com/webhook/telegram"
      port: 8443
```

设置 Webhook�?```bash
# 设置 webhook URL
curl -F "url=https://your-domain.com/webhook/telegram" \
  https://api.telegram.org/bot YOUR_TOKEN /setWebhook

# 删除 webhook（切换回轮询�?curl https://api.telegram.org/bot YOUR_TOKEN /deleteWebhook
```

### 配置代理（国内用户）

```yaml
channels:
  telegram:
    enabled: true
    token: "YOUR_TOKEN"
    proxy:
      enabled: true
      host: "127.0.0.1"
      port: 7890  # 你的代理端口
```

## 机器人设置优�?
### 通过 BotFather 设置

发送命令给 @BotFather�?
```
/setdescription - 设置机器人描�?/setabouttext - 设置关于文本
/setuserpic - 设置头像
/setcommands - 设置命令列表
```

### 推荐的命令列�?
```
start - 开始对�?help - 显示帮助
status - 系统状�?reset - 重置会话
memory - 查看记忆
```

设置命令�?```
/setcommands
```
然后发送：
```
start - 开始对�?help - 显示帮助
status - 系统状�?reset - 重置会话
memory - 查看记忆
```

## 故障排除

### 问题 1: 无法连接

```bash
# 检查网�?curl https://api.telegram.org/bot YOUR_TOKEN /getMe

# 如果超时，可能需要配置代�?```

### 问题 2: 消息发送失�?
```bash
# 查看日志
openclaw logs --channel telegram

# 检�?token 是否正确
openclaw config get channels.telegram.token
```

### 问题 3: 机器人无响应

```bash
# 重启服务
openclaw restart

# 检查进�?ps aux | grep openclaw
```

## 安全建议

1. **保护 Token**: 不要�?Token 提交到公共仓�?2. **使用环境变量**: 
   ```bash
   export TELEGRAM_BOT_TOKEN="your-token"
   ```
3. **限制用户**: 生产环境配置 allowed_users
4. **使用 Webhook**: 比轮询更安全高效

---

## 下一�?
Telegram 配置完成后，可以配置其他渠道�?👉 [10. 配置其他渠道](10_setup_other_channels.md)

或者继续配置模型和技能：
👉 [11. 配置 LLM 模型](11_setup_llm.md)

---

**相关链接**:
- [上一�? 支持的渠道](08_channels_overview.md)
- [下一�? 配置其他渠道](10_setup_other_channels.md)
- [Telegram Bot API 文档](https://core.telegram.org/bots/api)