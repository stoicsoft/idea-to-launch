# Software Builder

**Transformez votre idée en logiciel qui fonctionne, sans apprendre à coder.**

Software Builder est un ensemble gratuit de compétences (des « skills ») pour
l'assistant IA que vous utilisez déjà : Claude, Codex, Cursor, Gemini,
GitHub Copilot et [15 autres outils](../install.md#every-supported-tool).
Décrivez votre idée avec vos mots, dans votre langue. Votre assistant vous
pose quelques questions bien choisies, rédige un plan d'une page que vous
validez, construit le tout, le teste comme le ferait un vrai client et vous
aide à le mettre en ligne.

**Langues :** [English](../../README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt-BR.md) · **Français** · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Tiếng Việt](README.vi.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [Italiano](README.it.md) · [ไทย](README.th.md) · [Polski](README.pl.md) · [Nederlands](README.nl.md) · [Українська](README.uk.md)

*Le [README en anglais](../../README.md) est la version de référence et peut être plus à jour que cette traduction.*

## À quoi ça ressemble

> **Vous :** Je tiens un petit salon de manucure. Mes habitués réservent en
> m'envoyant des messages, et je m'y perds. C'est possible de faire quelque
> chose pour ça ?
>
> **Assistant :** Oui. D'abord quelques questions rapides, pour construire
> exactement ce qu'il vous faut. **1. Qui réserve le plus souvent ?** a) Vos
> habitués, qui vous connaissent déjà (recommandé) · b) De nouveaux clients
> qui vous trouvent en ligne · …

Quelques échanges plus tard, vous avez :
- **un résumé d'une page** de votre idée, avec vos mots : « Une page de
  réservation où les habitués de Mai choisissent un créneau libre sans
  avoir à lui écrire » ;
- **un plan que vous validez** avant le début de la construction ;
- **un style que vous avez choisi** parmi trois propositions ;
- **une application qui fonctionne**, que vous pouvez ouvrir et essayer,
  avec des exemples de contenu crédibles, dans la langue de vos clients ;
- **une vérification honnête**, du point de vue d'un ingénieur expérimenté
  et d'un client qui découvre l'application sur son téléphone ;
- **une aide pas à pas pour la mise en ligne** sur votre propre adresse web,
  et rien n'est mis en ligne, ne coûte d'argent ni ne touche de vrais clients
  sans votre « oui » clair.

## Installation

Choisissez l'outil que vous utilisez. Chaque option installe les mêmes
compétences.

| Votre outil | Comment l'installer |
|---|---|
| **N'importe quel outil, une seule commande** (nécessite [Node.js](https://nodejs.org)) | `npx github:OWNER/REPO` trouve vos outils d'IA et s'installe dans chacun d'eux |
| **Mac ou Linux, sans Node.js** | `curl -fsSL https://raw.githubusercontent.com/OWNER/REPO/main/install.sh \| bash` |
| **Windows** (PowerShell) | `irm https://raw.githubusercontent.com/OWNER/REPO/main/install.ps1 \| iex` |
| **Claude Code** | `/plugin marketplace add OWNER/REPO`, puis `/plugin install software-builder@software-builder` |
| **Claude Desktop** (chat) ou claude.ai | Téléchargez les fichiers zip depuis [Releases](https://github.com/OWNER/REPO/releases), puis, pour chacun, allez dans **Settings → Capabilities → Skills → Upload skill** (Paramètres → Capacités → Compétences → Importer une compétence) ([détails](../install.md#claude-desktop-and-claudeai)) |
| **Codex** (app ou CLI) | `codex plugin marketplace add OWNER/REPO`, puis `codex plugin add software-builder@software-builder` |
| **Cursor, Gemini CLI, Copilot, Windsurf, OpenCode, Kiro…** | L'installation en une seule commande ci-dessus, ou consultez [la liste de tous les outils](../install.md) |
| **ChatGPT ou tout autre assistant de chat** | Importez [`software-builder-prompt.md`](../install.md#chatgpt-and-other-chat-assistants) dans un projet ou un GPT personnalisé |

Ensuite, **redémarrez votre outil d'IA** (ou ouvrez une nouvelle
conversation) et dites :

> Je voudrais créer une application pour mon entreprise. Vous pouvez m'aider ?

Le guide complet, avec tous les outils et la façon de mettre à jour ou de
désinstaller Software Builder, se trouve dans [docs/install.md](../install.md).

## Les étapes

Vous n'avez jamais besoin de les appeler par leur nom. Dites simplement ce
que vous voulez, et l'assistant choisit la bonne étape. Si vous préférez,
vous pouvez appeler une étape directement, par exemple `/app-idea` dans
Claude Code ou Cursor.

| Étape | Ce qui se passe | Dites par exemple |
|---|---|---|
| **app-builder** | Le point de départ. Il cerne vos besoins et reprend là où vous en étiez | « Aidez-moi à créer une application » · « On continue » |
| **app-idea** | Un court entretien sur votre public et la plus petite version vraiment utile, enregistré sous forme de résumé d'une page | « J'ai une idée de… » |
| **app-plan** | Ce que chaque personne pourra faire, un cahier des charges d'une page et un plan que vous validez | « Quel est le plan ? » |
| **app-design** | Trois styles au choix, puis un style cohérent partout | « À quoi ça doit ressembler ? » |
| **app-build** | Il la construit pas à pas, dans l'ordre où vous la verrez fonctionner | « Lancez la construction » · « Ajoutez une page de réservation » |
| **app-change** | De petits changements en un seul message, ou un « ce n'est pas ce que je voulais » transformé en liste de corrections | « Mettez le bouton en vert » |
| **app-fix** | Il trouve la vraie cause d'un problème et ne corrige que ça | « Il y a une erreur quand je… » |
| **app-review** | Il vérifie comme le ferait un ingénieur, puis comme un client qui découvre l'application | « Est-ce que c'est prêt pour les clients ? » |
| **app-launch** | Il met en ligne en toute sécurité, avec votre accord à chaque étape sans retour possible | « Mettez-la en ligne » |

## Votre projet garde tout en mémoire

Tout ce qui compte est enregistré sous forme de pages simples dans un dossier
`product/` de votre projet : le résumé, le plan, le style, les décisions, les
résultats des vérifications et la prochaine étape. Fermez la conversation,
revenez la semaine prochaine ou passez de Claude à Codex : votre assistant
reprend là où vous en étiez. Dans les applications de chat uniquement, il
vous donne plutôt ces pages à conserver.

## Votre langue

- L'assistant **vous parle dans votre langue** : celle dans laquelle vous
  écrivez.
- L'application parle **la langue de vos clients**, qui peut être
  différente, ou plusieurs langues à la fois.
- Le code reste en anglais, pour que n'importe quel développeur puisse
  prendre le relais plus tard.

Il est testé dans 20 langues : English, 简体中文, 繁體中文, Español, हिन्दी,
العربية, Português, Français, Русский, 日本語, Deutsch, Bahasa Indonesia,
Tiếng Việt, 한국어, Türkçe, Italiano, ไทย, Polski, Nederlands et
Українська. Les autres fonctionnent généralement aussi.

## Ses engagements

- **Des mots simples.** Pas de jargon. Les mots techniques sont expliqués
  une seule fois, la première fois qu'on en a besoin.
- **Vous décidez de ce qui compte.** Tout ce qui est difficile à annuler
  (supprimer des données, qui peut voir quoi, les paiements, les e-mails aux
  clients, la mise en ligne) attend toujours votre réponse explicite. Les
  petites choses réversibles sont décidées pour vous, pour ne pas vous noyer
  sous les questions.
- **Des résultats honnêtes.** Il n'annonce qu'une chose fonctionne qu'après
  l'avoir vraiment essayée, et il vous dit ce qu'il n'a pas pu vérifier.
- **Les données de vos clients en sécurité.** Privé par défaut, des
  modifications qui n'effacent jamais les informations enregistrées, et des
  mots de passe et clés tenus à l'écart du code.
- **C'est à vous.** Du code standard et lisible, des notes en texte simple.
  Sans engagement, sans compte, sans pistage.

## Bon à savoir

- Pour construire une vraie application, il faut un outil capable de
  travailler avec les fichiers de votre ordinateur : Claude Code (ou l'onglet
  Code de Claude Desktop), Codex, Cursor, Gemini CLI, Copilot et outils
  similaires. Les applications de chat seules peuvent s'occuper de la
  planification et d'un prototype cliquable.
- Les limites habituelles de votre abonnement et de votre outil d'IA
  s'appliquent. L'hébergement et un nom de domaine coûtent en général
  quelques euros par mois, une fois votre application en ligne. L'assistant
  vous prévient avant toute dépense.
- C'est un assistant consciencieux, pas un avocat ni un expert-comptable.
  Pour les paiements, les données de santé ou tout ce qui est réglementé, il
  vous dira quand faire appel à un professionnel.

## En savoir plus

- [Installer sur chaque outil](../install.md)
- [Comment ça marche](../how-it-works.md)
- [Questions et réponses](../faq.md)
- [Contribuer](../../CONTRIBUTING.md) : améliorer les compétences, ajouter un
  outil ou traduire

## Licence

[MIT](../../LICENSE). Libre d'utilisation, de modification et de partage.
