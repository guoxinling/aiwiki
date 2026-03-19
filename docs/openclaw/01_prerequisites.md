---
sidebar_position: 1
---

# 01. 前置条件

**整理时间**: 2026-03-09  
**来源**: OpenClaw 官方指南  
**标签**: #OpenClaw #安装 #macOS #配置  
**重要性**: ⭐⭐⭐⭐⭐

---

## TL;DR
在安装 OpenClaw 之前，需要准备 macOS 系统环境、Homebrew 包管理器、以及必要的开发工具。

## 系统要求

### 硬件要求
- **操作系统**: macOS 11.0 (Big Sur) 或更高版本
- **内存**: 至少 4GB RAM（推荐 8GB+）
- **存储**: 至少 2GB 可用空间
- **网络**: 稳定的互联网连接

### 软件依赖

#### 1. Homebrew（包管理器）
如果尚未安装 Homebrew，请先安装：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### 2. Node.js
OpenClaw 基于 Node.js 运行，需要 v18.0 或更高版本：

```bash
# 使用 Homebrew 安装
brew install node

# 验证版本
node --version  # 应显示 v18.x 或更高
```

#### 3. Git
用于克隆仓库和管理更新：

```bash
brew install git
git --version
```

#### 4. Python（可选）
部分技能可能需要 Python 环境：

```bash
brew install python
python3 --version
```

## API 密钥准备

在使用 OpenClaw 之前，建议提前准备以下 API 密钥：

| 服务商 | 用途 | 获取地址 |
|--------|------|----------|
| OpenAI | GPT 模型 | https://platform.openai.com |
| Anthropic | Claude 模型 | https://console.anthropic.com |
| DeepSeek | 国产模型 | https://platform.deepseek.com |
| Moonshot | Kimi 模型 | https://platform.moonshot.cn |

> 💡 **提示**: 可以先安装 OpenClaw，后续再配置 API 密钥

## 网络环境

### 国内用户特别注意
由于网络环境差异，建议配置：

1. **npm 镜像源**（加速包下载）
```bash
npm config set registry https://registry.npmmirror.com
```

2. **Git 代理**（如需）
```bash
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```

## 检查清单

安装前请确认：

- [ ] macOS 版本 ≥ 11.0
- [ ] Homebrew 已安装并可运行
- [ ] Node.js 版本 ≥ 18.0
- [ ] 至少有 2GB 可用存储空间
- [ ] 网络连接正常
- [ ] （可选）API 密钥已准备

---

## 下一步

完成前置条件准备后，继续阅读：
👉 [02. 安装 OpenClaw 核心程序](./02_install_core)

---

**相关链接**:
- [OpenClaw GitHub](https://github.com/openclaw/openclaw)
- [官方文档](https://docs.openclaw.ai)
- [下一章: 安装核心程序](./02_install_core)