---
sidebar_position: 9
---

# 实验数据集

> 做AI实验必备，这些数据集帮你快速上手实践

---

## 🎯 为什么需要数据集？

**数据集 = AI的"教材"**
- ✅ **训练模型**：让AI从数据中学习
- ✅ **测试效果**：评估模型好坏
- ✅ **学习实践**：通过真实数据理解算法

---

## 📊 经典入门数据集

### 图像分类

| 数据集 | 大小 | 类别 | 特点 |
|--------|------|------|------|
| **MNIST** | 70K | 10 | 手写数字，入门必做 |
| **Fashion-MNIST** | 70K | 10 | 服装分类，MNIST升级版 |
| **CIFAR-10** | 60K | 10 | 彩色小图，进阶练习 |
| **CIFAR-100** | 60K | 100 | 100类，更难 |

**MNIST示例：**
```python
from tensorflow.keras.datasets import mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()
# 直接下载，立即使用
```

---

### 文本分类

| 数据集 | 大小 | 任务 | 特点 |
|--------|------|------|------|
| **IMDB** | 50K | 情感分析 | 电影评论，二分类 |
| **20 Newsgroups** | 20K | 主题分类 | 新闻组，20类 |
| **AG News** | 120K | 新闻分类 | 4类新闻 |
| **SST** | 11K | 情感分析 | 细粒度情感 |

---

### 结构化数据

| 数据集 | 任务 | 特点 |
|--------|------|------|
| **Titanic** | 生存预测 | Kaggle入门赛 |
| **Iris** | 花分类 | 经典3分类 |
| **Boston Housing** | 房价预测 | 回归问题 |
| **California Housing** | 房价预测 | 更大规模 |

---

## 🏆 竞赛级数据集

### 计算机视觉

| 数据集 | 规模 | 任务 | 来源 |
|--------|------|------|------|
| **ImageNet** | 1400万 | 图像分类 | 斯坦福 |
| **COCO** | 33万 | 检测/分割 | 微软 |
| **Open Images** | 900万 | 分类/检测 | Google |
| **Pascal VOC** | 2万 | 检测 | 学术界 |

---

### 自然语言处理

| 数据集 | 规模 | 任务 |
|--------|------|------|
| **SQuAD** | 10万+ | 阅读理解 |
| **GLUE** | 多任务 | 语言理解 |
| **WikiText** | 1亿词 | 语言建模 |
| **WMT** | 多语言 | 机器翻译 |

---

### 语音

| 数据集 | 规模 | 任务 |
|--------|------|------|
| **LibriSpeech** | 1000h | 语音识别 |
| **Common Voice** | 数万h | 多语言识别 |
| **LJSpeech** | 24h | TTS |

---

## 🌐 数据集平台

### Kaggle Datasets

| 项目 | 内容 |
|------|------|
| **网址** | kaggle.com/datasets |
| **特点** | 社区贡献，Notebook配套 |
| **搜索** | 按任务、格式、大小筛选 |
| **下载** | API或网页 |

**使用：**
```bash
# 安装Kaggle API
pip install kaggle

# 下载数据集
kaggle datasets download -d username/dataset-name
```

---

### Hugging Face Datasets

| 项目 | 内容 |
|------|------|
| **网址** | huggingface.co/datasets |
| **特点** | NLP为主，加载方便 |
| **数量** | 数万数据集 |
| **加载** | 一行代码 |

**使用：**
```python
from datasets import load_dataset
dataset = load_dataset("imdb")
```

---

### UCI ML Repository

| 项目 | 内容 |
|------|------|
| **网址** | archive.ics.uci.edu/ml |
| **特点** | 老牌，经典数据集 |
| **适合** | 机器学习入门 |

---

### Google Dataset Search

| 项目 | 内容 |
|------|------|
| **网址** | datasetsearch.research.google.com |
| **特点** | 搜索引擎，覆盖全网 |
| **用法** | 像Google一样搜索 |

---

### 国内平台

| 平台 | 网址 | 特点 |
|------|------|------|
| **天池数据集** | tianchi.aliyun.com | 中文场景 |
| **百度AI Studio** | aistudio.baidu.com | 中文数据集 |
| **和鲸数据集** | heywhale.com | 社区贡献 |

---

## 💡 使用建议

### 选择数据集

| 阶段 | 推荐数据集 | 原因 |
|------|------------|------|
| 入门 | MNIST、Titanic | 简单，验证流程 |
| 进阶 | CIFAR-10、IMDB | 接近真实问题 |
| 实战 | COCO、ImageNet | 工业级规模 |

### 数据处理流程

```
1. 下载数据集
2. 探索性分析（EDA）
3. 数据清洗
4. 划分训练/验证/测试
5. 特征工程
6. 模型训练
7. 评估测试
```

---

## 📚 相关阅读

- [在线实验平台](./online-platforms.md)
- [AI竞赛平台](./ai-competitions.md)
- [机器学习课程](./ml-courses.md)
- [开源项目推荐](./open-source-projects.md)

---

💡 **小贴士**：数据集只是开始，理解数据、清洗数据、特征工程往往比调模型更重要。
