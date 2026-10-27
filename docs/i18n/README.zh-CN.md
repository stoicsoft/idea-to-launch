# Idea to Launch

**不用学编程，也能把你的想法变成真正能用的软件。**

Idea to Launch 是一套免费的技能，装进你已经在用的 AI 助手里就能用：Claude、Codex、Cursor、Gemini、GitHub Copilot，还有[另外 15 款工具](../install.md#every-supported-tool)。用你自己的话、你自己的语言说出想法就行。助手会先问你几个关键问题，写一页计划请你确认，然后动手做出来，像真正的顾客一样检查一遍，再帮你把它放到网上。

**语言：** [English](../../README.md) · **简体中文** · [繁體中文](README.zh-TW.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Tiếng Việt](README.vi.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [Italiano](README.it.md) · [ไทย](README.th.md) · [Polski](README.pl.md) · [Nederlands](README.nl.md) · [Українська](README.uk.md)

英文版 [README](../../README.md) 是原文，内容可能比这份翻译更新。

## 用起来是什么感觉

> **你：** 我开了一家小美甲店。老顾客都是发消息找我预约，我经常记乱。能帮我做个东西解决这个问题吗？
>
> **助手：** 可以。先快速问你几个问题，这样我们才能做对。**1. 谁预约得最多？** a) 已经认识你的老顾客（推荐） · b) 在网上找到你的新顾客 · …

几轮对话之后，你会得到：
- **一页纸的想法简介**，用的是你自己的话：“一个预约页面，让 Mai 的老顾客不用发消息，就能自己挑一个空闲时间”；
- **一份由你确认的计划**，确认之前什么都不会动手做；
- **一个你亲自挑的外观**，从三个方案里选；
- **一个能打开试用的应用**，里面有像模像样的示例内容，用的是你顾客的语言；
- **一份实话实说的检查结果**，分别从资深工程师和第一次用手机打开的新顾客的角度来看；
- **一步一步带你上线**，用你自己的网址；没有你明确说“可以”，任何东西都不会上线、不会花钱，也不会碰到真实的顾客。

## 安装

把一行命令复制到电脑的终端里就行。它会找到你电脑上的 AI 工具（Claude Code、Codex、Cursor、Gemini CLI、Copilot，还有[另外 15 款](../install.md#every-supported-tool)），把技能装进每一个工具里。它只会复制一些文本文件，不需要管理员权限，你随时都可以卸载。

**在 Mac 上**（或 Linux）：按 ⌘ Space，输入 `Terminal`，按 Enter 键，打开 **Terminal**（终端）。把下面这一行粘贴进去，再按 Enter 键：

```sh
curl -fsSL https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.sh | bash
```

**在 Windows 上：** 按 Windows 键，输入 `PowerShell`，按 Enter 键，打开 **PowerShell**。把下面这一行粘贴进去，再按 Enter 键：

```powershell
irm https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.ps1 | iex
```

然后**重启你的 AI 工具**（或者开一个新对话），对它说：

> 我想给我的生意做一个应用，你能帮我吗？

如果你已经在用 Node.js，用 `npx github:stoicsoft/idea-to-launch` 也能做到同样的事。

### 其他安装方式

| 你的工具 | 怎么安装 |
|---|---|
| **Claude Code**，作为插件 | `/plugin marketplace add stoicsoft/idea-to-launch`，然后 `/plugin install idea-to-launch@idea-to-launch` |
| **Codex**（App 或命令行版），作为插件 | `codex plugin marketplace add stoicsoft/idea-to-launch`，然后 `codex plugin add idea-to-launch@idea-to-launch` |
| **Gemini CLI**，作为扩展 | `gemini extensions install https://github.com/stoicsoft/idea-to-launch` |
| **Claude Desktop**（聊天）或 claude.ai | 上面那条命令装不到这两个地方。从 [Releases](https://github.com/stoicsoft/idea-to-launch/releases)（发布页）下载 zip 压缩包，然后每个都在 **Settings → Capabilities → Skills → Upload skill**（设置 → 功能 → 技能 → 上传技能）里上传一次（[详细说明](../install.md#claude-desktop-and-claudeai)） |
| **ChatGPT 或其他任何聊天助手** | 把 [`idea-to-launch-prompt.md`](../install.md#chatgpt-and-other-chat-assistants) 上传到一个项目或自定义 GPT 里 |

完整指南都在 [docs/install.md](../install.md)，包括每个工具的安装方法、怎么选择把技能装到哪些工具里，以及怎么更新或卸载。

## 步骤

你不用记住这些名字。直接说你想要什么，助手会自己选对步骤。如果你愿意，也可以直接叫某个步骤，比如在 Claude Code 或 Cursor 里输入 `/app-idea`。

| 步骤 | 会发生什么 | 你可以这样说 |
|---|---|---|
| **app-builder** | 从这里开始。弄清楚你需要什么，并从你上次停下的地方接着做 | “帮我做一个应用” · “我们继续吧” |
| **app-idea** | 简单聊一聊：这是给谁用的，最小但有用的版本是什么样，最后存成一页简介 | “我有个想法……” |
| **app-plan** | 每个人能做哪些事、一页功能说明，以及一份由你确认的计划 | “计划是什么？” |
| **app-design** | 给你三种外观挑选，然后定下一套统一的风格 | “它应该长什么样？” |
| **app-build** | 一步一步做出来，按你能逐步看到效果的顺序来 | “开始做吧” · “加一个预约页面” |
| **app-change** | 一句话就能搞定的小改动，或者把“这不是我想要的”整理成一份修改清单 | “把按钮改成绿色” |
| **app-fix** | 找到问题的真正原因，只修那一处 | “我一……就出错” |
| **app-review** | 像工程师一样检查，也像第一次来的顾客一样试用 | “可以给顾客用了吗？” |
| **app-launch** | 安全地放到网上，每一步做了就撤不回的操作都会先问过你 | “把它放到网上” |

## 项目会帮你记住

所有重要的内容，都会以简单的页面保存在你项目里的 `product/` 文件夹中：简介、计划、外观、做过的决定、检查结果，还有下一步要做什么。关掉对话、下周再回来，或者从 Claude 换到 Codex，助手都能从你上次停下的地方继续。在只能聊天的应用里，它会把这些页面直接交给你自己保存。

## 你的语言

- 助手**用你的语言和你交流**：你用什么语言写，它就用什么语言回。
- 应用里用的是**你顾客的语言**，可以和你的不一样，也可以同时支持好几种语言。
- 代码保持英文，以后任何程序员都能接手。

已经在 20 种语言里测试过：English、简体中文、繁體中文、Español、हिन्दी、العربية、Português、Français、Русский、日本語、Deutsch、Bahasa Indonesia、Tiếng Việt、한국어、Türkçe、Italiano、ไทย、Polski、Nederlands 和 Українська。其他语言通常也没问题。

## 说到做到

- **用大白话。** 不说行话。技术词只在第一次用到时解释一次。
- **重要的事由你决定。** 任何难以撤回的事（删除数据、谁能看到什么、付款、给顾客发邮件、上线）都一定会等你明确回答。小的、能撤回的事会替你决定，免得你被一大堆问题淹没。
- **结果说实话。** 只有真正试过之后，它才会说某样东西能用；没能检查到的地方，它也会告诉你。
- **保护好你顾客的数据。** 默认不公开；改动永远不会删掉已经保存的信息；密码、密钥这类机密不会写进代码里。
- **完全属于你。** 标准、好读的代码，加上纯文本笔记。不把你绑在任何平台上，不用注册账号，也不追踪你。

## 先了解一下

- 要做出真正的应用，需要一个能处理你电脑上文件的工具：Claude Code（或者 Claude Desktop 里的 Code 标签页）、Codex、Cursor、Gemini CLI、Copilot 等等。只能聊天的应用可以帮你做规划，再做一个能点着试用的样品（原型）。
- 你的 AI 工具原本的套餐和用量限制照常适用。正式上线后，服务器托管和域名通常每月要花几美元。任何要花钱的事，助手都会提前告诉你。
- 它是一个细心的助手，但不是律师，也不是会计师。涉及付款、健康数据或其他受法规约束的事情时，它会告诉你什么时候该找专业人士。

## 了解更多

- [在各种工具上安装](../install.md)
- [它是怎么运作的](../how-it-works.md)
- [常见问题](../faq.md)
- [参与贡献](../../CONTRIBUTING.md)：改进技能、加入新工具，或者帮忙翻译

## 许可证

[MIT](../../LICENSE)。可以免费使用、修改和分享。
