---
sidebar_position: 16
---

# 在线实验平台

> 无需配置环境，浏览器里就能跑AI代码

---

## 🎯 为什么用在线平台？

**优势：**
- ✅ **零配置**：不用装Python、CUDA
- ✅ **免费GPU**：云端算力，节省成本
- ✅ **随时随地**：有网就能跑代码
- ✅ **即开即用**：预装常用库
- ✅ **协作分享**：一键分享Notebook

---

## 🏆 主流平台对比

| 平台 | 免费GPU | 特点 | 适合 |
|------|---------|------|------|
| **Google Colab** | T4/V100 | 最流行，易用 | 入门首选 |
| **Kaggle Kernels** | T4/P100 | 竞赛社区 | Kaggle用户 |
| **百度AI Studio** | V100 | 中文好，免费长 | 国内用户 |
| **阿里云PAI-DSW** | 按需 | 企业级 | 企业开发 |
| **和鲸ModelWhale** | 赠送 | 中文社区 | 教育科研 |

---

## 🚀 Google Colab

### 特点

| 项目 | 内容 |
|------|------|
| **网址** | colab.research.google.com |
| **免费GPU** | Tesla T4，12小时限制 |
| **存储** | Google Drive集成 |
| **代码** | Jupyter Notebook |

### 快速开始

```python
# 检查GPU
!nvidia-smi

# 挂载Google Drive
from google.colab import drive
drive.mount('/content/drive')

# 安装库
!pip install transformers

# 开始训练
```

### 使用技巧

| 技巧 | 说明 |
|------|------|
| **切换GPU** | 运行时 → 更改运行时类型 |
| **防止断开** | 保持页面活跃 |
| **大文件** | 用Drive存储数据 |
| **保存** | 自动保存到Drive |

---

## 🐶 Kaggle Kernels

### 特点

| 项目 | 内容 |
|------|------|
| **网址** | kaggle.com/code |
| **免费GPU** | T4/P100，每周30小时 |
| **数据** | Kaggle数据集一键加载 |
| **社区** | 丰富的公开Notebook |

### 优势

- 数据集即点即用
- 学习Top方案代码
- 参与竞赛直接提交

---

## 🇨🇳 国内平台

### 百度AI Studio

| 项目 | 内容 |
|------|------|
| **网址** | aistudio.baidu.com |
| **免费GPU** | V100，每天8小时 |
| **项目** | 可以fork别人的项目 |
| **课程** | 配套飞桨课程 |

**特点：**
- 中文界面友好
- 飞桨框架优化
- 免费算力充足

---

### 阿里云PAI-DSW

| 项目 | 内容 |
|------|------|
| **网址** | pai.console.aliyun.com |
| **GPU** | 按量付费 |
| **功能** | 企业级，功能全 |
| **存储** | 阿里云OSS |

**适合：** 企业用户，生产环境

---

### 和鲸ModelWhale

| 项目 | 内容 |
|------|------|
| **网址** | modelwhale.com |
| **GPU** | 赠送算力 |
| **社区** | 中文DS社区 |
| **教育** | 高校合作多 |

---

## 💡 使用建议

### 平台选择

| 场景 | 推荐平台 |
|------|----------|
| 入门学习 | Google Colab |
| Kaggle竞赛 | Kaggle Kernels |
| 国内用户 | 百度AI Studio |
| 企业开发 | 阿里云PAI |

### 省钱技巧

1. **免费额度先用完**
   - Colab免费GPU
   - Kaggle每周30小时

2. **合理分配时间**
   - 调试代码用CPU
   - 训练再用GPU

3. **小数据先验证**
   - 用子集测试代码
   - 没问题再上全量

---

## 📚 相关阅读

- [实验数据集](./datasets.md)
- [AI竞赛平台](./ai-competitions.md)
- [机器学习课程](./ml-courses.md)
- [开源项目推荐](./open-source-projects.md)

---

💡 **小贴士**：在线平台是入门神器，但复杂项目建议还是本地配置环境，更灵活可控。
