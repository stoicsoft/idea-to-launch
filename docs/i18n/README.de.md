# Idea to Launch

**Mach aus deiner Idee funktionierende Software, ohne programmieren zu lernen.**

Idea to Launch ist eine kostenlose Sammlung von Skills (Fähigkeiten) für
den KI-Assistenten, den du schon nutzt: Claude, Codex, Cursor, Gemini,
GitHub Copilot und [15 weitere Tools](../install.md#every-supported-tool).
Beschreib deine Idee in deinen eigenen Worten und in deiner Sprache. Dein
Assistent stellt dir ein paar gute Fragen, schreibt einen einseitigen Plan,
den du freigibst, baut alles, prüft es so, wie es ein echter Kunde tun
würde, und hilft dir, es ins Internet zu bringen.

**Sprachen:** [English](../../README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · **Deutsch** · [Bahasa Indonesia](README.id.md) · [Tiếng Việt](README.vi.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [Italiano](README.it.md) · [ไทย](README.th.md) · [Polski](README.pl.md) · [Nederlands](README.nl.md) · [Українська](README.uk.md)

*Das englische [README](../../README.md) ist das Original und kann aktueller sein als diese Übersetzung.*

## So fühlt es sich an

> **Du:** Ich habe ein kleines Nagelstudio. Meine Stammkundschaft bucht per
> Nachricht bei mir, und ich verliere den Überblick. Kannst du dafür etwas
> bauen?
>
> **Assistent:** Ja. Vorher ein paar kurze Fragen, damit wir das Richtige
> bauen. **1. Wer bucht am häufigsten?** a) Stammkundschaft, die dich schon
> kennt (empfohlen) · b) Neue Kundschaft, die dich online findet · …

Nach ein paar Runden hast du:
- **eine einseitige Kurzbeschreibung** deiner Idee, in deinen Worten: „Eine
  Buchungsseite, auf der Mais Stammkundschaft einen freien Termin auswählt,
  ohne ihr schreiben zu müssen“;
- **einen Plan, den du freigibst**, bevor irgendetwas gebaut wird;
- **ein Design, das du aus drei Vorschlägen ausgewählt hast**;
- **eine funktionierende App**, die du öffnen und ausprobieren kannst, mit
  glaubwürdigen Beispielinhalten, in der Sprache deiner Kundschaft;
- **einen ehrlichen Check** aus Sicht eines erfahrenen Entwicklers und
  einer Kundin, die die App zum ersten Mal auf dem Handy öffnet;
- **Schritt-für-Schritt-Hilfe beim Veröffentlichen** unter deiner eigenen
  Webadresse, und nichts geht online, kostet Geld oder erreicht echte Kunden
  ohne dein klares „Ja“.

## Installation

Wähl das Tool, das du nutzt. Jede Option installiert dieselben Skills.

| Dein Tool | So installierst du es |
|---|---|
| **Jedes Tool, ein einziger Befehl** (braucht [Node.js](https://nodejs.org)) | `npx github:stoicsoft/idea-to-launch` findet deine KI-Tools und installiert sich in alle |
| **Mac oder Linux, ohne Node.js** | `curl -fsSL https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.sh \| bash` |
| **Windows** (PowerShell) | `irm https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.ps1 \| iex` |
| **Claude Code** | `/plugin marketplace add stoicsoft/idea-to-launch`, danach `/plugin install idea-to-launch@idea-to-launch` |
| **Claude Desktop** (Chat) oder claude.ai | Lade die ZIP-Dateien unter [Releases](https://github.com/stoicsoft/idea-to-launch/releases) herunter und geh dann für jede Datei auf **Settings → Capabilities → Skills → Upload skill** (Einstellungen → Funktionen → Skills → Skill hochladen) ([Details](../install.md#claude-desktop-and-claudeai)) |
| **Codex** (App oder CLI) | `codex plugin marketplace add stoicsoft/idea-to-launch`, danach `codex plugin add idea-to-launch@idea-to-launch` |
| **Cursor, Gemini CLI, Copilot, Windsurf, OpenCode, Kiro…** | Die Installation mit einem Befehl von oben, oder sieh dir [alle Tools](../install.md) an |
| **ChatGPT oder ein anderer Chat-Assistent** | Lade [`idea-to-launch-prompt.md`](../install.md#chatgpt-and-other-chat-assistants) in ein Projekt oder einen eigenen GPT hoch |

Starte dann **dein KI-Tool neu** (oder beginne einen neuen Chat) und sag:

> Ich möchte eine App für mein Geschäft bauen. Kannst du mir helfen?

Die vollständige Anleitung, mit allen Tools und wie du Idea to Launch
aktualisierst oder wieder entfernst, findest du in
[docs/install.md](../install.md).

## Die Schritte

Du musst sie nie beim Namen nennen. Sag einfach, was du möchtest, und der
Assistent wählt den passenden Schritt. Wenn du magst, kannst du einen Schritt
auch direkt aufrufen, zum Beispiel mit `/app-idea` in Claude Code oder
Cursor.

| Schritt | Was passiert | Sag zum Beispiel |
|---|---|---|
| **app-builder** | Hier fängst du an. Findet heraus, was du brauchst, und macht da weiter, wo du aufgehört hast | „Hilf mir, eine App zu bauen“ · „Lass uns weitermachen“ |
| **app-idea** | Ein kurzes Gespräch darüber, für wen es ist und was die kleinste nützliche Version ist, gespeichert als einseitige Kurzbeschreibung | „Ich habe eine Idee für …“ |
| **app-plan** | Was jede Person damit tun kann, eine einseitige Funktionsbeschreibung und ein Plan, den du freigibst | „Wie sieht der Plan aus?“ |
| **app-design** | Drei Entwürfe zur Auswahl, danach ein einheitlicher Stil | „Wie soll es aussehen?“ |
| **app-build** | Baut die App Schritt für Schritt, in der Reihenfolge, in der du sie funktionieren siehst | „Bau es“ · „Füg eine Buchungsseite hinzu“ |
| **app-change** | Kleine Änderungen in einer Nachricht, oder aus „Das wollte ich so nicht“ wird eine Liste mit Korrekturen | „Mach den Button grün“ |
| **app-fix** | Findet die eigentliche Ursache eines Problems und behebt nur diese | „Da kommt eine Fehlermeldung, wenn ich …“ |
| **app-review** | Prüft wie ein Entwickler und wie jemand, der die App zum ersten Mal nutzt | „Ist es bereit für Kunden?“ |
| **app-launch** | Bringt die App sicher online, mit deiner Zustimmung bei jedem Schritt, der sich nicht rückgängig machen lässt | „Stell es online“ |

## Dein Projekt merkt sich alles

Alles Wichtige wird als einfache Seiten in einem Ordner `product/` in deinem
Projekt gespeichert: die Kurzbeschreibung, der Plan, das Design,
Entscheidungen, Prüfergebnisse und der nächste Schritt. Schließ den Chat,
komm nächste Woche wieder oder wechsle von Claude zu Codex, und dein
Assistent macht da weiter, wo du aufgehört hast. In reinen Chat-Apps bekommst
du diese Seiten stattdessen zum Aufbewahren.

## Deine Sprache

- Der Assistent **spricht mit dir in deiner Sprache**: in der, in der du
  schreibst.
- Die App spricht **die Sprache deiner Kundschaft**, die eine andere sein
  kann, oder auch mehrere Sprachen gleichzeitig.
- Der Code bleibt auf Englisch, damit später jede Entwicklerin und jeder
  Entwickler übernehmen kann.

Getestet ist es in 20 Sprachen: English, 简体中文, 繁體中文, Español, हिन्दी,
العربية, Português, Français, Русский, 日本語, Deutsch, Bahasa Indonesia,
Tiếng Việt, 한국어, Türkçe, Italiano, ไทย, Polski, Nederlands und
Українська. Andere funktionieren meist auch.

## Versprechen, die es hält

- **Einfache Worte.** Kein Fachchinesisch. Fachbegriffe werden einmal
  erklärt, und zwar dann, wenn sie zum ersten Mal gebraucht werden.
- **Du entscheidest, was zählt.** Alles, was sich schwer rückgängig machen
  lässt (Daten löschen, wer was sehen darf, Zahlungen, E-Mails an Kunden,
  online gehen), wartet immer auf deine ausdrückliche Antwort. Kleine,
  umkehrbare Dinge werden für dich entschieden, damit du nicht in Fragen
  versinkst.
- **Ehrliche Ergebnisse.** Der Assistent sagt erst dann, dass etwas
  funktioniert, wenn er es wirklich ausprobiert hat, und er sagt dir, was er
  nicht prüfen konnte.
- **Sorgsam mit den Daten deiner Kundschaft.** Standardmäßig privat,
  Änderungen, die nie gespeicherte Informationen löschen, und Passwörter und
  Schlüssel bleiben aus dem Code heraus.
- **Es gehört dir.** Üblicher, gut lesbarer Code und Notizen als einfacher
  Text. Keine Bindung an einen Anbieter, kein Konto, kein Tracking.

## Gut zu wissen

- Um eine echte App zu bauen, brauchst du ein Tool, das mit Dateien auf
  deinem Computer arbeiten kann: Claude Code (oder den Code-Tab in Claude
  Desktop), Codex, Cursor, Gemini CLI, Copilot und ähnliche. Reine Chat-Apps
  schaffen die Planung und einen klickbaren Prototyp.
- Es gelten der normale Tarif und die Nutzungslimits deines KI-Tools.
  Hosting und ein Domainname kosten meist ein paar Euro im Monat, sobald
  deine App online ist. Der Assistent sagt dir Bescheid, bevor etwas Geld
  kostet.
- Es ist ein sorgfältiger Assistent, aber kein Anwalt und kein
  Steuerberater. Bei Zahlungen, Gesundheitsdaten oder allem, was gesetzlich
  geregelt ist, sagt er dir, wann du eine Fachperson brauchst.

## Mehr erfahren

- [Installation für jedes Tool](../install.md)
- [So funktioniert es](../how-it-works.md)
- [Fragen und Antworten](../faq.md)
- [Mitmachen](../../CONTRIBUTING.md): die Skills verbessern, ein Tool
  hinzufügen oder übersetzen

## Lizenz

[MIT](../../LICENSE). Du darfst es kostenlos nutzen, ändern und weitergeben.
