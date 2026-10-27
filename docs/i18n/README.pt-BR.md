# Software Builder

**Transforme sua ideia em um software que funciona, sem aprender a programar.**

O Software Builder é um conjunto gratuito de habilidades (skills) para o
assistente de IA que você já usa: Claude, Codex, Cursor, Gemini,
GitHub Copilot e [mais 15 ferramentas](../install.md#every-supported-tool).
Conte sua ideia do seu jeito, no seu idioma. Seu assistente faz algumas boas
perguntas, escreve um plano de uma página para você aprovar, constrói o app,
testa do jeito que um cliente de verdade testaria e ajuda você a colocar tudo
no ar.

**Idiomas:** [English](../../README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · **Português** · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Tiếng Việt](README.vi.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [Italiano](README.it.md) · [ไทย](README.th.md) · [Polski](README.pl.md) · [Nederlands](README.nl.md) · [Українська](README.uk.md)

*O [README em inglês](../../README.md) é o texto original e pode estar mais atualizado do que esta tradução.*

## Como é na prática

> **Você:** Tenho um pequeno salão de manicure. Minha clientela fixa marca
> horário me mandando mensagem e eu acabo me perdendo. Dá para fazer alguma
> coisa para isso?
>
> **Assistente:** Dá, sim. Antes, algumas perguntas rápidas, para a gente
> construir a coisa certa. **1. Quem marca horário com mais frequência?**
> a) A clientela fixa, que já conhece você (recomendado) · b) Clientes novos
> que encontram você na internet · …

Algumas rodadas depois, você tem:
- **um resumo de uma página** da sua ideia, com as suas palavras: "Uma
  página de agendamento onde a clientela fixa da Mai escolhe um horário
  livre sem precisar mandar mensagem para ela";
- **um plano que você aprova** antes de qualquer coisa ser construída;
- **um visual que você escolheu** entre três opções;
- **um app funcionando**, que você pode abrir e testar, com conteúdo de
  exemplo convincente, no idioma dos seus clientes;
- **uma avaliação honesta** do ponto de vista de um engenheiro experiente e
  de um cliente usando pela primeira vez no celular;
- **ajuda passo a passo para colocar no ar** no seu próprio endereço, e nada
  vai para a internet, custa dinheiro ou chega a clientes reais sem o seu
  "sim" claro.

## Instalação

Escolha a ferramenta que você usa. Todas as opções instalam as mesmas
habilidades.

| Sua ferramenta | Como instalar |
|---|---|
| **Qualquer ferramenta, um só comando** (precisa do [Node.js](https://nodejs.org)) | `npx github:OWNER/REPO` encontra suas ferramentas de IA e instala em todas elas |
| **Mac ou Linux, sem Node.js** | `curl -fsSL https://raw.githubusercontent.com/OWNER/REPO/main/install.sh \| bash` |
| **Windows** (PowerShell) | `irm https://raw.githubusercontent.com/OWNER/REPO/main/install.ps1 \| iex` |
| **Claude Code** | `/plugin marketplace add OWNER/REPO`, depois `/plugin install software-builder@software-builder` |
| **Claude Desktop** (chat) ou claude.ai | Baixe os arquivos zip em [Releases](https://github.com/OWNER/REPO/releases) e depois, para cada um, vá em **Settings → Capabilities → Skills → Upload skill** (Configurações → Capacidades → Habilidades → Enviar habilidade) ([detalhes](../install.md#claude-desktop-and-claudeai)) |
| **Codex** (app ou CLI) | `codex plugin marketplace add OWNER/REPO`, depois `codex plugin add software-builder@software-builder` |
| **Cursor, Gemini CLI, Copilot, Windsurf, OpenCode, Kiro…** | A instalação com um só comando, aqui em cima, ou veja [todas as ferramentas](../install.md) |
| **ChatGPT ou qualquer outro assistente de chat** | Envie o [`software-builder-prompt.md`](../install.md#chatgpt-and-other-chat-assistants) para um projeto ou um GPT personalizado |

Depois, **reinicie sua ferramenta de IA** (ou comece uma conversa nova) e
diga:

> Quero criar um app para o meu negócio. Você pode me ajudar?

O guia completo, com todas as ferramentas e como atualizar ou remover o
Software Builder, está em [docs/install.md](../install.md).

## As etapas

Você nunca precisa chamar as etapas pelo nome. É só dizer o que você quer, e
o assistente escolhe a etapa certa. Se preferir, você pode chamar uma etapa
diretamente, por exemplo `/app-idea` no Claude Code ou no Cursor.

| Etapa | O que acontece | Diga algo como |
|---|---|---|
| **app-builder** | Comece por aqui. Entende do que você precisa e continua de onde você parou | "Me ajude a criar um app" · "Vamos continuar" |
| **app-idea** | Uma entrevista curta sobre para quem é e qual a menor versão que já é útil, salva como um resumo de uma página | "Tenho uma ideia de…" |
| **app-plan** | O que cada pessoa vai poder fazer, uma descrição detalhada de uma página e um plano para você aprovar | "Qual é o plano?" |
| **app-design** | Três visuais para escolher e depois um estilo único e consistente | "Qual vai ser o visual?" |
| **app-build** | Constrói passo a passo, na ordem em que você vai ver tudo funcionando | "Pode construir" · "Adicione uma página de agendamento" |
| **app-change** | Pequenas mudanças em uma só mensagem, ou um "não era isso que eu queria" transformado em uma lista de ajustes | "Deixe o botão verde" |
| **app-fix** | Encontra a causa real de um problema e corrige só isso | "Aparece um erro quando eu…" |
| **app-review** | Avalia como um engenheiro e como um cliente de primeira viagem | "Está pronto para os clientes?" |
| **app-launch** | Coloca no ar com segurança, com a sua aprovação em cada passo que não tem volta | "Coloque no ar" |

## Seu projeto não esquece

Tudo o que importa fica salvo como páginas simples em uma pasta `product/`
dentro do seu projeto: o resumo, o plano, o visual, as decisões, os
resultados das avaliações e o próximo passo. Feche o chat, volte na semana
que vem ou troque o Claude pelo Codex, e o assistente continua de onde você
parou. Em apps que são só de chat, ele entrega essas páginas para você
guardar.

## Seu idioma

- O assistente **fala com você no seu idioma**: o mesmo em que você
  escrever.
- O app fala **o idioma dos seus clientes**, que pode ser outro, ou vários
  idiomas ao mesmo tempo.
- O código fica em inglês, para que qualquer desenvolvedor possa assumir
  depois.

Ele foi testado em 20 idiomas: English, 简体中文, 繁體中文, Español, हिन्दी,
العربية, Português, Français, Русский, 日本語, Deutsch, Bahasa Indonesia,
Tiếng Việt, 한국어, Türkçe, Italiano, ไทย, Polski, Nederlands e
Українська. Outros costumam funcionar também.

## Promessas que ele cumpre

- **Palavras simples.** Nada de jargão. Termos técnicos são explicados uma
  vez só, na primeira vez que aparecem.
- **Você decide o que importa.** Tudo o que é difícil de desfazer (apagar
  dados, quem pode ver o quê, pagamentos, e-mails para clientes, colocar no
  ar) sempre espera a sua resposta explícita. As coisas pequenas e
  reversíveis o assistente decide sozinho, para você não se afogar em
  perguntas.
- **Resultados honestos.** Ele só diz que algo funciona depois de testar de
  verdade, e conta o que não conseguiu verificar.
- **Cuidado com os dados dos seus clientes.** Privado por padrão, mudanças
  que nunca apagam informações salvas, e senhas e chaves ficam fora do
  código.
- **É seu.** Código padrão e fácil de ler, e anotações em texto simples. Sem
  amarras, sem conta, sem rastreamento.

## Bom saber

- Para construir um app de verdade, você precisa de uma ferramenta que
  consiga trabalhar com arquivos no seu computador: Claude Code (ou a aba
  Code do Claude Desktop), Codex, Cursor, Gemini CLI, Copilot e parecidos.
  Apps que são só de chat conseguem fazer o planejamento e um protótipo
  clicável.
- Valem o plano e os limites de uso normais da sua ferramenta de IA.
  Hospedagem e um nome de domínio costumam custar alguns dólares por mês
  depois que o app estiver no ar. O assistente avisa antes de qualquer coisa
  que custe dinheiro.
- Ele é um assistente cuidadoso, não um advogado nem um contador. Para
  pagamentos, dados de saúde ou qualquer coisa regulamentada, ele vai avisar
  quando você precisar de um profissional.

## Saiba mais

- [Instalar em cada ferramenta](../install.md)
- [Como funciona](../how-it-works.md)
- [Perguntas e respostas](../faq.md)
- [Como contribuir](../../CONTRIBUTING.md): melhore as habilidades,
  adicione uma ferramenta ou traduza

## Licença

[MIT](../../LICENSE). Livre para usar, modificar e compartilhar.
