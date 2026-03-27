---
sidebar_position: 18
---

# 开发工具推荐

> 工欲善其事，必先利其器，这些工具让AI开发更高效

---

## 🎯 开发工具分类

| 类别 | 工具 | 用途 |
|------|------|------|
| **代码编辑** | VS Code, PyCharm | 写代码 |
| **Notebook** | Jupyter, Colab | 实验调试 |
| **版本控制** | Git, GitHub | 代码管理 |
| **环境管理** | Conda, Docker | 环境配置 |
| **实验管理** | MLflow, WandB | 实验追踪 |
| **模型部署** | Docker, Kubernetes | 服务化 |

---

## 💻 代码编辑器

### VS Code

| 项目 | 内容 |
|------|------|
| **特点** | 免费，插件丰富 |
| **AI插件** | Copilot, Codeium |
| **Python** | Python插件 |
| **Jupyter** | Jupyter插件 |

**推荐插件：**
- Python
- Jupyter
- GitLens
- Copilot

---

### PyCharm

| 项目 | 内容 |
|------|------|
| **特点** | Python专用，功能全 |
| **版本** | Community免费 |
| **优势** | 调试、重构强大 |

---

## 📓 Notebook环境

### Jupyter Lab

```bash
# 安装
pip install jupyterlab

# 启动
jupyter lab
```

**特点：**
- 交互式开发
- 可视化支持
- 文档一体化

---

### Jupyter Notebook

```bash
# 安装
pip install notebook

# 启动
jupyter notebook
```

---

## 🌲 版本控制

### Git

**基础命令：**
```bash
git init              # 初始化
git add .             # 添加文件
git commit -m "msg"   # 提交
git push              # 推送
git pull              # 拉取
```

### GitHub

**功能：**
- 代码托管
- 协作开发
- GitHub Actions（CI/CD）
- GitHub Codespaces（云端开发）

---

## 🐍 环境管理

### Conda

```bash
# 创建环境
conda create -n ai python=3.10

# 激活
conda activate ai

# 安装包
conda install pytorch

# 导出环境
conda env export > environment.yml
```

---

### Docker

```dockerfile
# Dockerfile示例
FROM pytorch/pytorch:latest

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . /app
WORKDIR /app

CMD ["python", "train.py"]
```

---

## 📊 实验管理

### Weights & Biases

```python
import wandb

wandb.init(project="my-project")
wandb.log({"accuracy": 0.9})
```

**功能：**
- 实验追踪
- 超参数记录
- 结果可视化

---

### MLflow

```python
import mlflow

mlflow.start_run()
mlflow.log_param("lr", 0.01)
mlflow.log_metric("acc", 0.9)
```

**特点：** 开源，可本地部署

---

## 🤖 AI专用工具

### 模型训练

| 工具 | 用途 |
|------|------|
| **PyTorch Lightning** | 简化训练代码 |
| **Hugging Face Transformers** | 预训练模型 |
| **TensorBoard** | 可视化训练 |

### 数据标注

| 工具 | 用途 |
|------|------|
| **Label Studio** | 多类型标注 |
| **CVAT** | CV标注 |
| **Doccano** | NLP标注 |

### 模型部署

| 工具 | 用途 |
|------|------|
| **FastAPI** | API服务 |
| **Streamlit** | Demo界面 |
| **Gradio** | 模型演示 |
| **Triton** | 高性能推理 |

---

## 💡 效率工具

| 工具 | 用途 |
|------|------|
| **ChatGPT/Copilot** | 代码辅助 |
| **tmux** | 终端复用 |
| **htop** | 系统监控 |
| **nvtop** | GPU监控 |

---

## 📚 相关阅读

- [在线实验平台](./online-platforms.md)
- [开源项目推荐](./open-source-projects.md)
- [机器学习课程](./ml-courses.md)

---

💡 **小贴士**：工具是手段不是目的，选择顺手的即可，不要陷入工具选择的纠结。
