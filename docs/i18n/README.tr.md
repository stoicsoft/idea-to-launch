# Software Builder

**Kod yazmayı öğrenmeden fikrini çalışan bir yazılıma dönüştür.**

Software Builder, zaten kullandığın yapay zekâ asistanı için ücretsiz bir
beceri setidir: Claude, Codex, Cursor, Gemini, GitHub Copilot ve
[15 araç daha](../install.md#every-supported-tool). Fikrini kendi
kelimelerinle, kendi dilinde anlat. Asistanın sana birkaç yerinde soru sorar,
onaylaman için tek sayfalık bir plan yazar, uygulamayı yapar, gerçek bir
müşterinin deneyeceği gibi dener ve internette yayınlamana yardım eder.

**Diller:** [English](../../README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [Tiếng Việt](README.vi.md) · [한국어](README.ko.md) · **Türkçe** · [Italiano](README.it.md) · [ไทย](README.th.md) · [Polski](README.pl.md) · [Nederlands](README.nl.md) · [Українська](README.uk.md)

_Bu bir çeviridir. Asıl kaynak [İngilizce sürüm](../../README.md); o sürüm daha güncel olabilir._

## Nasıl bir deneyim?

> **Sen:** Küçük bir tırnak salonum var. Düzenli müşterilerim bana mesaj atarak
> randevu alıyor ve ben işin içinden çıkamıyorum. Bunun için bir şey yapabilir
> misin?
>
> **Asistan:** Evet. Doğru şeyi yapalım diye önce birkaç kısa soru. **1. En sık
> kim randevu alıyor?** a) Seni zaten tanıyan düzenli müşteriler (önerilen) ·
> b) Seni internette bulan yeni müşteriler · …

Birkaç tur sonra elinde şunlar olur:
- fikrini senin kelimelerinle anlatan **tek sayfalık bir özet**: "Mai'in
  düzenli müşterilerinin ona mesaj atmadan boş bir saat seçebildiği bir randevu
  sayfası";
- daha hiçbir şey yapılmadan önce **onayladığın bir plan**;
- üç seçenek arasından **seçtiğin bir görünüm**;
- açıp deneyebileceğin, inandırıcı örnek içeriklerle dolu, müşterilerinin
  dilinde **çalışan bir uygulama**;
- deneyimli bir yazılımcının ve uygulamayı telefonda ilk kez açan bir
  müşterinin gözünden **dürüst bir kontrol**;
- kendi adresinde **yayına çıkmak için adım adım yardım**; sen açıkça "evet"
  demeden hiçbir şey internete çıkmaz, para harcanmaz ve gerçek müşterilere
  dokunulmaz.

## Kurulum

Kullandığın aracı seç. Her seçenek aynı becerileri kurar.

| Aracın | Nasıl kurulur |
|---|---|
| **Her araç, tek komut** ([Node.js](https://nodejs.org) gerekir) | `npx github:OWNER/REPO` yapay zekâ araçlarını bulur ve becerileri hepsine birden kurar |
| **Mac veya Linux, Node.js olmadan** | `curl -fsSL https://raw.githubusercontent.com/OWNER/REPO/main/install.sh \| bash` |
| **Windows** (PowerShell) | `irm https://raw.githubusercontent.com/OWNER/REPO/main/install.ps1 \| iex` |
| **Claude Code** | `/plugin marketplace add OWNER/REPO`, ardından `/plugin install software-builder@software-builder` |
| **Claude Desktop** (sohbet) veya claude.ai | [Releases](https://github.com/OWNER/REPO/releases) sayfasından zip dosyalarını indir, sonra her biri için **Settings → Capabilities → Skills → Upload skill** yolunu izle (Ayarlar → Yetenekler → Beceriler → Beceri yükle; [ayrıntılar](../install.md#claude-desktop-and-claudeai)) |
| **Codex** (uygulama veya komut satırı) | `codex plugin marketplace add OWNER/REPO`, ardından `codex plugin add software-builder@software-builder` |
| **Cursor, Gemini CLI, Copilot, Windsurf, OpenCode, Kiro…** | Yukarıdaki tek komutluk kurulum ya da [tüm araçlar](../install.md) |
| **ChatGPT veya başka bir sohbet asistanı** | [`software-builder-prompt.md`](../install.md#chatgpt-and-other-chat-assistants) dosyasını bir projeye ya da kendi GPT'ne (custom GPT) yükle |

Sonra **yapay zekâ aracını yeniden başlat** (ya da yeni bir sohbet aç) ve şunu
yaz:

> İşletmem için bir uygulama yapmak istiyorum. Yardım eder misin?

Her aracı, güncellemeyi ve kaldırmayı anlatan tam rehber
[docs/install.md](../install.md) dosyasında.

## Adımlar

Bunları adlarıyla çağırman hiç gerekmez. Ne istediğini söylemen yeterli,
asistan doğru adımı kendisi seçer. İstersen bir adımı doğrudan da
çağırabilirsin; örneğin Claude Code ya da Cursor'da `/app-idea` yazarak.

| Adım | Ne olur | Şöyle bir şey söyle |
|---|---|---|
| **app-builder** | Buradan başla. Neye ihtiyacın olduğunu anlar ve kaldığın yerden devam eder | "Bir uygulama yapmama yardım et" · "Devam edelim" |
| **app-idea** | Kimin için olduğu ve işe yarayan en küçük sürüm hakkında kısa bir sohbet; sonuç tek sayfalık bir özet olarak kaydedilir | "Bir fikrim var…" |
| **app-plan** | Her kişinin neler yapabileceği, tek sayfalık bir tanım ve onayladığın bir plan | "Plan ne?" |
| **app-design** | Seçebileceğin üç görünüm, ardından tutarlı tek bir stil | "Nasıl görünmeli?" |
| **app-build** | Uygulamayı adım adım, çalıştığını göreceğin sırayla yapar | "Yapmaya başla" · "Bir randevu sayfası ekle" |
| **app-change** | Tek mesajla küçük değişiklikler yapar ya da "istediğim bu değildi" dediğin şeyi bir düzeltme listesine çevirir | "Butonu yeşil yap" |
| **app-fix** | Bir sorunun gerçek nedenini bulur ve yalnızca onu düzeltir | "Şunu yapınca hata veriyor…" |
| **app-review** | Hem bir yazılımcı gibi hem de ilk kez gelen bir müşteri gibi kontrol eder | "Müşterilere hazır mı?" |
| **app-launch** | Geri dönüşü olmayan her adımda onayını alarak güvenle yayına alır | "Yayına al" |

## Projen her şeyi hatırlar

Önemli olan her şey, projenin içindeki `product/` klasöründe basit sayfalar
olarak saklanır: özet, plan, görünüm, kararlar, kontrol sonuçları ve sıradaki
adım. Sohbeti kapat, haftaya geri gel ya da Claude'dan Codex'e geç; asistanın
kaldığın yerden devam eder. Yalnızca sohbet olan uygulamalarda ise bu sayfaları
saklaman için sana verir.

## Senin dilin

- Asistan **seninle senin dilinde konuşur**: hangi dilde yazarsan o dilde.
- Uygulama **müşterilerinin dilini** konuşur; bu senin dilinden farklı
  olabilir, hatta aynı anda birkaç dil olabilir.
- Kod İngilizce kalır, böylece ileride herhangi bir yazılımcı işi devralabilir.

20 dilde test edildi: English, 简体中文, 繁體中文, Español, हिन्दी,
العربية, Português, Français, Русский, 日本語, Deutsch, Bahasa Indonesia,
Tiếng Việt, 한국어, Türkçe, Italiano, ไทย, Polski, Nederlands ve
Українська. Diğer diller de genellikle sorunsuz çalışır.

## Tuttuğu sözler

- **Sade bir dil.** Jargon yok. Teknik kelimeler, ilk gerektikleri anda bir
  kez açıklanır.
- **Önemli olana sen karar verirsin.** Geri alınması zor her şey (verileri
  silmek, kimin neyi görebileceği, ödemeler, müşterilere giden e-postalar,
  yayına çıkmak) her zaman senin açık cevabını bekler. Küçük ve geri alınabilir
  şeylere senin yerine karar verilir; böylece soruların altında kalmazsın.
- **Dürüst sonuçlar.** Bir şeyin çalıştığını ancak gerçekten denedikten sonra
  söyler ve neyi kontrol edemediğini de sana anlatır.
- **Müşterilerinin verileri güvende.** Varsayılan olarak her şey gizlidir,
  değişiklikler kaydedilmiş bilgileri asla silmez, şifreler ve anahtarlar koda
  konmaz.
- **Her şey senin.** Standart, okunabilir kod ve düz metin notlar. Hiçbir
  hizmete bağlı kalmazsın; hesap yok, takip yok.

## Bilmekte fayda var

- Gerçek bir uygulama yapmak için bilgisayarındaki dosyalarla çalışabilen bir
  araç gerekir: Claude Code (ya da Claude Desktop'taki Code sekmesi), Codex,
  Cursor, Gemini CLI, Copilot ve benzerleri. Yalnızca sohbet olan uygulamalar
  planlamayı ve tıklanabilir bir prototipi yapabilir.
- Yapay zekâ aracının normal planı ve kullanım sınırları geçerlidir. Yayına
  çıktıktan sonra barındırma (hosting) ve alan adı (sitenin adresi) genellikle
  ayda birkaç dolar tutar. Asistan, bir şey para tutmadan önce sana söyler.
- Dikkatli bir asistandır ama avukat ya da muhasebeci değildir. Ödemeler,
  sağlık verileri ya da yasal kurallara tabi herhangi bir konuda bir uzmana ne
  zaman ihtiyacın olduğunu söyler.

## Daha fazlası

- [Her araca kurulum](../install.md)
- [Nasıl çalışır?](../how-it-works.md)
- [Sorular ve cevaplar](../faq.md)
- [Katkıda bulun](../../CONTRIBUTING.md): becerileri geliştir, bir araç ekle ya da çeviri yap

## Lisans

[MIT](../../LICENSE). Kullanmak, değiştirmek ve paylaşmak serbest.
