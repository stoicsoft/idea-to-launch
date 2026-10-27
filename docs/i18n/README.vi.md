# Idea to Launch

**Biến ý tưởng của bạn thành phần mềm chạy được, mà không cần học lập trình.**

Idea to Launch là bộ kỹ năng miễn phí cho trợ lý AI bạn đang dùng:
Claude, Codex, Cursor, Gemini, GitHub Copilot và
[15 công cụ khác](../install.md#every-supported-tool). Cứ kể ý tưởng bằng
lời của bạn, bằng ngôn ngữ của chính bạn. Trợ lý sẽ hỏi bạn vài câu thật
trúng ý, viết một bản kế hoạch gọn trong một trang để bạn duyệt, làm ra sản
phẩm, tự dùng thử như một khách hàng thật, rồi giúp bạn đưa nó lên mạng.

**Ngôn ngữ:** [English](../../README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · **Tiếng Việt** · [한국어](README.ko.md) · [Türkçe](README.tr.md) · [Italiano](README.it.md) · [ไทย](README.th.md) · [Polski](README.pl.md) · [Nederlands](README.nl.md) · [Українська](README.uk.md)

Bản gốc là [README tiếng Anh](../../README.md), và bản đó có thể mới hơn bản dịch này.

## Dùng thử sẽ thế nào

> **Bạn:** Tôi có một tiệm nail nhỏ. Khách quen hay nhắn tin cho tôi để
> đặt lịch, mà tôi cứ bị sót. Bạn làm giúp tôi cái gì đó được không?
>
> **Trợ lý:** Được chứ. Cho tôi hỏi nhanh vài câu trước, để mình làm đúng
> thứ bạn cần. **1. Ai hay đặt lịch nhất?** a) Khách quen đã biết bạn
> (nên chọn) · b) Khách mới tìm thấy bạn trên mạng · …

Sau vài lượt trao đổi, bạn sẽ có:
- **một bản tóm tắt một trang** về ý tưởng, bằng lời của bạn: "Trang đặt
  lịch để khách quen của Mai tự chọn giờ trống, không cần nhắn tin cho chị";
- **một kế hoạch bạn duyệt** trước khi bắt tay làm bất cứ thứ gì;
- **một giao diện bạn tự chọn** trong ba mẫu;
- **một ứng dụng chạy được** để bạn mở ra dùng thử, có sẵn nội dung mẫu
  trông như thật, bằng ngôn ngữ của khách hàng bạn;
- **một lần kiểm tra thẳng thắn** dưới góc nhìn của một kỹ sư lâu năm và
  của một khách hàng lần đầu dùng trên điện thoại;
- **hướng dẫn từng bước để chạy thật** trên địa chỉ web của riêng bạn, và
  không có gì được đưa lên mạng, tốn tiền hay đụng tới khách thật khi bạn
  chưa nói "đồng ý" rõ ràng.

## Cài đặt

Chỉ cần chép một dòng vào cửa sổ dòng lệnh (terminal) trên máy tính của bạn.
Lệnh này tự tìm các công cụ AI trên máy (Claude Code, Codex, Cursor,
Gemini CLI, Copilot và [15 công cụ khác](../install.md#every-supported-tool))
rồi thêm bộ kỹ năng vào tất cả. Nó chỉ chép các file văn bản, không cần quyền
quản trị máy (admin), và bạn có thể gỡ bỏ bất cứ lúc nào.

**Trên máy Mac** (hoặc Linux): mở **Terminal** (nhấn ⌘ Space, gõ
`Terminal`, nhấn Enter), dán dòng này vào rồi nhấn Enter:

```sh
curl -fsSL https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.sh | bash
```

**Trên Windows:** mở **PowerShell** (nhấn phím Windows, gõ
`PowerShell`, nhấn Enter), dán dòng này vào rồi nhấn Enter:

```powershell
irm https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.ps1 | iex
```

Sau đó **khởi động lại công cụ AI** (hoặc mở một cuộc trò chuyện mới) và nói:

> Tôi muốn làm một ứng dụng cho việc kinh doanh của mình. Bạn giúp tôi được không?

Nếu bạn đã dùng Node.js, lệnh `npx github:stoicsoft/idea-to-launch` cũng làm
đúng việc này.

### Các cách cài khác

| Công cụ của bạn | Cách cài |
|---|---|
| **Claude Code**, dưới dạng plugin | `/plugin marketplace add stoicsoft/idea-to-launch`, rồi `/plugin install idea-to-launch@idea-to-launch` |
| **Codex** (ứng dụng hoặc CLI), dưới dạng plugin | `codex plugin marketplace add stoicsoft/idea-to-launch`, rồi `codex plugin add idea-to-launch@idea-to-launch` |
| **Gemini CLI**, dưới dạng tiện ích mở rộng (extension) | `gemini extensions install https://github.com/stoicsoft/idea-to-launch` |
| **Claude Desktop** (trò chuyện) hoặc claude.ai | Lệnh ở trên không cài vào được hai nơi này. Tải các file zip ở trang [Releases](https://github.com/stoicsoft/idea-to-launch/releases), rồi với từng file, vào **Settings → Capabilities → Skills → Upload skill** (Cài đặt → Khả năng → Kỹ năng → Tải kỹ năng lên) ([chi tiết](../install.md#claude-desktop-and-claudeai)) |
| **ChatGPT hoặc trợ lý trò chuyện khác** | Tải [`idea-to-launch-prompt.md`](../install.md#chatgpt-and-other-chat-assistants) lên một dự án (project) hoặc một GPT tuỳ chỉnh |

Hướng dẫn đầy đủ cho mọi công cụ, kèm cách chọn những công cụ nào được cài bộ
kỹ năng, và cách cập nhật hoặc gỡ bỏ, nằm ở [docs/install.md](../install.md).

## Các bước

Bạn không bao giờ phải gọi tên các bước này. Cứ nói điều bạn muốn, trợ lý sẽ
tự chọn đúng bước. Nếu thích, bạn cũng có thể gọi thẳng một bước, ví dụ
`/app-idea` trong Claude Code hoặc Cursor.

| Bước | Chuyện gì diễn ra | Bạn có thể nói |
|---|---|---|
| **app-builder** | Bắt đầu từ đây. Tìm hiểu bạn cần gì, và làm tiếp từ chỗ bạn dừng lại | "Giúp tôi làm một ứng dụng" · "Làm tiếp nhé" |
| **app-idea** | Một buổi hỏi chuyện ngắn: làm cho ai, và bản nhỏ nhất mà vẫn có ích là gì, rồi lưu thành bản tóm tắt một trang | "Tôi có ý tưởng về…" |
| **app-plan** | Mỗi người sẽ làm được gì, một bản mô tả chi tiết gọn trong một trang, và một kế hoạch để bạn duyệt | "Kế hoạch thế nào?" |
| **app-design** | Ba kiểu giao diện để bạn chọn, rồi chốt một phong cách thống nhất | "Nên trông thế nào?" |
| **app-build** | Làm từng bước, theo đúng thứ tự bạn sẽ thấy nó chạy | "Làm luôn đi" · "Thêm trang đặt lịch" |
| **app-change** | Sửa nhỏ chỉ với một tin nhắn, hoặc biến câu "đây không phải thứ tôi muốn" thành danh sách việc cần sửa | "Đổi nút sang màu xanh lá" |
| **app-fix** | Tìm ra nguyên nhân thật của lỗi và chỉ sửa đúng chỗ đó | "Nó báo lỗi khi tôi…" |
| **app-review** | Kiểm tra như một kỹ sư, và như một khách hàng lần đầu dùng | "Đã sẵn sàng cho khách dùng chưa?" |
| **app-launch** | Đưa lên mạng an toàn, hỏi ý bạn ở mọi bước không thể quay lại | "Đưa lên mạng đi" |

## Dự án tự ghi nhớ

Mọi thứ quan trọng đều được lưu thành những trang đơn giản trong thư mục
`product/` bên trong dự án của bạn: bản tóm tắt, kế hoạch, giao diện, các
quyết định, kết quả kiểm tra và bước tiếp theo. Dù bạn đóng cuộc trò chuyện,
tuần sau mới quay lại, hay chuyển từ Claude sang Codex, trợ lý vẫn làm tiếp
từ chỗ bạn dừng. Với các ứng dụng chỉ để trò chuyện, trợ lý sẽ đưa bạn những
trang này để bạn tự giữ.

## Ngôn ngữ của bạn

- Trợ lý **nói chuyện với bạn bằng ngôn ngữ của bạn**: bạn viết tiếng gì,
  trợ lý trả lời tiếng đó.
- Ứng dụng dùng **ngôn ngữ của khách hàng bạn**, có thể khác ngôn ngữ của
  bạn, hoặc nhiều ngôn ngữ cùng lúc.
- Phần mã (code) vẫn viết bằng tiếng Anh, để sau này lập trình viên nào cũng
  có thể tiếp quản.

Đã được thử nghiệm với 20 ngôn ngữ: English, 简体中文, 繁體中文, Español, हिन्दी,
العربية, Português, Français, Русский, 日本語, Deutsch, Bahasa Indonesia,
Tiếng Việt, 한국어, Türkçe, Italiano, ไทย, Polski, Nederlands và
Українська. Các ngôn ngữ khác thường cũng dùng tốt.

## Những điều luôn giữ đúng

- **Lời lẽ dễ hiểu.** Không dùng thuật ngữ khó. Từ kỹ thuật nào cũng được
  giải thích một lần, ngay lần đầu cần đến.
- **Việc quan trọng do bạn quyết.** Những việc khó quay lại (xoá dữ liệu, ai
  được xem gì, thanh toán, gửi email cho khách, đưa lên mạng) luôn chờ bạn
  trả lời rõ ràng. Việc nhỏ, đổi lại được thì trợ lý tự quyết giúp bạn, để
  bạn không bị ngập trong câu hỏi.
- **Kết quả trung thực.** Trợ lý chỉ nói một thứ chạy được sau khi đã thực
  sự dùng thử, và nói rõ những gì chưa kiểm tra được.
- **Giữ an toàn dữ liệu khách hàng.** Mặc định là riêng tư, mọi thay đổi
  không bao giờ xoá thông tin đã lưu, và thông tin bí mật luôn được để ngoài
  phần mã.
- **Là của bạn.** Mã theo chuẩn, dễ đọc, ghi chú bằng chữ đơn giản. Không bị
  trói buộc, không cần tài khoản, không theo dõi.

## Nên biết

- Muốn làm một ứng dụng thật, bạn cần công cụ làm việc được với file trên
  máy tính của bạn: Claude Code (hoặc thẻ Code trong Claude Desktop), Codex,
  Cursor, Gemini CLI, Copilot và các công cụ tương tự. Các ứng dụng chỉ để
  trò chuyện thì làm được phần lên kế hoạch và một bản mẫu bấm thử được.
- Gói dịch vụ và giới hạn sử dụng thông thường của công cụ AI vẫn áp dụng.
  Khi đã đưa lên mạng, chỗ chạy ứng dụng (hosting) và tên miền thường tốn vài
  đô mỗi tháng. Trợ lý sẽ báo trước khi có bất cứ thứ gì tốn tiền.
- Đây là một trợ lý cẩn thận, không phải luật sư hay kế toán. Với thanh
  toán, dữ liệu sức khoẻ hay bất cứ thứ gì có quy định pháp lý, trợ lý sẽ
  nói khi nào bạn cần tới người có chuyên môn.

## Tìm hiểu thêm

- [Cài đặt trên mọi công cụ](../install.md)
- [Cách hoạt động](../how-it-works.md)
- [Hỏi và đáp](../faq.md)
- [Đóng góp](../../CONTRIBUTING.md): cải thiện các kỹ năng, thêm công cụ, hoặc dịch

## Giấy phép

[MIT](../../LICENSE). Miễn phí để dùng, sửa và chia sẻ.
