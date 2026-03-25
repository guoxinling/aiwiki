---
sidebar_position: 15
---

# 模型微调入门

> 定制专属AI，让模型更懂你的业务场景

---

## 🎯 什么是模型微调？

**微调（Fine-tuning）** 是指在预训练好的大模型基础上，用你自己的数据继续训练，让模型适应特定任务或领域。

### 通俗理解

想象AI是一个大学毕业生：
- **预训练**：上大学学通用知识（GPT-4、Claude等基础模型）
- **微调**：入职后的岗前培训（用领域数据专门训练）

**微调后**：
- ✅ 更懂行业术语和业务逻辑
- ✅ 输出格式更符合要求
- ✅ 响应质量显著提升

---

## 🤔 什么时候需要微调？

| 场景 | 解决方案 | 是否需要微调 |
|------|----------|--------------|
| **通用问答** | 直接使用GPT-4/Claude | ❌ 不需要 |
| **企业内部知识** | RAG + 向量数据库 | ❌ 通常不需要 |
| **特定格式输出** | 提示词工程 | ❌ 先尝试提示词 |
| **专业领域术语** | 领域数据微调 | ✅ 需要 |
| **特定风格写作** | 样本数据微调 | ✅ 需要 |
| **成本优化** | 大模型→小模型微调 | ✅ 需要 |

### 典型微调场景

1. **医疗AI**：理解医学术语，辅助诊断
2. **法律AI**：熟悉法条，辅助合同审查
3. **金融AI**：理解财报，辅助投资分析
4. **客服AI**：学习企业话术，统一回复风格
5. **写作AI**：模仿特定作者风格

---

## 📚 微调方法

### 方法1：全量微调（Full Fine-tuning）

**做法**：更新模型的所有参数

**优点**：
- 效果通常最好
- 模型能力彻底改变

**缺点**：
- 需要大量显存（GPU内存）
- 训练时间长
- 成本高

**适用**：有充足资源的企业级项目

### 方法2：参数高效微调（PEFT）⭐ 推荐

**做法**：只更新少量参数，冻结大部分模型权重

**常用技术**：

| 技术 | 原理 | 特点 |
|------|------|------|
| **LoRA** | 低秩适配 | 最流行，效果接近全量微调 |
| **QLoRA** | 量化+LoRA | 显存占用极低，消费级GPU可跑 |
| **Prefix Tuning** | 前缀调优 | 添加可训练前缀 |
| **Prompt Tuning** | 提示调优 | 训练软提示词 |
| **Adapter** | 适配器 | 添加小网络模块 |

**LoRA原理简述**：
```
原始模型：W（冻结，不更新）
新增参数：ΔW = A × B（低秩分解，只训练A和B）
输出：W' = W + ΔW
```

**优点**：
- 显存需求降低90%+
- 训练速度快
- 可保存多个适配器切换使用

### 方法3：提示词工程（最轻量）

**做法**：不写代码，通过精心设计提示词引导模型

**适用**：快速验证想法，数据量小

---

## 📝 数据准备

### 数据格式

**对话格式（推荐）**：
```json
{
  "messages": [
    {"role": "system", "content": "你是一位非常专业的医疗助手"},
    {"role": "user", "content": "患者症状：发烧38度，咳嗽..."},
    {"role": "assistant", "content": "根据症状，可能是...建议..."}
  ]
}
```

**指令格式**：
```json
{
  "instruction": "将以下内容翻译成英文",
  "input": "人工智能正在改变我们的生活",
  "output": "AI is changing our lives"
}
```

### 数据质量要求

| 要求 | 说明 |
|------|------|
| **数量** | 通常需要1000-10000条样本 |
| **质量** | 准确、无错误、格式统一 |
| **多样性** | 覆盖各种场景和边界情况 |
| **相关性** | 与目标任务高度相关 |

### 数据准备工具

- **GPT-4生成**：用GPT-4批量生成训练数据
- **人工标注**：高质量但成本高
- **半自动标注**：AI生成 + 人工校对

---

## 🛠️ 微调实践

### 示例：用LoRA微调（使用Hugging Face）

```python
# 1. 安装依赖
# pip install transformers peft datasets accelerate

from transformers import (
    AutoModelForCausalLM, 
    AutoTokenizer,
    TrainingArguments,
    Trainer
)
from peft import LoraConfig, get_peft_model, TaskType
from datasets import load_dataset

# 2. 加载预训练模型
model_name = "meta-llama/Llama-2-7b-hf"
model = AutoModelForCausalLM.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)

# 3. 配置LoRA
lora_config = LoraConfig(
    task_type=TaskType.CAUSAL_LM,
    r=16,  # 低秩维度
    lora_alpha=32,
    lora_dropout=0.1,
    target_modules=["q_proj", "v_proj"]  # 要微调的层
)

# 4. 应用LoRA
model = get_peft_model(model, lora_config)

# 5. 加载数据集
dataset = load_dataset("json", data_files="train_data.json")

# 6. 配置训练参数
training_args = TrainingArguments(
    output_dir="./results",
    num_train_epochs=3,
    per_device_train_batch_size=4,
    learning_rate=2e-4,
    logging_steps=10,
    save_steps=100
)

# 7. 训练
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=dataset["train"]
)
trainer.train()

# 8. 保存模型
model.save_pretrained("./my-finetuned-model")
```

### 使用微调后的模型

```python
# 加载微调后的模型
from peft import PeftModel

base_model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b-hf")
model = PeftModel.from_pretrained(base_model, "./my-finetuned-model")

# 推理
inputs = tokenizer("用户问题：", return_tensors="pt")
outputs = model.generate(**inputs, max_length=200)
print(tokenizer.decode(outputs[0]))
```

---

## 🔧 常用工具和平台

| 工具/平台 | 特点 | 适用场景 |
|-----------|------|----------|
| **Hugging Face** | 最全面的生态 | 研究、开源项目 |
| **OpenAI Fine-tuning API** | 简单、托管 | 快速微调、不想管理基础设施 |
| **Azure OpenAI** | 企业级服务 | 企业应用、合规要求 |
| **AutoTrain** | 无代码微调 | 非技术人员 |
| **LLaMA-Factory** | 一站式微调 | 中文社区、多种模型 |
| **Fireworks/Together** | 微调+推理托管 | 不想自己部署 |

### OpenAI微调API示例

```python
import openai

# 1. 上传训练数据
openai.File.create(
    file=open("training_data.jsonl", "rb"),
    purpose='fine-tune'
)

# 2. 创建微调任务
openai.FineTuningJob.create(
    training_file="file-xxx",
    model="gpt-3.5-turbo"
)

# 3. 使用微调后的模型
response = openai.ChatCompletion.create(
    model="ft:gpt-3.5-turbo:my-org:custom-model-id",  # 微调后的模型ID
    messages=[{"role": "user", "content": "你好"}]
)
```

---

## 💰 成本考虑

### 训练成本

| 模型规模 | 方法 | 预估成本 |
|----------|------|----------|
| 7B参数 | LoRA | 几十元（消费级GPU几小时） |
| 13B参数 | LoRA | 几百元 |
| 70B参数 | LoRA | 几千元 |
| 7B参数 | 全量微调 | 几百-几千元 |

### 推理成本

- **自托管**：GPU服务器费用
- **API调用**：按token计费，微调模型通常和基础模型同价

### 省钱技巧

1. **先用小模型验证**：用7B模型跑通流程，再上大模型
2. **QLoRA**：4bit量化，显存占用降低75%
3. **数据筛选**：高质量数据 > 大量低质量数据
4. **早停（Early Stopping）**：监控验证集，避免过拟合

---

## ⚠️ 常见问题

### 1. 过拟合（Overfitting）

**现象**：模型死记硬背训练数据，泛化能力差

**解决**：
- 增加数据量
- 使用正则化
- 早停
- 降低学习率

### 2. 灾难性遗忘

**现象**：学了新任务，忘记旧能力

**解决**：
- 混合通用数据和领域数据
- 使用更保守的学习率
- 冻结部分层

### 3. 训练不稳定

**解决**：
- 降低学习率
- 增加warmup步数
- 使用梯度裁剪

---

## 🚀 学习路径

1. **入门**：用OpenAI API或AutoTrain体验微调流程
2. **进阶**：用Hugging Face + LoRA微调开源模型
3. **高级**：深入理解PEFT原理，优化微调策略

---

💡 **提示**：微调是一项需要经验的技术。建议先从成熟的平台和工具开始，积累一定经验后再深入底层。

**相关阅读**：
- [RAG系统搭建](./rag-tutorial.md)
- [AI Agent开发](./agent-dev.md)
- [API调用基础](./api-basics.md)
