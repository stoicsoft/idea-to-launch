# Idea to Launch

**코딩을 배우지 않아도, 아이디어를 실제로 돌아가는 소프트웨어로 만들 수 있어요.**

Idea to Launch는 지금 쓰고 계신 AI 어시스턴트에 더하는 무료 스킬 모음이에요. Claude, Codex, Cursor, Gemini, GitHub Copilot, 그리고 [그 밖의 15개 도구](../install.md#every-supported-tool)에서 쓸 수 있어요. 아이디어를 평소 쓰시는 말로, 편한 언어로 설명해 주세요. 어시스턴트가 꼭 필요한 질문 몇 가지를 드리고, 승인하실 1페이지 계획서를 쓰고, 직접 만들고, 실제 고객처럼 꼼꼼히 확인한 다음, 인터넷에 올리는 것까지 도와드려요.

**언어:** [English](../../README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Tiếng Việt](README.vi.md) · **한국어** · [Türkçe](README.tr.md) · [Italiano](README.it.md) · [ไทย](README.th.md) · [Polski](README.pl.md) · [Nederlands](README.nl.md) · [Українська](README.uk.md)

이 문서는 번역본이에요. 원본은 영어 [README](../../README.md)이고, 원본이 더 최신일 수 있어요.

## 써 보면 이런 느낌이에요

> **나:** 작은 네일숍을 하고 있어요. 단골손님들이 메시지로 예약하는데 자꾸 헷갈려요. 이걸 해결할 뭔가를 만들어 줄 수 있나요?
>
> **어시스턴트:** 네, 만들 수 있어요. 딱 맞는 걸 만들 수 있도록 먼저 간단한 질문 몇 가지만 드릴게요. **1. 예약을 가장 자주 하는 분은 누구인가요?** a) 이미 사장님을 잘 아는 단골손님 (추천) · b) 온라인에서 가게를 찾은 새 손님 · …

몇 번 주고받고 나면 이런 결과물이 생겨요:
- **아이디어를 정리한 1페이지 요약**: 직접 하신 말 그대로 담아요. “Mai 사장님의 단골손님이 메시지를 보내지 않고도 빈 시간을 골라 예약하는 페이지”
- **직접 승인하는 계획**: 승인하시기 전에는 아무것도 만들지 않아요.
- **직접 고르신 디자인**: 세 가지 안 중에서 고르실 수 있어요.
- **바로 열어서 써 볼 수 있는 앱**: 그럴듯한 예시 내용이 들어 있고, 고객이 쓰는 언어로 되어 있어요.
- **솔직한 점검 결과**: 경험 많은 엔지니어의 눈과, 휴대폰으로 처음 들어온 고객의 눈으로 확인해요.
- **공개까지 한 단계씩 도와드려요**: 원하시는 주소로 올릴 수 있어요. 분명하게 “네”라고 하시기 전에는 아무것도 온라인에 올라가거나, 돈이 들거나, 실제 고객에게 닿지 않아요.

## 설치

컴퓨터의 터미널에 한 줄만 복사해 넣으면 돼요. 컴퓨터에 있는 AI 도구(Claude Code, Codex, Cursor, Gemini CLI, Copilot, 그리고 [그 밖의 15개](../install.md#every-supported-tool))를 찾아서 모두에 스킬을 설치해요. 텍스트 파일만 복사하고, 관리자 권한도 필요 없고, 언제든 삭제할 수 있어요.

**Mac에서는** (또는 Linux): ⌘ Space를 누르고 `Terminal`을 입력한 다음 Enter 키를 눌러 **Terminal**(터미널)을 여세요. 아래 한 줄을 붙여 넣고 Enter 키를 누르세요:

```sh
curl -fsSL https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.sh | bash
```

**Windows에서는:** Windows 키를 누르고 `PowerShell`을 입력한 다음 Enter 키를 눌러 **PowerShell**을 여세요. 아래 한 줄을 붙여 넣고 Enter 키를 누르세요:

```powershell
irm https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.ps1 | iex
```

그다음 **AI 도구를 다시 시작**하고(또는 새 채팅을 열고) 이렇게 말해 보세요:

> 제 사업에 쓸 앱을 만들고 싶어요. 도와주실 수 있나요?

이미 Node.js를 쓰고 계신다면 `npx github:stoicsoft/idea-to-launch`로도 똑같이 설치할 수 있어요.

### 다른 설치 방법

| 사용하시는 도구 | 설치 방법 |
|---|---|
| **Claude Code**, 플러그인으로 | `/plugin marketplace add stoicsoft/idea-to-launch` 다음에 `/plugin install idea-to-launch@idea-to-launch` |
| **Codex** (앱 또는 명령줄 버전), 플러그인으로 | `codex plugin marketplace add stoicsoft/idea-to-launch` 다음에 `codex plugin add idea-to-launch@idea-to-launch` |
| **Gemini CLI**, 확장 프로그램으로 | `gemini extensions install https://github.com/stoicsoft/idea-to-launch` |
| **Claude Desktop** (채팅) 또는 claude.ai | 위 명령어로는 여기에 설치할 수 없어요. [Releases](https://github.com/stoicsoft/idea-to-launch/releases)(배포 페이지)에서 zip 파일을 내려받은 다음, 파일마다 **Settings → Capabilities → Skills → Upload skill**(설정 → 기능 → 스킬 → 스킬 업로드)에서 올려 주세요 ([자세히 보기](../install.md#claude-desktop-and-claudeai)) |
| **ChatGPT나 다른 채팅 어시스턴트** | [`idea-to-launch-prompt.md`](../install.md#chatgpt-and-other-chat-assistants) 파일을 프로젝트나 맞춤형 GPT에 올려 주세요 |

도구별 설치 방법, 스킬을 설치할 도구를 고르는 방법, 업데이트·삭제 방법까지 담긴 전체 안내는 [docs/install.md](../install.md)에 있어요.

## 단계

단계 이름을 부르실 필요는 전혀 없어요. 원하시는 걸 말씀하시면 어시스턴트가 알맞은 단계를 골라요. 원하시면 단계를 직접 부를 수도 있어요. 예를 들어 Claude Code나 Cursor에서 `/app-idea`를 입력하시면 돼요.

| 단계 | 하는 일 | 이렇게 말해 보세요 |
|---|---|---|
| **app-builder** | 여기서 시작하세요. 무엇이 필요한지 파악하고, 지난번에 멈춘 곳부터 이어서 해요 | “앱 만드는 것 좀 도와주세요” · “이어서 해 주세요” |
| **app-idea** | 누구를 위한 건지, 가장 작지만 쓸모 있는 버전은 뭔지 짧게 인터뷰하고 1페이지 요약으로 저장해요 | “이런 아이디어가 있는데요…” |
| **app-plan** | 사람마다 할 수 있게 될 일, 1페이지 기능 명세, 그리고 직접 승인하실 계획 | “계획이 어떻게 돼요?” |
| **app-design** | 세 가지 디자인 중에서 고르시면, 그다음 하나의 일관된 스타일로 맞춰요 | “어떤 모습이면 좋을까요?” |
| **app-build** | 작동하는 모습을 차례로 보실 수 있는 순서대로, 한 단계씩 만들어요 | “만들어 주세요” · “예약 페이지를 추가해 주세요” |
| **app-change** | 메시지 하나로 끝나는 작은 수정, 또는 “이건 제가 원한 게 아니에요”를 고칠 목록으로 정리해요 | “버튼을 초록색으로 바꿔 주세요” |
| **app-fix** | 문제의 진짜 원인을 찾아서 그것만 고쳐요 | “…하면 오류가 나요” |
| **app-review** | 엔지니어처럼, 그리고 처음 온 고객처럼 확인해요 | “이제 고객이 써도 될까요?” |
| **app-launch** | 되돌릴 수 없는 단계마다 승인을 받으면서 안전하게 온라인에 올려요 | “온라인에 올려 주세요” |

## 프로젝트가 기억해요

중요한 건 모두 프로젝트 안의 `product/` 폴더에 간단한 문서로 저장돼요. 요약, 계획, 디자인, 결정한 내용, 점검 결과, 다음 할 일까지요. 채팅을 닫으셔도, 다음 주에 다시 오셔도, Claude에서 Codex로 바꾸셔도 어시스턴트가 멈춘 곳부터 이어서 해요. 채팅만 되는 앱에서는 대신 이 문서들을 직접 보관하실 수 있게 드려요.

## 언어

- 어시스턴트는 **쓰시는 언어로 대화해요**: 어떤 언어로 쓰시든 그 언어로 답해요.
- 앱은 **고객의 언어**로 말해요. 쓰시는 언어와 달라도 되고, 여러 언어를 한꺼번에 지원할 수도 있어요.
- 코드는 영어로 유지해요. 그래서 나중에 어떤 개발자든 이어받을 수 있어요.

English, 简体中文, 繁體中文, Español, हिन्दी, العربية, Português, Français, Русский, 日本語, Deutsch, Bahasa Indonesia, Tiếng Việt, 한국어, Türkçe, Italiano, ไทย, Polski, Nederlands, Українська, 이렇게 20개 언어로 테스트했어요. 다른 언어도 대부분 잘 돼요.

## 꼭 지키는 약속

- **쉬운 말로.** 전문 용어는 쓰지 않아요. 기술 용어는 처음 필요할 때 한 번만 설명해요.
- **중요한 건 직접 정하세요.** 되돌리기 어려운 일(데이터 삭제, 누가 무엇을 볼 수 있는지, 결제, 고객에게 보내는 이메일, 온라인 공개)은 언제나 분명한 답을 주실 때까지 기다려요. 작고 되돌릴 수 있는 일은 알아서 정하니까, 질문에 파묻히실 일이 없어요.
- **결과는 솔직하게.** 실제로 해 본 다음에만 된다고 말하고, 확인하지 못한 부분도 알려 드려요.
- **고객 데이터는 안전하게.** 기본은 비공개이고, 저장된 정보를 지우는 변경은 절대 하지 않으며, 비밀번호 같은 비밀 정보는 코드에 넣지 않아요.
- **만든 건 모두 내 것.** 표준적이고 읽기 쉬운 코드와 일반 텍스트 메모로 남아요. 특정 서비스에 묶이지 않고, 계정도 필요 없고, 추적도 하지 않아요.

## 알아 두면 좋은 점

- 실제 앱을 만들려면 컴퓨터의 파일을 다룰 수 있는 도구가 필요해요. Claude Code(또는 Claude Desktop의 Code 탭), Codex, Cursor, Gemini CLI, Copilot 같은 도구요. 채팅만 되는 앱으로는 계획 세우기와, 눌러 볼 수 있는 시제품(프로토타입)까지 만들 수 있어요.
- 사용하시는 AI 도구의 요금제와 사용량 한도는 평소대로 적용돼요. 공개하고 나면 호스팅과 도메인 이름에 보통 한 달에 몇 달러 정도 들어요. 돈이 드는 일이 생기기 전에 어시스턴트가 먼저 알려 드려요.
- 꼼꼼한 어시스턴트지만 변호사나 회계사는 아니에요. 결제, 건강 정보, 그 밖에 법적 규제가 있는 일이라면 언제 전문가가 필요한지 알려 드려요.

## 더 알아보기

- [모든 도구에 설치하기](../install.md)
- [작동 방식](../how-it-works.md)
- [자주 묻는 질문](../faq.md)
- [참여하기](../../CONTRIBUTING.md): 스킬 개선, 도구 추가, 번역

## 라이선스

[MIT](../../LICENSE). 무료로 자유롭게 쓰고, 고치고, 공유할 수 있어요.
