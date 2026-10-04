---
title: Rezumat și traducere
description: Rezumați și traduceți transcrieri cu OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL sau Google Translate.
sidebar:
  order: 4
---

Când o transcriere este gata, Audiotext o poate rezuma și traduce cu un model de limbaj sau un serviciu de traducere. Ambele sunt păstrate în istoric, deci sunt generate o singură dată.

## Rezumat

Deschideți modul **Rezumat** al unei transcrieri și faceți clic pe **Generează rezumat**. Modelul de limbaj scrie:

- Un **rezumat** al transcrierii.
- **Punctele cheie**.
- **Capitolele**, dacă are marcaje de timp. Faceți clic pe un capitol pentru a reda sunetul de la începutul lui.

**Regenerează** îl scrie din nou (de ex. după ce alegeți alt model). **Copiază** îl copiază, iar [exporturile](/ro/guides/transcript/#copiați-și-exportați) Markdown și Word îl includ.

Dacă cheia API a furnizorului nu este setată, modul **Rezumat** oferă să o setați. Transcrierile foarte lungi (aproximativ trei ore de vorbire sau mai mult) sunt rezumate doar de la început.

![Rezumatul unei transcrieri, cu punctele cheie și capitolele sale](/screenshots/summary.png)

## Traducere

Faceți clic pe **Tradu**, alegeți limba în **Tradu în** și **Furnizorul**, apoi confirmați. Traducerea apare într-un panou în dreapta textului original.

- Dacă transcrierea are marcaje de timp, fiecare propoziție este tradusă separat, deci traducerea le păstrează: evidențiază propoziția redată, iar un clic pe o propoziție o redă.
- Dacă ați editat textul simplu, se traduce textul editat, fără marcaje de timp.
- Trageți mânerul dintre texte pentru a le redimensiona sau faceți dublu clic pe el pentru a reveni la dimensiunile inițiale.
- Butonul **Tradu** permite și **Ascunde traducerea**, **Tradu în altă limbă…** sau **Șterge traducerea**.

:::tip
Pentru a obține transcrierea direct în altă limbă, fără furnizor, puteți traduce și în timpul transcrierii. Consultați [Limbă](/ro/guides/transcription-settings/#limbă).
:::

## Furnizori

Furnizorii se aleg în **Preferințe** → **IA**, separat pentru rezumate și traduceri.

| Furnizor | Model implicit | Cheie API |
| --- | --- | --- |
| OpenAI (implicit) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (local) | `llama3.2` | Nu este necesară |

Lăsați **Modelul** gol pentru a folosi modelul implicit al furnizorului sau scrieți numele oricărui alt model al furnizorului (de ex. `claude-sonnet-5-5` sau `deepseek-reasoner`).

Traducerile pot fi făcute și cu:

- **DeepL**, care necesită o [cheie API DeepL](https://www.deepl.com/your-account/keys). Funcționează și cheile planului gratuit.
- **Google Translate**, care folosește cheia API Google cu Cloud Translation API activat.

### Ollama

[Ollama](https://ollama.com) rulează modelele pe computerul dumneavoastră, fără cheie API și fără a trimite textul nicăieri. Instalați-l, descărcați un model (de ex. `ollama pull llama3.2`) și alegeți **Ollama** ca furnizor. Dacă nu rulează la adresa implicită, schimbați **URL-ul serverului** în **Preferințe** → **IA** (implicit `http://localhost:11434`).

:::note
Fiecare furnizor taxează utilizarea API-ului său, pentru care Audiotext nu este responsabil. Cheile API sunt păstrate în depozitul de credențiale al sistemului. Consultați [Fișiere și date](/ro/reference/files-and-data/).
:::
