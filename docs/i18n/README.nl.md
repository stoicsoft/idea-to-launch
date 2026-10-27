# Software Builder

**Maak van je idee werkende software, zonder te leren programmeren.**

Software Builder is een gratis set skills voor de AI-assistent die je al
gebruikt: Claude, Codex, Cursor, Gemini, GitHub Copilot en
[15 andere tools](../install.md#every-supported-tool). Beschrijf je idee in je
eigen woorden, in je eigen taal. Je assistent stelt je een paar goede vragen,
schrijft een plan van één pagina dat jij goedkeurt, bouwt het, test het zoals
een echte klant dat zou doen en helpt je om het online te zetten.

**Talen:** [English](../../README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Tiếng Việt](README.vi.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [Italiano](README.it.md) · [ไทย](README.th.md) · [Polski](README.pl.md) · **Nederlands** · [Українська](README.uk.md)

_Dit is een vertaling. De [Engelse versie](../../README.md) is de bron en kan actueler zijn._

## Zo ziet het eruit

> **Jij:** Ik heb een kleine nagelstudio. Mijn vaste klanten maken een afspraak
> door me te appen en ik raak het overzicht kwijt. Kun je daar iets voor maken?
>
> **Assistent:** Ja. Eerst een paar korte vragen, zodat we het juiste bouwen.
> **1. Wie maakt het vaakst een afspraak?** a) Vaste klanten die je al kennen
> (aanbevolen) · b) Nieuwe klanten die je online vinden · …

Een paar rondes later heb je:
- **een beschrijving van één pagina** van je idee, in jouw woorden: "Een
  afsprakenpagina waar de vaste klanten van Mai zelf een vrij moment kiezen,
  zonder haar te appen";
- **een plan dat jij goedkeurt** voordat er iets gebouwd wordt;
- **een uiterlijk dat je zelf kiest** uit drie opties;
- **een werkende app** die je kunt openen en uitproberen, met geloofwaardige
  voorbeeldinhoud, in de taal van je klanten;
- **een eerlijke check** door de ogen van een ervaren programmeur en van een
  klant die de app voor het eerst op een telefoon opent;
- **hulp stap voor stap om live te gaan** op je eigen adres, en niets gaat
  online, kost geld of komt bij echte klanten terecht zonder jouw duidelijke
  "ja".

## Installeren

Kies de tool die je gebruikt. Elke optie installeert dezelfde skills.

| Jouw tool | Zo installeer je het |
|---|---|
| **Elke tool, één opdracht** (vereist [Node.js](https://nodejs.org)) | `npx github:OWNER/REPO` vindt je AI-tools en installeert de skills in al die tools tegelijk |
| **Mac of Linux, zonder Node.js** | `curl -fsSL https://raw.githubusercontent.com/OWNER/REPO/main/install.sh \| bash` |
| **Windows** (PowerShell) | `irm https://raw.githubusercontent.com/OWNER/REPO/main/install.ps1 \| iex` |
| **Claude Code** | `/plugin marketplace add OWNER/REPO`, daarna `/plugin install software-builder@software-builder` |
| **Claude Desktop** (chat) of claude.ai | Download de zip-bestanden via [Releases](https://github.com/OWNER/REPO/releases) en kies daarna voor elk bestand **Settings → Capabilities → Skills → Upload skill** (Instellingen → Mogelijkheden → Skills → Skill uploaden; [meer uitleg](../install.md#claude-desktop-and-claudeai)) |
| **Codex** (app of opdrachtregel) | `codex plugin marketplace add OWNER/REPO`, daarna `codex plugin add software-builder@software-builder` |
| **Cursor, Gemini CLI, Copilot, Windsurf, OpenCode, Kiro…** | De installatie met één opdracht hierboven, of bekijk [alle tools](../install.md) |
| **ChatGPT of een andere chatassistent** | Upload [`software-builder-prompt.md`](../install.md#chatgpt-and-other-chat-assistants) naar een project of een eigen GPT (custom GPT) |

Start daarna **je AI-tool opnieuw op** (of begin een nieuwe chat) en zeg:

> Ik wil een app bouwen voor mijn bedrijf. Kun je me helpen?

De volledige handleiding, met elke tool en hoe je bijwerkt of verwijdert, staat
in [docs/install.md](../install.md).

## De stappen

Je hoeft ze nooit bij naam te noemen. Zeg gewoon wat je wilt, en de assistent
kiest de juiste stap. Liever zelf kiezen? Dan kun je een stap ook direct
aanroepen, bijvoorbeeld `/app-idea` in Claude Code of Cursor.

| Stap | Wat er gebeurt | Zeg bijvoorbeeld |
|---|---|---|
| **app-builder** | Begin hier. Zoekt uit wat je nodig hebt en gaat verder waar je gebleven was | "Help me een app te bouwen" · "Laten we verdergaan" |
| **app-idea** | Een kort gesprek over voor wie het is en wat de kleinste bruikbare versie is, vastgelegd in een beschrijving van één pagina | "Ik heb een idee voor…" |
| **app-plan** | Wat iedereen straks kan doen, een uitwerking van één pagina en een plan dat jij goedkeurt | "Wat is het plan?" |
| **app-design** | Drie ontwerpen om uit te kiezen, daarna één vaste stijl | "Hoe moet het eruitzien?" |
| **app-build** | Bouwt het stap voor stap, in de volgorde waarin je het ziet werken | "Bouw het maar" · "Voeg een afsprakenpagina toe" |
| **app-change** | Kleine aanpassingen in één bericht, of "dit is niet wat ik bedoelde" omgezet in een lijst met verbeteringen | "Maak de knop groen" |
| **app-fix** | Vindt de echte oorzaak van een probleem en lost alleen dat op | "Ik krijg een foutmelding als ik…" |
| **app-review** | Controleert het als een programmeur en als een klant die het voor het eerst ziet | "Is het klaar voor klanten?" |
| **app-launch** | Zet het veilig online, met jouw akkoord bij elke stap die niet terug te draaien is | "Zet het online" |

## Je project onthoudt alles

Alles wat belangrijk is, wordt bewaard als eenvoudige pagina's in een map
`product/` in je project: de beschrijving, het plan, het ontwerp, beslissingen,
testresultaten en de volgende stap. Sluit de chat, kom volgende week terug of
stap over van Claude naar Codex: je assistent gaat verder waar je gebleven was.
In apps met alleen een chat krijg je deze pagina's in plaats daarvan om zelf te
bewaren.

## Jouw taal

- De assistent **praat met je in jouw taal**: de taal waarin je schrijft.
- De app spreekt **de taal van je klanten**. Dat kan een andere taal zijn, of
  meerdere talen tegelijk.
- De code blijft in het Engels, zodat elke ontwikkelaar het later kan
  overnemen.

Het is getest in 20 talen: English, 简体中文, 繁體中文, Español, हिन्दी,
العربية, Português, Français, Русский, 日本語, Deutsch, Bahasa Indonesia,
Tiếng Việt, 한국어, Türkçe, Italiano, ไทย, Polski, Nederlands en
Українська. Andere talen werken meestal ook.

## Beloftes die het nakomt

- **Gewone woorden.** Geen jargon. Technische woorden worden één keer
  uitgelegd, op het moment dat ze voor het eerst nodig zijn.
- **Jij beslist wat ertoe doet.** Alles wat moeilijk terug te draaien is
  (gegevens verwijderen, wie wat mag zien, betalingen, e-mails aan klanten,
  online gaan) wacht altijd op jouw uitdrukkelijke antwoord. Kleine dingen die
  makkelijk terug te draaien zijn, worden voor je beslist, zodat je niet
  bedolven raakt onder de vragen.
- **Eerlijke resultaten.** Het zegt pas dat iets werkt als het dat echt heeft
  geprobeerd, en vertelt je wat het niet kon controleren.
- **Veilig met de gegevens van je klanten.** Standaard privé, wijzigingen die
  nooit opgeslagen gegevens wissen, en wachtwoorden en sleutels blijven buiten
  de code.
- **Van jou.** Standaard, leesbare code en notities in gewone tekst. Je zit
  nergens aan vast, je hebt geen account nodig en je wordt niet gevolgd.

## Goed om te weten

- Voor een echte app heb je een tool nodig die met bestanden op je computer
  kan werken: Claude Code (of het tabblad Code in Claude Desktop), Codex,
  Cursor, Gemini CLI, Copilot en vergelijkbare tools. Apps met alleen een chat
  kunnen het plan maken en een prototype waar je doorheen kunt klikken.
- Het gewone abonnement en de gebruikslimieten van je AI-tool gelden. Hosting
  en een domeinnaam (je webadres) kosten meestal een paar dollar per maand
  zodra je live gaat. De assistent zegt het je voordat iets geld kost.
- Het is een zorgvuldige assistent, geen jurist of boekhouder. Bij betalingen,
  gezondheidsgegevens of andere zaken waarvoor strenge regels gelden, zegt het
  wanneer je een professional nodig hebt.

## Meer weten

- [Installeren in elke tool](../install.md)
- [Hoe het werkt](../how-it-works.md)
- [Vragen en antwoorden](../faq.md)
- [Bijdragen](../../CONTRIBUTING.md): de skills verbeteren, een tool toevoegen of vertalen

## Licentie

[MIT](../../LICENSE). Vrij te gebruiken, aan te passen en te delen.
