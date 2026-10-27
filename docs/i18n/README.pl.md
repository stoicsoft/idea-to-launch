# Idea to Launch

**Zamień swój pomysł w działający program – bez nauki programowania.**

Idea to Launch to darmowy zestaw umiejętności dla asystenta AI, z którego już
korzystasz: Claude, Codex, Cursor, Gemini, GitHub Copilot i
[15 innych narzędzi](../install.md#every-supported-tool). Opisz swój pomysł
własnymi słowami, w swoim języku. Asystent zada ci kilka trafnych pytań,
napisze jednostronicowy plan do twojej akceptacji, zbuduje aplikację, sprawdzi
ją tak, jak zrobiłby to prawdziwy klient, i pomoże ci opublikować ją w
internecie.

**Języki:** [English](../../README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Tiếng Việt](README.vi.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [Italiano](README.it.md) · [ไทย](README.th.md) · **Polski** · [Nederlands](README.nl.md) · [Українська](README.uk.md)

_To jest tłumaczenie. Źródłem jest [wersja angielska](../../README.md) i może być bardziej aktualna._

## Jak to wygląda w praktyce

> **Ty:** Prowadzę mały salon paznokci. Stałe klientki umawiają się, pisząc do
> mnie wiadomości, i już się w tym gubię. Dasz radę coś na to zrobić?
>
> **Asystent:** Jasne. Najpierw kilka krótkich pytań, żebyśmy zbudowali
> dokładnie to, czego trzeba. **1. Kto umawia się najczęściej?** a) Stałe
> klientki, które już cię znają (polecam) · b) Nowe osoby, które znajdują cię w
> internecie · …

Kilka rund później masz:
- **jednostronicowy opis** pomysłu, twoimi słowami: „Strona rezerwacji, na
  której stałe klientki Mai same wybierają wolny termin, bez pisania do niej”;
- **plan do akceptacji**, zanim cokolwiek powstanie;
- **wygląd wybrany przez ciebie** spośród trzech propozycji;
- **działającą aplikację**, którą możesz otworzyć i wypróbować, z wiarygodnymi
  przykładowymi danymi w języku twoich klientów;
- **uczciwą ocenę** z perspektywy doświadczonego programisty i klienta, który
  pierwszy raz otwiera aplikację na telefonie;
- **pomoc krok po kroku przy uruchomieniu** pod twoim własnym adresem – a nic
  nie trafi do internetu, nie będzie kosztować pieniędzy ani nie dotknie
  prawdziwych klientów bez twojego wyraźnego „tak”.

## Instalacja

Skopiuj jedną linijkę do terminala na swoim komputerze. To polecenie samo
znajdzie zainstalowane u ciebie narzędzia AI (Claude Code, Codex, Cursor,
Gemini CLI, Copilot i [15 innych](../install.md#every-supported-tool)) i doda
umiejętności do wszystkich naraz. Kopiuje tylko pliki tekstowe, nie wymaga
uprawnień administratora, a usunąć wszystko możesz w dowolnej chwili.

**Na Macu** (lub w Linuksie): otwórz **Terminal** (naciśnij ⌘ Space, wpisz
`Terminal`, naciśnij Enter), wklej tę linijkę i naciśnij Enter:

```sh
curl -fsSL https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.sh | bash
```

**W Windowsie:** otwórz **PowerShell** (naciśnij klawisz Windows, wpisz
`PowerShell`, naciśnij Enter), wklej tę linijkę i naciśnij Enter:

```powershell
irm https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.ps1 | iex
```

Potem **uruchom ponownie swoje narzędzie AI** (albo zacznij nowy czat) i
napisz:

> Chcę zbudować aplikację dla swojej firmy. Pomożesz?

Jeśli już używasz Node.js, `npx github:stoicsoft/idea-to-launch` robi to samo.

### Inne sposoby instalacji

| Twoje narzędzie | Jak zainstalować |
|---|---|
| **Claude Code**, jako wtyczka | `/plugin marketplace add stoicsoft/idea-to-launch`, a potem `/plugin install idea-to-launch@idea-to-launch` |
| **Codex** (aplikacja lub wiersz poleceń), jako wtyczka | `codex plugin marketplace add stoicsoft/idea-to-launch`, a potem `codex plugin add idea-to-launch@idea-to-launch` |
| **Gemini CLI**, jako rozszerzenie | `gemini extensions install https://github.com/stoicsoft/idea-to-launch` |
| **Claude Desktop** (czat) lub claude.ai | Polecenie powyżej nie zainstaluje tu umiejętności. Pobierz pliki zip ze strony [Releases](https://github.com/stoicsoft/idea-to-launch/releases), a potem dodaj każdy z nich przez **Settings → Capabilities → Skills → Upload skill** („Ustawienia → Możliwości → Umiejętności → Prześlij umiejętność”; [szczegóły](../install.md#claude-desktop-and-claudeai)) |
| **ChatGPT lub inny asystent czatowy** | Prześlij [`idea-to-launch-prompt.md`](../install.md#chatgpt-and-other-chat-assistants) do projektu albo do własnego GPT (custom GPT) |

Pełny przewodnik – ze wszystkimi narzędziami, opisem, jak wybrać, które
narzędzia dostaną umiejętności, oraz jak je zaktualizować lub usunąć –
znajdziesz w [docs/install.md](../install.md).

## Kroki

Nie musisz wywoływać ich po nazwie. Po prostu powiedz, czego chcesz, a asystent
sam wybierze właściwy krok. Jeśli wolisz, możesz wywołać krok bezpośrednio, na
przykład wpisując `/app-idea` w narzędziach Claude Code i Cursor.

| Krok | Co się dzieje | Powiedz na przykład |
|---|---|---|
| **app-builder** | Od tego zacznij. Ustala, czego potrzebujesz, i wraca do przerwanej pracy | „Pomóż mi zbudować aplikację” · „Kontynuujmy” |
| **app-idea** | Krótka rozmowa o tym, dla kogo to jest i jaka jest najmniejsza przydatna wersja, zapisana jako jednostronicowy opis | „Mam pomysł na…” |
| **app-plan** | Co każda osoba będzie mogła zrobić, jednostronicowy opis działania i plan do twojej akceptacji | „Jaki jest plan?” |
| **app-design** | Trzy propozycje wyglądu do wyboru, a potem jeden spójny styl | „Jak to ma wyglądać?” |
| **app-build** | Buduje aplikację krok po kroku, w kolejności, w jakiej zobaczysz, że działa | „Buduj” · „Dodaj stronę rezerwacji” |
| **app-change** | Drobne zmiany w jednej wiadomości albo „to nie to, o co mi chodziło” zamienione w listę poprawek | „Zmień przycisk na zielony” |
| **app-fix** | Znajduje prawdziwą przyczynę problemu i naprawia tylko ją | „Wyskakuje błąd, kiedy…” |
| **app-review** | Sprawdza aplikację okiem programisty i klienta, który widzi ją pierwszy raz | „Czy to już jest gotowe dla klientów?” |
| **app-launch** | Bezpiecznie publikuje aplikację w internecie i pyta o zgodę przed każdym krokiem, którego nie da się cofnąć | „Opublikuj to w internecie” |

## Twój projekt pamięta

Wszystko, co ważne, zapisuje się jako proste strony w folderze `product/` w
twoim projekcie: opis pomysłu, plan, wygląd, decyzje, wyniki sprawdzeń i
następny krok. Zamknij czat, wróć za tydzień albo przesiądź się z Claude na
Codex, a asystent podejmie pracę dokładnie tam, gdzie została przerwana. W
aplikacjach, które mają tylko czat, zamiast tego daje ci te strony do
zachowania.

## Twój język

- Asystent **rozmawia z tobą w twoim języku**, czyli w tym, w którym piszesz.
- Aplikacja mówi **językiem twoich klientów**, który może być inny niż twój,
  a może to być nawet kilka języków naraz.
- Kod pozostaje po angielsku, żeby później każdy programista mógł go przejąć.

Idea to Launch jest testowany w 20 językach: English, 简体中文, 繁體中文, Español,
हिन्दी, العربية, Português, Français, Русский, 日本語, Deutsch, Bahasa Indonesia,
Tiếng Việt, 한국어, Türkçe, Italiano, ไทย, Polski, Nederlands i
Українська. Inne zwykle też działają.

## Obietnice, których dotrzymuje

- **Proste słowa.** Bez żargonu. Techniczne pojęcia są wyjaśniane raz, wtedy,
  gdy pierwszy raz są potrzebne.
- **To ty decydujesz o tym, co ważne.** Wszystko, czego nie da się łatwo
  cofnąć (usuwanie danych, kto co widzi, płatności, e-maile do klientów,
  publikacja w internecie), zawsze czeka na twoją wyraźną odpowiedź. Drobne
  sprawy, które łatwo odwrócić, są rozstrzygane za ciebie, żeby nie zasypywać
  cię pytaniami.
- **Uczciwe wyniki.** Mówi, że coś działa, dopiero gdy naprawdę to wypróbuje,
  i informuje, czego nie udało się sprawdzić.
- **Dba o dane twoich klientów.** Domyślnie wszystko jest prywatne, zmiany
  nigdy nie usuwają zapisanych informacji, a hasła i klucze dostępu nie trafiają
  do kodu.
- **Wszystko należy do ciebie.** Standardowy, czytelny kod i notatki zwykłym
  tekstem. Bez przywiązania do jednego dostawcy, bez zakładania konta, bez
  śledzenia.

## Warto wiedzieć

- Do zbudowania prawdziwej aplikacji potrzebujesz narzędzia, które potrafi
  pracować z plikami na twoim komputerze: Claude Code (albo karta Code w Claude
  Desktop), Codex, Cursor, Gemini CLI, Copilot i podobne. Aplikacje, które mają
  tylko czat, poradzą sobie z planowaniem i prototypem, który da się przeklikać.
- Obowiązują zwykły plan i limity użycia twojego narzędzia AI. Hosting i domena
  (adres strony) kosztują zwykle kilka dolarów miesięcznie, kiedy już
  wystartujesz. Asystent uprzedzi cię, zanim cokolwiek zacznie kosztować.
- To staranny asystent, a nie prawnik czy księgowy. Przy płatnościach, danych
  o zdrowiu czy czymkolwiek, co regulują przepisy, powie ci, kiedy potrzebujesz
  specjalisty.

## Dowiedz się więcej

- [Instalacja w każdym narzędziu](../install.md)
- [Jak to działa](../how-it-works.md)
- [Pytania i odpowiedzi](../faq.md)
- [Jak pomóc](../../CONTRIBUTING.md): ulepsz umiejętności, dodaj narzędzie albo przetłumacz

## Licencja

[MIT](../../LICENSE). Możesz za darmo używać, zmieniać i udostępniać dalej.
