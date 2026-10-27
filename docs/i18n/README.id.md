# Software Builder

**Wujudkan idemu jadi software yang benar-benar jalan, tanpa perlu belajar coding.**

Software Builder adalah kumpulan skill gratis untuk asisten AI yang sudah kamu
pakai: Claude, Codex, Cursor, Gemini, GitHub Copilot, dan
[15 aplikasi lainnya](../install.md#every-supported-tool). Ceritakan idemu
dengan kata-katamu sendiri, dalam bahasamu sendiri. Asistenmu akan mengajukan
beberapa pertanyaan yang tepat, menulis rencana satu halaman untuk kamu
setujui, membuatnya, mengeceknya seperti pelanggan sungguhan, lalu membantumu
meluncurkannya di internet.

**Bahasa:** [English](../../README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · **Bahasa Indonesia** · [Tiếng Việt](README.vi.md) · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [Italiano](README.it.md) · [ไทย](README.th.md) · [Polski](README.pl.md) · [Nederlands](README.nl.md) · [Українська](README.uk.md)

Versi aslinya adalah [README bahasa Inggris](../../README.md), dan versi itu mungkin lebih baru daripada terjemahan ini.

## Seperti apa rasanya

> **Kamu:** Saya punya salon kuku kecil. Pelanggan tetap saya booking lewat
> chat, jadi sering ada yang terlewat. Bisa bikinkan sesuatu untuk itu?
>
> **Asisten:** Bisa. Saya tanya beberapa hal dulu, ya, supaya yang kita buat
> pas. **1. Siapa yang paling sering booking?** a) Pelanggan tetap yang sudah
> kenal kamu (disarankan) · b) Pelanggan baru yang menemukanmu di internet · …

Setelah beberapa putaran, kamu akan punya:
- **ringkasan satu halaman** tentang idemu, dengan kata-katamu sendiri:
  "Halaman booking supaya pelanggan tetap Sari bisa memilih jam kosong tanpa
  perlu chat dia";
- **rencana yang kamu setujui** sebelum apa pun mulai dibuat;
- **tampilan yang kamu pilih** dari tiga pilihan;
- **aplikasi yang berfungsi** yang bisa kamu buka dan coba, lengkap dengan
  contoh isi yang terasa nyata, dalam bahasa pelangganmu;
- **pengecekan yang jujur** dari sudut pandang seorang programmer senior dan
  seorang pelanggan yang baru pertama kali memakainya di HP;
- **bantuan langkah demi langkah untuk meluncurkannya** di alamat situsmu
  sendiri, dan tidak ada yang tayang online, memakan biaya, atau menyentuh
  pelanggan sungguhan tanpa "ya" yang jelas darimu.

## Cara memasang

Pilih aplikasi AI yang kamu pakai. Semua cara memasang skill yang sama.

| Aplikasi AI-mu | Cara memasang |
|---|---|
| **Aplikasi apa pun, satu perintah** (butuh [Node.js](https://nodejs.org)) | `npx github:OWNER/REPO` mencari aplikasi AI-mu dan memasang ke semuanya |
| **Mac atau Linux, tanpa Node.js** | `curl -fsSL https://raw.githubusercontent.com/OWNER/REPO/main/install.sh \| bash` |
| **Windows** (PowerShell) | `irm https://raw.githubusercontent.com/OWNER/REPO/main/install.ps1 \| iex` |
| **Claude Code** | `/plugin marketplace add OWNER/REPO`, lalu `/plugin install software-builder@software-builder` |
| **Claude Desktop** (chat) atau claude.ai | Unduh file zip dari [Releases](https://github.com/OWNER/REPO/releases), lalu untuk setiap file buka **Settings → Capabilities → Skills → Upload skill** (Pengaturan → Kemampuan → Skill → Unggah skill) ([detail](../install.md#claude-desktop-and-claudeai)) |
| **Codex** (aplikasi atau CLI) | `codex plugin marketplace add OWNER/REPO`, lalu `codex plugin add software-builder@software-builder` |
| **Cursor, Gemini CLI, Copilot, Windsurf, OpenCode, Kiro…** | Cara satu perintah di atas, atau lihat [semua aplikasi](../install.md) |
| **ChatGPT atau asisten chat lain** | Unggah [`software-builder-prompt.md`](../install.md#chatgpt-and-other-chat-assistants) ke sebuah proyek atau GPT kustom |

Lalu **buka ulang aplikasi AI-mu** (atau mulai chat baru) dan tulis:

> Saya ingin membuat aplikasi untuk usaha saya. Bisa bantu?

Panduan lengkapnya, untuk semua aplikasi beserta cara memperbarui atau
menghapusnya, ada di [docs/install.md](../install.md).

## Langkah-langkahnya

Kamu tidak perlu memanggil langkah-langkah ini dengan namanya. Cukup bilang
apa yang kamu mau, dan asisten akan memilih langkah yang tepat. Kalau mau,
kamu juga bisa memanggil satu langkah secara langsung, misalnya `/app-idea`
di Claude Code atau Cursor.

| Langkah | Apa yang terjadi | Coba bilang |
|---|---|---|
| **app-builder** | Mulai dari sini. Mencari tahu apa yang kamu butuhkan, dan melanjutkan dari tempat kamu berhenti | "Bantu saya bikin aplikasi" · "Ayo lanjut" |
| **app-idea** | Wawancara singkat tentang untuk siapa aplikasinya dan versi terkecil yang sudah berguna, lalu disimpan sebagai ringkasan satu halaman | "Saya punya ide untuk…" |
| **app-plan** | Apa saja yang bisa dilakukan tiap orang, rincian satu halaman, dan rencana yang kamu setujui | "Rencananya bagaimana?" |
| **app-design** | Tiga tampilan untuk dipilih, lalu satu gaya yang seragam | "Tampilannya sebaiknya seperti apa?" |
| **app-build** | Membuatnya langkah demi langkah, sesuai urutan yang akan kamu lihat berjalan | "Buatkan" · "Tambahkan halaman booking" |
| **app-change** | Perubahan kecil cukup dengan satu pesan, atau "ini bukan yang saya mau" diubah jadi daftar perbaikan | "Ubah tombolnya jadi hijau" |
| **app-fix** | Menemukan penyebab sebenarnya dari masalah dan memperbaiki itu saja | "Muncul error waktu saya…" |
| **app-review** | Mengecek seperti programmer dan seperti pelanggan yang baru pertama kali mencoba | "Sudah siap dipakai pelanggan?" |
| **app-launch** | Meluncurkannya online dengan aman, dengan persetujuanmu di setiap langkah yang tidak bisa dibatalkan | "Ayo luncurkan" |

## Proyekmu selalu ingat

Semua hal penting disimpan sebagai halaman-halaman sederhana di folder
`product/` di dalam proyekmu: ringkasan, rencana, tampilan, keputusan, hasil
pengecekan, dan langkah berikutnya. Tutup chat-nya, kembali minggu depan,
atau pindah dari Claude ke Codex, asistenmu tetap melanjutkan dari tempat
kamu berhenti. Di aplikasi yang cuma bisa chat, asisten akan memberimu
halaman-halaman ini untuk kamu simpan sendiri.

## Bahasamu

- Asisten **bicara denganmu dalam bahasamu**: bahasa apa pun yang kamu pakai
  untuk menulis.
- Aplikasinya memakai **bahasa pelangganmu**, yang bisa saja berbeda, atau
  beberapa bahasa sekaligus.
- Kodenya tetap dalam bahasa Inggris, supaya nanti programmer mana pun bisa
  melanjutkannya.

Sudah diuji dalam 20 bahasa: English, 简体中文, 繁體中文, Español, हिन्दी,
العربية, Português, Français, Русский, 日本語, Deutsch, Bahasa Indonesia,
Tiếng Việt, 한국어, Türkçe, Italiano, ไทย, Polski, Nederlands, dan
Українська. Bahasa lain biasanya juga bisa.

## Janji yang selalu ditepati

- **Bahasa sederhana.** Tanpa istilah yang bikin bingung. Kata teknis
  dijelaskan sekali, saat pertama kali dibutuhkan.
- **Kamu yang memutuskan hal penting.** Apa pun yang sulit dibatalkan
  (menghapus data, siapa bisa melihat apa, pembayaran, email ke pelanggan,
  mulai online) selalu menunggu jawaban tegas darimu. Hal kecil yang bisa
  dikembalikan akan diputuskan untukmu, supaya kamu tidak kebanjiran
  pertanyaan.
- **Hasil yang jujur.** Asisten hanya bilang sesuatu sudah berfungsi setelah
  benar-benar mencobanya, dan memberi tahu apa yang tidak bisa ia cek.
- **Aman untuk data pelangganmu.** Privat sejak awal, perubahan yang tidak
  pernah menghapus informasi yang sudah tersimpan, dan data rahasia dijauhkan
  dari kode.
- **Milikmu.** Kode standar yang mudah dibaca dan catatan berupa teks biasa.
  Tidak mengikatmu ke satu layanan, tidak perlu akun, tidak ada pelacakan.

## Perlu diketahui

- Untuk membuat aplikasi sungguhan, kamu butuh aplikasi AI yang bisa bekerja
  dengan file di komputermu: Claude Code (atau tab Code di Claude Desktop),
  Codex, Cursor, Gemini CLI, Copilot, dan sejenisnya. Aplikasi yang cuma bisa
  chat bisa membantu menyusun rencana dan membuat contoh aplikasi yang bisa
  diklik.
- Paket dan batas pemakaian biasa dari aplikasi AI-mu tetap berlaku. Begitu
  online, hosting dan nama domain biasanya makan biaya beberapa dolar per
  bulan. Asisten akan memberi tahu sebelum ada yang memakan biaya.
- Asisten ini teliti, tapi bukan pengacara atau akuntan. Untuk pembayaran,
  data kesehatan, atau apa pun yang diatur aturan khusus, asisten akan
  memberi tahu kapan kamu perlu bantuan tenaga profesional.

## Pelajari lebih lanjut

- [Cara memasang di semua aplikasi AI](../install.md)
- [Cara kerjanya](../how-it-works.md)
- [Tanya jawab](../faq.md)
- [Berkontribusi](../../CONTRIBUTING.md): perbaiki skill, tambahkan aplikasi AI, atau bantu menerjemahkan

## Lisensi

[MIT](../../LICENSE). Bebas dipakai, diubah, dan dibagikan.
