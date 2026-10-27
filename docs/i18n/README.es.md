# Idea to Launch

**Convierte tu idea en software que funciona, sin aprender a programar.**

Idea to Launch es un conjunto gratuito de habilidades (skills) para el
asistente de IA que ya usas: Claude, Codex, Cursor, Gemini, GitHub Copilot y
[15 herramientas más](../install.md#every-supported-tool). Cuéntale tu idea
con tus propias palabras y en tu propio idioma. Tu asistente te hace unas
cuantas preguntas clave, escribe un plan de una página para que lo apruebes,
lo construye, lo revisa como lo haría un cliente de verdad y te ayuda a
publicarlo en internet.

**Idiomas:** [English](../../README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · **Español** · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Tiếng Việt](README.vi.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [Italiano](README.it.md) · [ไทย](README.th.md) · [Polski](README.pl.md) · [Nederlands](README.nl.md) · [Українська](README.uk.md)

*El [README en inglés](../../README.md) es el texto original y puede estar más actualizado que esta traducción.*

## Así es usarlo

> **Tú:** Tengo un pequeño salón de uñas. Mis clientes habituales reservan
> escribiéndome mensajes y termino perdiendo la cuenta. ¿Me puedes hacer algo
> para eso?
>
> **Asistente:** Sí. Primero, unas preguntas rápidas para construir justo lo
> que necesitas. **1. ¿Quién reserva más a menudo?** a) Clientes habituales
> que ya te conocen (recomendado) · b) Clientes nuevos que te encuentran en
> internet · …

Unas cuantas rondas después, tienes:
- **un resumen de una página** de tu idea, con tus palabras: "Una página de
  reservas donde los clientes habituales de Mai eligen un horario libre sin
  tener que escribirle";
- **un plan que tú apruebas** antes de construir nada;
- **un estilo que eliges** entre tres opciones;
- **una app que funciona**, que puedes abrir y probar, con contenido de
  ejemplo creíble, en el idioma de tus clientes;
- **una revisión honesta** desde el punto de vista de un ingeniero con
  experiencia y de un cliente que la usa por primera vez en su teléfono;
- **ayuda paso a paso para publicarla** en tu propia dirección web, y nada se
  publica, cuesta dinero ni llega a clientes reales sin tu "sí" claro.

## Instalación

Elige la herramienta que usas. Todas las opciones instalan las mismas
habilidades.

| Tu herramienta | Cómo instalar |
|---|---|
| **Cualquier herramienta, con un solo comando** (necesita [Node.js](https://nodejs.org)) | `npx github:OWNER/idea-to-launch` encuentra tus herramientas de IA y se instala en todas |
| **Mac o Linux, sin Node.js** | `curl -fsSL https://raw.githubusercontent.com/OWNER/idea-to-launch/main/install.sh \| bash` |
| **Windows** (PowerShell) | `irm https://raw.githubusercontent.com/OWNER/idea-to-launch/main/install.ps1 \| iex` |
| **Claude Code** | `/plugin marketplace add OWNER/idea-to-launch` y luego `/plugin install idea-to-launch@idea-to-launch` |
| **Claude Desktop** (chat) o claude.ai | Descarga los archivos zip desde [Releases](https://github.com/OWNER/idea-to-launch/releases) y luego, para cada uno, ve a **Settings → Capabilities → Skills → Upload skill** (Configuración → Capacidades → Habilidades → Subir habilidad) ([más detalles](../install.md#claude-desktop-and-claudeai)) |
| **Codex** (app o CLI) | `codex plugin marketplace add OWNER/idea-to-launch` y luego `codex plugin add idea-to-launch@idea-to-launch` |
| **Cursor, Gemini CLI, Copilot, Windsurf, OpenCode, Kiro…** | La instalación con un solo comando de arriba, o consulta [todas las herramientas](../install.md) |
| **ChatGPT o cualquier otro asistente de chat** | Sube [`idea-to-launch-prompt.md`](../install.md#chatgpt-and-other-chat-assistants) a un proyecto o a un GPT personalizado |

Luego **reinicia tu herramienta de IA** (o abre un chat nuevo) y dile:

> Quiero crear una app para mi negocio. ¿Me ayudas?

La guía completa, con todas las herramientas y cómo actualizar o desinstalar
Idea to Launch, está en [docs/install.md](../install.md).

## Los pasos

No tienes que llamarlos por su nombre. Solo di lo que quieres y el asistente
elige el paso adecuado. Si lo prefieres, puedes llamar a un paso
directamente, por ejemplo con `/app-idea` en Claude Code o Cursor.

| Paso | Qué pasa | Dile algo como |
|---|---|---|
| **app-builder** | Empieza aquí. Averigua qué necesitas y retoma donde lo dejaste | "Ayúdame a crear una app" · "Sigamos" |
| **app-idea** | Una entrevista corta sobre para quién es y cuál es la versión más pequeña que ya sirve, guardada como un resumen de una página | "Tengo una idea para…" |
| **app-plan** | Qué podrá hacer cada persona, una descripción detallada de una página y un plan que tú apruebas | "¿Cuál es el plan?" |
| **app-design** | Tres propuestas de estilo para elegir y luego un mismo estilo en toda la app | "¿Cómo debería verse?" |
| **app-build** | La construye paso a paso, en el orden en que la verás funcionar | "Constrúyela" · "Agrega una página de reservas" |
| **app-change** | Cambios pequeños en un solo mensaje, o un "esto no es lo que quería" convertido en una lista de arreglos | "Pon el botón verde" |
| **app-fix** | Encuentra la causa real de un problema y arregla solo eso | "Me sale un error cuando…" |
| **app-review** | La revisa como lo haría un ingeniero y como un cliente que la usa por primera vez | "¿Está lista para mis clientes?" |
| **app-launch** | La publica en internet de forma segura, con tu aprobación en cada paso que no tiene vuelta atrás | "Publícala en internet" |

## Tu proyecto lo recuerda todo

Todo lo importante se guarda como páginas sencillas en una carpeta `product/`
dentro de tu proyecto: el resumen, el plan, el estilo, las decisiones, los
resultados de las revisiones y el siguiente paso. Cierra el chat, vuelve la
semana que viene o cambia de Claude a Codex, y tu asistente seguirá donde lo
dejaste. En las apps que solo tienen chat, te da estas páginas para que las
guardes tú.

## Tu idioma

- El asistente **te habla en tu idioma**: el mismo en el que le escribes.
- La app habla **el idioma de tus clientes**, que puede ser otro, o varios
  idiomas a la vez.
- El código se queda en inglés, para que cualquier programador pueda
  encargarse más adelante.

Está probado en 20 idiomas: English, 简体中文, 繁體中文, Español, हिन्दी,
العربية, Português, Français, Русский, 日本語, Deutsch, Bahasa Indonesia,
Tiếng Việt, 한국어, Türkçe, Italiano, ไทย, Polski, Nederlands y
Українська. Otros también suelen funcionar.

## Lo que promete (y cumple)

- **Palabras sencillas.** Nada de jerga. Las palabras técnicas se explican
  una sola vez, la primera vez que hacen falta.
- **Tú decides lo importante.** Todo lo que sea difícil de deshacer (borrar
  datos, quién puede ver qué, pagos, correos a clientes, publicar en
  internet) siempre espera tu respuesta explícita. Las cosas pequeñas y
  reversibles se deciden por ti, para que no te ahogues en preguntas.
- **Resultados honestos.** Solo dice que algo funciona después de probarlo
  de verdad, y te cuenta lo que no pudo comprobar.
- **Cuida los datos de tus clientes.** Privado por defecto, cambios que nunca
  borran la información guardada, y las contraseñas y claves quedan fuera del
  código.
- **Es tuyo.** Código estándar y fácil de leer, y notas en texto simple. Sin
  ataduras, sin cuentas, sin rastreo.

## Conviene saber

- Para construir una app de verdad necesitas una herramienta que pueda
  trabajar con archivos en tu computadora: Claude Code (o la pestaña Code de
  Claude Desktop), Codex, Cursor, Gemini CLI, Copilot y similares. Las apps
  que solo tienen chat pueden hacer la planificación y un prototipo en el que
  puedes hacer clic.
- Se aplican el plan y los límites de uso normales de tu herramienta de IA.
  El hosting (alojamiento web) y un nombre de dominio suelen costar unos
  pocos dólares al mes una vez que tu app está en internet. El asistente te
  avisa antes de que algo cueste dinero.
- Es un asistente cuidadoso, no un abogado ni un contador. Para pagos, datos
  de salud o cualquier cosa regulada, te dirá cuándo necesitas a un
  profesional.

## Más información

- [Instalar en cada herramienta](../install.md)
- [Cómo funciona](../how-it-works.md)
- [Preguntas y respuestas](../faq.md)
- [Cómo contribuir](../../CONTRIBUTING.md): mejora las habilidades, añade una
  herramienta o traduce

## Licencia

[MIT](../../LICENSE). Puedes usarlo, modificarlo y compartirlo libremente.
