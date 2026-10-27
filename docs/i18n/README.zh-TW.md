# Idea to Launch

**不用學寫程式，也能把你的點子變成真正能用的軟體。**

Idea to Launch 是一套免費的技能，裝進你已經在用的 AI 助理就能用：Claude、Codex、Cursor、Gemini、GitHub Copilot，還有[另外 15 款工具](../install.md#every-supported-tool)。用你自己的話、你自己的語言說出點子就好。助理會先問你幾個關鍵問題，寫一頁計畫請你確認，接著動手做出來，像真正的顧客一樣檢查一遍，再幫你把它放上網路。

**語言：** [English](../../README.md) · [简体中文](README.zh-CN.md) · **繁體中文** · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Tiếng Việt](README.vi.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [Italiano](README.it.md) · [ไทย](README.th.md) · [Polski](README.pl.md) · [Nederlands](README.nl.md) · [Українська](README.uk.md)

英文版 [README](../../README.md) 是原文，內容可能比這份翻譯更新。

## 用起來是什麼感覺

> **你：** 我開了一間小小的美甲店。熟客都是傳訊息跟我預約，我常常搞不清楚誰約了什麼時候。可以幫我做個東西處理這件事嗎？
>
> **助理：** 可以。先快速問你幾個問題，才能做出對的東西。**1. 誰最常預約？** a) 已經認識你的熟客（建議） · b) 在網路上找到你的新客人 · …

幾輪對話之後，你會得到：
- **一頁的點子簡介**，用的是你自己的話：「一個預約頁面，讓 Mai 的熟客不用傳訊息，就能自己挑空檔」；
- **一份由你確認的計畫**，確認之前什麼都不會開始做；
- **一個你親自挑的外觀**，從三個方案中選；
- **一個能打開來試用的 App**，裡面有像樣的範例內容，用的是你顧客的語言；
- **一份老實的檢查結果**，分別從資深工程師，以及第一次用手機打開的新客人的角度來看；
- **一步步帶你上線**，用你自己的網址；沒有你明確說「好」，任何東西都不會上線、不會花錢，也不會碰到真正的顧客。

## 安裝

選你在用的工具。每種方式裝的都是同一套技能。

| 你的工具 | 怎麼安裝 |
|---|---|
| **任何工具，一行指令搞定**（需要 [Node.js](https://nodejs.org)） | `npx github:stoicsoft/idea-to-launch` 會找出你的 AI 工具，一次全部裝好 |
| **Mac 或 Linux，沒有 Node.js** | `curl -fsSL https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.sh \| bash` |
| **Windows**（PowerShell） | `irm https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.ps1 \| iex` |
| **Claude Code** | `/plugin marketplace add stoicsoft/idea-to-launch`，接著 `/plugin install idea-to-launch@idea-to-launch` |
| **Claude Desktop**（聊天）或 claude.ai | 從 [Releases](https://github.com/stoicsoft/idea-to-launch/releases)（發布頁面）下載 zip 壓縮檔，然後每個都在 **Settings → Capabilities → Skills → Upload skill**（設定 → 功能 → 技能 → 上傳技能）上傳一次（[詳細說明](../install.md#claude-desktop-and-claudeai)） |
| **Codex**（App 或命令列版） | `codex plugin marketplace add stoicsoft/idea-to-launch`，接著 `codex plugin add idea-to-launch@idea-to-launch` |
| **Cursor、Gemini CLI、Copilot、Windsurf、OpenCode、Kiro…** | 用上面那一行指令安裝，或參考[所有工具](../install.md) |
| **ChatGPT 或其他聊天助理** | 把 [`idea-to-launch-prompt.md`](../install.md#chatgpt-and-other-chat-assistants) 上傳到專案或自訂 GPT |

接著**重新啟動你的 AI 工具**（或開一個新對話），然後說：

> 我想為我的生意做一個 App，可以幫我嗎？

完整的指南都在 [docs/install.md](../install.md)，包含每個工具的安裝方式，以及如何更新或移除。

## 步驟

你完全不需要記這些名字。直接說你想要什麼，助理就會挑對步驟。如果你想，也可以直接叫出某個步驟，例如在 Claude Code 或 Cursor 裡輸入 `/app-idea`。

| 步驟 | 會發生什麼事 | 你可以這樣說 |
|---|---|---|
| **app-builder** | 從這裡開始。釐清你需要什麼，並從你上次停下的地方接著做 | 「幫我做一個 App」 · 「我們繼續吧」 |
| **app-idea** | 簡短聊聊：這是給誰用的，最小但有用的版本長什麼樣，最後存成一頁簡介 | 「我有個點子……」 |
| **app-plan** | 每個人能做哪些事、一頁功能說明，以及一份由你確認的計畫 | 「計畫是什麼？」 |
| **app-design** | 三種外觀讓你挑，再定下一套一致的風格 | 「它應該長什麼樣子？」 |
| **app-build** | 一步一步做出來，照著你能陸續看到成果的順序 | 「開始做吧」 · 「加一個預約頁面」 |
| **app-change** | 一句話就能完成的小修改，或把「這不是我要的」整理成修改清單 | 「把按鈕改成綠色」 |
| **app-fix** | 找出問題真正的原因，只修那個地方 | 「我一……就出現錯誤」 |
| **app-review** | 像工程師一樣檢查，也像第一次上門的顧客一樣試用 | 「可以給顧客用了嗎？」 |
| **app-launch** | 安全地放上網路，每個做了就無法回頭的步驟都會先問過你 | 「把它放上網路」 |

## 你的專案會幫你記住

所有重要的東西，都會以簡單的頁面存在你專案裡的 `product/` 資料夾：簡介、計畫、外觀、做過的決定、檢查結果，還有下一步。關掉對話、下週再回來，或是從 Claude 換到 Codex，助理都能從你上次停下的地方繼續。在只能聊天的 App 裡，它會把這些頁面交給你自己保存。

## 你的語言

- 助理會**用你的語言跟你說話**：你用什麼語言寫，它就用什麼語言回。
- App 說的是**你顧客的語言**，可以跟你的不同，也可以同時支援好幾種語言。
- 程式碼維持英文，之後任何工程師都能接手。

已經在 20 種語言測試過：English、简体中文、繁體中文、Español、हिन्दी、العربية、Português、Français、Русский、日本語、Deutsch、Bahasa Indonesia、Tiếng Việt、한국어、Türkçe、Italiano、ไทย、Polski、Nederlands 和 Українська。其他語言通常也沒問題。

## 說到做到的承諾

- **說白話。** 不講術語。技術名詞只在第一次需要時解釋一次。
- **重要的事由你決定。** 任何難以復原的事（刪除資料、誰能看到什麼、付款、寄電子郵件給顧客、上線），一定會等你明確回答。小而可以復原的事會替你決定，你就不會被一堆問題淹沒。
- **結果老實說。** 只有真的試過之後，它才會說某個東西能用；沒辦法檢查到的部分，它也會告訴你。
- **保護你顧客的資料。** 預設不公開；修改永遠不會刪掉已儲存的資料；密碼、金鑰這類機密不會寫進程式碼。
- **完全屬於你。** 標準、看得懂的程式碼，加上純文字筆記。不綁定任何平台、不需要帳號，也不追蹤你。

## 先了解一下

- 要做出真正的 App，需要能處理你電腦上檔案的工具：Claude Code（或 Claude Desktop 裡的 Code 分頁）、Codex、Cursor、Gemini CLI、Copilot 等等。只能聊天的 App 可以幫你做規劃，再做一個可以點來試用的樣品（原型）。
- 你的 AI 工具原本的方案和使用量限制一樣適用。正式上線後，主機和網域通常每個月要花幾塊美金。任何要花錢的事，助理都會先告訴你。
- 它是個細心的助理，但不是律師，也不是會計師。遇到付款、健康資料或其他受法規管理的事，它會告訴你什麼時候該找專業人士。

## 了解更多

- [在各種工具上安裝](../install.md)
- [運作方式](../how-it-works.md)
- [常見問題](../faq.md)
- [參與貢獻](../../CONTRIBUTING.md)：改進技能、加入新工具，或幫忙翻譯

## 授權

[MIT](../../LICENSE)。可以免費使用、修改和分享。
