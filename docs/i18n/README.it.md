# Idea to Launch

**Trasforma la tua idea in un software che funziona, senza imparare a programmare.**

Idea to Launch è una raccolta gratuita di abilità (skill) per l'assistente
IA che usi già: Claude, Codex, Cursor, Gemini, GitHub Copilot e
[altri 15 strumenti](../install.md#every-supported-tool). Racconta la tua
idea con parole tue, nella tua lingua. Il tuo assistente ti fa qualche
domanda mirata, scrive un piano di una pagina da farti approvare, lo
realizza, lo controlla come farebbe un vero cliente e ti aiuta a metterlo
online.

**Lingue:** [English](../../README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Tiếng Việt](README.vi.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · **Italiano** · [ไทย](README.th.md) · [Polski](README.pl.md) · [Nederlands](README.nl.md) · [Українська](README.uk.md)

*Il [README in inglese](../../README.md) è il testo originale e potrebbe essere più aggiornato di questa traduzione.*

## Com'è usarlo

> **Tu:** Ho un piccolo salone di manicure. La mia clientela abituale prenota
> scrivendomi messaggi e non riesco più a starci dietro. Puoi creare
> qualcosa che mi aiuti?
>
> **Assistente:** Sì. Prima qualche domanda veloce, così costruiamo la cosa
> giusta. **1. Chi prenota più spesso?** a) Clienti abituali che ti
> conoscono già (consigliato) · b) Nuovi clienti che ti trovano online · …

Qualche scambio dopo, hai:
- **un riassunto di una pagina** della tua idea, con parole tue: "Una pagina
  di prenotazione dove i clienti abituali di Mai scelgono un orario libero
  senza doverle scrivere";
- **un piano che approvi tu** prima che si inizi a costruire;
- **uno stile scelto da te** tra tre proposte;
- **un'app funzionante** che puoi aprire e provare, con contenuti di esempio
  credibili, nella lingua dei tuoi clienti;
- **un controllo onesto** dal punto di vista di un ingegnere esperto e di un
  cliente che la apre per la prima volta sul telefono;
- **un aiuto passo passo per andare online** con il tuo indirizzo web, e
  niente va online, costa denaro o arriva ai clienti veri senza un tuo "sì"
  chiaro.

## Installazione

Copia una sola riga nel terminale del tuo computer. Trova gli strumenti di
IA presenti sul tuo computer (Claude Code, Codex, Cursor, Gemini CLI,
Copilot e [altri 15](../install.md#every-supported-tool)) e aggiunge le
abilità a tutti. Copia solo file di testo, non servono permessi di
amministratore e puoi rimuovere tutto quando vuoi.

**Su Mac** (o Linux): apri **Terminale** (premi ⌘ Space, scrivi `Terminal`
e premi Invio), incolla questa riga e premi Invio:

```sh
curl -fsSL https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.sh | bash
```

**Su Windows:** apri **PowerShell** (premi il tasto Windows, scrivi
`PowerShell` e premi Invio), incolla questa riga e premi Invio:

```powershell
irm https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.ps1 | iex
```

Poi **riavvia il tuo strumento di IA** (o apri una nuova chat) e scrivi:

> Voglio creare un'app per la mia attività. Mi aiuti?

Se usi già Node.js, `npx github:stoicsoft/idea-to-launch` fa la stessa
cosa.

### Altri modi per installare

| Il tuo strumento | Come installare |
|---|---|
| **Claude Code**, come plugin | `/plugin marketplace add stoicsoft/idea-to-launch`, poi `/plugin install idea-to-launch@idea-to-launch` |
| **Codex** (app o CLI), come plugin | `codex plugin marketplace add stoicsoft/idea-to-launch`, poi `codex plugin add idea-to-launch@idea-to-launch` |
| **Gemini CLI**, come estensione | `gemini extensions install https://github.com/stoicsoft/idea-to-launch` |
| **Claude Desktop** (chat) o claude.ai | Il comando qui sopra non arriva fino a queste app. Scarica i file zip da [Releases](https://github.com/stoicsoft/idea-to-launch/releases), poi per ognuno vai su **Settings → Capabilities → Skills → Upload skill** (Impostazioni → Funzionalità → Skill → Carica skill) ([dettagli](../install.md#claude-desktop-and-claudeai)) |
| **ChatGPT o qualsiasi altro assistente via chat** | Carica [`idea-to-launch-prompt.md`](../install.md#chatgpt-and-other-chat-assistants) in un progetto o in un GPT personalizzato |

La guida completa, con tutti gli strumenti, come scegliere a quali strumenti
aggiungere le abilità e come aggiornarle o rimuoverle, è in
[docs/install.md](../install.md).

## I passaggi

Non devi mai chiamarli per nome. Ti basta dire cosa vuoi e l'assistente
sceglie il passaggio giusto. Se preferisci, puoi chiamare un passaggio
direttamente, per esempio `/app-idea` in Claude Code o Cursor.

| Passaggio | Cosa succede | Puoi dire, per esempio |
|---|---|---|
| **app-builder** | Si parte da qui. Capisce di cosa hai bisogno e riprende da dove avevi lasciato | "Aiutami a creare un'app" · "Andiamo avanti" |
| **app-idea** | Una breve intervista su a chi è rivolta e sulla versione più piccola che sia già utile, salvata come riassunto di una pagina | "Ho un'idea per…" |
| **app-plan** | Cosa potrà fare ogni persona, una scheda dettagliata di una pagina e un piano da approvare | "Qual è il piano?" |
| **app-design** | Tre stili tra cui scegliere, poi uno stile coerente ovunque | "Che aspetto dovrebbe avere?" |
| **app-build** | La costruisce passo dopo passo, nell'ordine in cui la vedrai funzionare | "Costruiscila" · "Aggiungi una pagina per le prenotazioni" |
| **app-change** | Piccole modifiche in un solo messaggio, oppure un "non è quello che volevo" trasformato in un elenco di correzioni | "Fai il pulsante verde" |
| **app-fix** | Trova la vera causa di un problema e corregge solo quella | "Mi dà un errore quando…" |
| **app-review** | La controlla come farebbe un ingegnere e come un cliente alla prima visita | "È pronta per i clienti?" |
| **app-launch** | La mette online in sicurezza, con la tua approvazione a ogni passo senza ritorno | "Mettila online" |

## Il tuo progetto ricorda tutto

Tutto ciò che conta viene salvato come semplici pagine in una cartella
`product/` dentro il tuo progetto: il riassunto, il piano, lo stile, le
decisioni, i risultati dei controlli e il prossimo passo. Chiudi la chat,
torna la settimana prossima o passa da Claude a Codex: il tuo assistente
riprende da dove avevi lasciato. Nelle app solo chat, invece, ti consegna
queste pagine da conservare.

## La tua lingua

- L'assistente **ti parla nella tua lingua**: quella in cui scrivi.
- L'app parla **la lingua dei tuoi clienti**, che può essere diversa, o
  anche più lingue insieme.
- Il codice resta in inglese, così qualsiasi sviluppatore potrà prenderlo
  in mano in futuro.

È testato in 20 lingue: English, 简体中文, 繁體中文, Español, हिन्दी,
العربية, Português, Français, Русский, 日本語, Deutsch, Bahasa Indonesia,
Tiếng Việt, 한국어, Türkçe, Italiano, ไทย, Polski, Nederlands e
Українська. Di solito funzionano anche le altre.

## Le promesse che mantiene

- **Parole semplici.** Niente gergo. Le parole tecniche vengono spiegate una
  volta sola, la prima volta che servono.
- **Decidi tu cosa conta.** Tutto ciò che è difficile da annullare
  (cancellare dati, chi può vedere cosa, pagamenti, email ai clienti, andare
  online) aspetta sempre una tua risposta esplicita. Le cose piccole e
  reversibili vengono decise per te, così non ti trovi davanti una valanga
  di domande.
- **Risultati onesti.** Dice che qualcosa funziona solo dopo averlo provato
  davvero, e ti dice cosa non è riuscito a controllare.
- **I dati dei tuoi clienti al sicuro.** Privato per impostazione
  predefinita, modifiche che non cancellano mai le informazioni salvate, e
  password e chiavi tenute fuori dal codice.
- **È tuo.** Codice standard e leggibile, note in testo semplice. Nessun
  vincolo, nessun account, nessun tracciamento.

## Buono a sapersi

- Per costruire una vera app serve uno strumento che possa lavorare con i
  file sul tuo computer: Claude Code (o la scheda Code di Claude Desktop),
  Codex, Cursor, Gemini CLI, Copilot e simili. Le app solo chat possono
  occuparsi della pianificazione e di un prototipo cliccabile.
- Valgono il piano e i limiti di utilizzo normali del tuo strumento di IA.
  Hosting e nome di dominio di solito costano pochi euro al mese, una volta
  online. L'assistente ti avvisa prima di qualsiasi spesa.
- È un assistente scrupoloso, non un avvocato né un commercialista. Per
  pagamenti, dati sanitari o qualsiasi cosa regolamentata, ti dirà quando
  serve un professionista.

## Per saperne di più

- [Installazione su ogni strumento](../install.md)
- [Come funziona](../how-it-works.md)
- [Domande e risposte](../faq.md)
- [Contribuire](../../CONTRIBUTING.md): migliora le abilità, aggiungi uno
  strumento o traduci

## Licenza

[MIT](../../LICENSE). Puoi usarlo, modificarlo e condividerlo liberamente.
