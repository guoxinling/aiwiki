---
sidebar_position: 10
---

# API调用基础

> 零门槛接入AI能力，让程序具备智能

---

## 🔌 什么是API？

**API（应用程序接口）** 就像是**餐厅的服务员**：

- 你（用户）想点菜（使用功能）
- 不需要进厨房（了解内部实现）
- 只需要告诉服务员（调用API）
- 服务员把菜端上来（返回结果）

在AI领域，API让你**不用懂AI技术**，就能使用ChatGPT、文心一言等大模型的能力。

---

## 💡 为什么要用API？

### 直接使用的局限

| 方式 | 局限 |
|------|------|
| 网页版ChatGPT | 需要手动操作，无法批量处理 |
| 手机APP | 功能固定，无法定制 |
| 网页嵌入 | 受平台限制，数据在别人手里 |

### API的优势

- ✅ **自动化**：程序自动调用，处理大量任务
- ✅ **定制化**：按自己的需求封装功能
- ✅ **数据自主**：数据存在自己这里
- ✅ **集成方便**：嵌入现有系统和流程

---

## 🛠️ API基础概念

### 核心要素

调用API就像寄快递，需要知道：

| 要素 | 说明 | 类比 |
|------|------|------|
| **Endpoint** | API地址 | 收件地址 |
| **Method** | 请求方式（GET/POST） | 快递类型 |
| **Headers** | 请求头信息 | 寄件人信息 |
| **Body** | 请求内容 | 包裹内容 |
| **API Key** | 身份认证 | 身份证 |

### 常见请求方式

| 方法 | 用途 | 示例 |
|------|------|------|
| **GET** | 获取数据 | 查询天气 |
| **POST** | 提交数据 | 发送消息给AI |
| **PUT** | 更新数据 | 修改配置 |
| **DELETE** | 删除数据 | 删除记录 |

AI API主要用 **POST** 方法，因为要发送问题给AI。

---

## 📝 AI API调用示例

### 示例1：最简单的调用（curl命令）

```bash
# 调用OpenAI API
 curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 你的API Key" \
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "你好"}]
  }'
```

**返回结果**：
```json
{
  "choices": [{
    "message": {
      "content": "你好！有什么我可以帮助你的吗？"
    }
  }]
}
```

### 示例2：Python代码调用

```python
import requests

# 1. 准备参数
api_key = "你的API Key"
url = "https://api.openai.com/v1/chat/completions"

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

data = {
    "model": "gpt-3.5-turbo",
    "messages": [
        {"role": "user", "content": "请用一句话介绍AI"}
    ]
}

# 2. 发送请求
response = requests.post(url, headers=headers, json=data)

# 3. 获取结果
result = response.json()
print(result['choices'][0]['message']['content'])
```

### 示例3：JavaScript调用

```javascript
// 调用AI API
async function askAI(question) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer 你的API Key',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{role: 'user', content: question}]
    })
  });
  
  const data = await response.json();
  return data.choices[0].message.content;
}

// 使用
askAI("今天天气怎么样？").then(answer => console.log(answer));
```

---

## 🌐 常见AI API服务

### 国外服务

| 服务 | 特点 | 官网 |
|------|------|------|
| **OpenAI** | GPT-4最强，文档完善 | platform.openai.com |
| **Anthropic** | Claude系列，擅长长文本 | anthropic.com |
| **Google** | Gemini，多模态能力强 | ai.google.dev |

### 国内服务

| 服务 | 特点 | 官网 |
|------|------|------|
| **Kimi** | 长文本处理，中文友好 | platform.moonshot.cn |
| **文心一言** | 百度出品，生态丰富 | yiyan.baidu.com |
| **智谱清言** | GLM模型，学术背景 | open.bigmodel.cn |
| **通义千问** | 阿里云，企业友好 | tongyi.aliyun.com |

---

## 💰 费用说明

### 计费方式

AI API通常按 **Token** 计费：

- **Token** ≈ 单词/汉字片段
- 1个汉字 ≈ 1-2个Token
- 1个英文单词 ≈ 1个Token

**示例费用**（仅供参考）：

| 模型 | 输入价格 | 输出价格 |
|------|----------|----------|
| GPT-3.5 | $0.0015/1K tokens | $0.002/1K tokens |
| GPT-4 | $0.03/1K tokens | $0.06/1K tokens |
| 文心一言 | 约¥0.012/千字符 | - |

**简单估算**：
- 一篇500字的文章 ≈ 1000 tokens
- GPT-3.5处理 ≈ 0.002美元 ≈ 0.015元人民币

### 省钱技巧

1. **使用便宜模型处理简单任务**
   - 简单问答用 GPT-3.5
   - 复杂推理再用 GPT-4

2. **压缩提示词**
   - 删除不必要的背景信息
   - 精简示例

3. **设置用量上限**
   - 大部分平台支持设置月度限额
   - 防止意外高额账单

---

## ⚠️ 注意事项

### 1. API Key安全

**❌ 不要这样做**：
- 把API Key写在公开代码里
- 把API Key分享给他人
- 在客户端代码（JS）中暴露API Key

**✅ 正确做法**：
- 存储在环境变量/配置文件
- 通过后端服务器调用API
- 定期轮换API Key

### 2. 错误处理

API调用可能失败，需要处理：

```python
try:
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()  # 检查HTTP错误
    result = response.json()
except requests.exceptions.RequestException as e:
    print(f"请求失败: {e}")
    # 使用备用方案或提示用户
```

常见错误：
- **401**：API Key错误
- **429**：请求太频繁，被限流
- **500**：服务器错误
- **超时**：网络问题或服务器响应慢

### 3. 接口限制

| 限制类型 | 说明 |
|----------|------|
| **频率限制** | 每分钟/每小时最多请求次数 |
| **并发限制** | 同时进行的请求数量 |
| **Token限制** | 单次请求最大token数 |

---

## 🚀 快速上手步骤

1. **注册账号**
   - 选择一家AI服务商（推荐Kimi/文心一言，国内访问稳定）
   - 完成实名认证

2. **获取API Key**
   - 在控制台创建API Key
   - 复制保存（通常只显示一次）

3. **测试调用**
   - 用上面的示例代码测试
   - 确认能正常返回结果

4. **集成到项目**
   - 封装成函数/类
   - 添加错误处理
   - 配置日志记录

---

## 📚 进阶学习

| 主题 | 学习内容 |
|------|----------|
| **流式响应** | 让AI回答逐字显示，提升体验 |
| **函数调用** | 让AI能调用你的自定义功能 |
| **对话历史** | 保持多轮对话的上下文 |
| **Embedding** | 文本向量化，用于语义搜索 |

---

💡 **提示**：刚开始建议先用国内服务（Kimi/文心一言），网络稳定，中文支持好，文档也是中文的，便宜好用。

**相关阅读**：
- [AI应用开发路线](./ai-app-roadmap.md)
- [用AI分析数据](./ai-data-analysis.md)
- [提示词基础](./prompt-basics.md)
