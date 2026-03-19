# 14. 多 Agent 系统原理

**整理时间**: 2026-03-09  
**来源**: OpenClaw 官方指南  
**标签**: #OpenClaw #多Agent #AI团队 #协作 #子代理  
**重要性**: ⭐⭐⭐⭐⭐

---

## TL;DR
OpenClaw 支持创建多个 AI Agent，组成 AI 团队协同工作，每个 Agent 可以专注特定领域，通过主 Agent 协调完成任务。

## 什么是多 Agent 系统？

传统单一 AI 助手 vs 多 Agent 系统：

```
单一 AI 助手:
用户 → AI助手 → 回答
      （什么都做）

多 Agent 系统:
用户 → 主控Agent ─┬─→ 程序员Agent（写代码）
                  ├─→ 设计师Agent（出设计）
                  ├─→ 测试员Agent（测质量）
                  └─→ 产品经理Agent（定需求）
                        ↓
                     整合输出
```

## 核心概念

### Agent
一个独立的 AI 会话实例，有自己的：
- 角色定义（Role）
- 系统提示词（System Prompt）
- 技能配置（Skills）
- 记忆上下文（Memory）

### 主 Agent（Master/Coordinator）
- 接收用户请求
- 分析任务需求
- 调度其他 Agent
- 整合最终结果

### 子 Agent（Sub-agent）
- 专注特定领域
- 接受主 Agent 指派任务
- 独立完成后返回结果

## 工作流程

```
1. 用户请求
   "帮我开发一个待办事项 App"
   
2. 主 Agent 分析
   - 需要产品设计
   - 需要技术方案
   - 需要 UI 设计
   
3. 并行调度
   ├─→ 产品经理Agent → 需求文档
   ├─→ 技术架构Agent → 技术方案
   └─→ 设计师Agent → UI原型
   
4. 结果整合
   主 Agent 整合所有输出
   
5. 最终交付
   完整的产品方案
```

## 使用场景

### 场景 1: 软件开发

```
主控：智囊大师
├── @dev - 程序员（写代码）
├── @pm-mark - 产品经理（定需求）
├── @designer - 设计师（出设计）
├── @qa - 测试员（保质量）
└── @devops - 运维（部署）
```

### 场景 2: 内容创作

```
主控：主编
├── @researcher - 研究员（查资料）
├── @writer - 撰稿人（写文章）
├── @editor - 编辑（审内容）
└── @seo - SEO专家（优化）
```

### 场景 3: 学习辅导

```
主控：学习助手
├── @bella - 英语老师（口语练习）
├── @math-tutor - 数学老师（解题）
├── @ai-tony - AI导师（技术学习）
└── @coach - 学习教练（规划）
```

## 技术实现

### 创建子 Agent

```javascript
// 使用 sessions_spawn 创建子代理
const subAgent = await sessions_spawn({
  runtime: "subagent",
  task: "你是程序员Agent，专注代码实现...",
  mode: "run"  // 或 "session" 保持状态
});
```

### Agent 通信

```javascript
// 主 Agent 向子 Agent 发送任务
await sessions_send({
  sessionKey: subAgent.sessionKey,
  message: "请设计一个登录页面的 API 接口"
});

// 获取子 Agent 结果
const result = await subagents({
  action: "list",
  target: subAgent.sessionKey
});
```

### 并行执行

```javascript
// 同时调度多个 Agent
const tasks = [
  sessions_spawn({ runtime: "subagent", task: "设计 UI", mode: "run" }),
  sessions_spawn({ runtime: "subagent", task: "设计 API", mode: "run" }),
  sessions_spawn({ runtime: "subagent", task: "设计数据库", mode: "run" })
];

const results = await Promise.all(tasks);
```

## 配置文件

### TEAM-HUB.md - 团队档案

```markdown
# AI 团队系统

## 团队成员

### @bella - 语言老师
**角色**: 英语口语教师
**专长**: 日常对话、发音纠正、文化讲解
**使用场景**: 每日英语练习、口语话题

### @pm-mark - 产品经理
**角色**: 产品专家
**专长**: 需求分析、PRD撰写、用户研究
**使用场景**: 产品规划、功能设计

### @dev - 程序员
**角色**: 全栈开发
**专长**: 前端、后端、数据库
**使用场景**: 技术实现、代码审查

## 协作模式

### 单专家模式
用户直接召唤特定专家：
"@bella 今天练习什么口语话题？"

### 多专家协作模式
智囊大师拆解任务，调度多专家：
用户: "帮我开发一个 App"
智囊大师: "我来协调团队完成这个项目..."
```

## 最佳实践

### 1. 角色定义清晰

每个 Agent 应该有明确的：
- 角色名称
- 专业领域
- 能力边界
- 输出格式

### 2. 任务分解合理

主 Agent 应该：
- 将大任务拆分为小任务
- 明确每个子任务的要求
- 设定完成标准

### 3. 结果整合规范

整合多 Agent 输出时：
- 统一格式和风格
- 检查一致性
- 补充遗漏信息

### 4. 错误处理

```javascript
try {
  const result = await sessions_spawn({
    runtime: "subagent",
    task: "...",
    timeoutSeconds: 60  // 设置超时
  });
} catch (error) {
  // 子 Agent 失败处理
  console.log("子任务失败，尝试备用方案...");
}
```

## 简单示例

### 场景: 写一篇文章

```
用户: 帮我写一篇关于 AI 的科普文章

主控Agent: 好的，我来协调团队完成这篇文章。

[调度 researcher Agent]
研究员: 查找了最新的 AI 发展资料...

[调度 writer Agent]
撰稿人: 基于资料撰写了初稿...

[调度 editor Agent]
编辑: 审阅并优化了内容...

主控Agent: 文章已完成！包含...
- 标题: AI 正在改变我们的世界
- 结构: 引言、发展历史、当前应用、未来展望
- 字数: 1500字
```

## 局限性

- **Token 消耗**: 多 Agent 会增加 token 使用量
- **协调复杂度**: 任务越复杂，协调难度越大
- **上下文限制**: 子 Agent 间不共享上下文
- **响应时间**: 并行执行可能增加等待时间

---

## 下一步

学习如何配置团队成员：
👉 [15. 配置团队成员](15_team_setup.md)

---

**相关链接**:
- [上一章: 推荐技能清单](13_recommended_skills.md)
- [下一章: 配置团队成员](15_team_setup.md)