---
title: Rezumat, întrebări și traducere
description: Rezumați, puneți întrebări despre și traduceți transcrieri cu OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL sau Google Translate.
sidebar:
  order: 4
---

Când o transcriere este gata, Audiotext o poate rezuma, poate răspunde la întrebări despre ea și o poate traduce cu un model de limbaj sau un serviciu de traducere. Totul este păstrat în istoric, deci este generat o singură dată.

## Rezumat

Deschideți modul **Rezumat** al unei transcrieri și faceți clic pe **Generează rezumat**. Modelul de limbaj scrie:

- Un **rezumat** al transcrierii.
- **Punctele cheie**.
- **Capitolele**, dacă are marcaje de timp. Faceți clic pe un capitol pentru a reda sunetul de la începutul lui.

Sub titlu, panoul arată ce model l-a generat și când. Butoanele din antetul lui:

- **Caută** (`Ctrl+F`, `⌘F` pe macOS): caută un text în rezumat.
- **Copiază**: îl copiază.
- **Exportă**: îl salvează separat ca text simplu, Markdown sau document Word, cu un nume ca `video.summary.md`, ca să nu înlocuiască transcrierea. [Exporturile](/ro/guides/transcript/#copiați-și-exportați) Markdown și Word ale transcrierii îl includ și ele.
- **Regenerează rezumatul**: îl scrie din nou (de ex. după ce alegeți alt model), după confirmare, deoarece cel actual este înlocuit.

Dacă cheia API a furnizorului nu este setată, modul **Rezumat** oferă să o setați. Transcrierile foarte lungi (aproximativ trei ore de vorbire sau mai mult) sunt rezumate doar de la început.

![Rezumatul unei transcrieri, cu punctele cheie și capitolele sale](/screenshots/summary.png)

## Întrebați despre transcriere

Deschideți modul **Întreabă**, scrieți o întrebare în **Puneți o întrebare despre transcriere…** (de ex. ce s-a decis sau cine a spus ceva) și apăsați `Enter` sau faceți clic pe **Întreabă**.

- Modelul de limbaj răspunde pe baza transcrierii și a întrebărilor și răspunsurilor anterioare, deci o întrebare se poate referi la ele (de ex. „De ce?”).
- Dacă transcrierea are marcaje de timp, fiecare răspuns trimite la părțile transcrierii în care este spus. Faceți clic pe una pentru a reda sunetul de acolo.
- Întrebările și răspunsurile sunt păstrate în istoric împreună cu transcrierea. Coșul din antet șterge conversația, după confirmare.

La întrebări răspunde furnizorul ales pentru ele în **Preferințe** → **Furnizori** → **Întreabă**, care este cel al rezumatelor până îl schimbați. Ca la rezumate, din transcrierile foarte lungi se citește doar începutul.

## Traducere

Faceți clic pe **Tradu**, alegeți limba în **Tradu în:** și furnizorul în **Tradu cu:**, apoi confirmați. Dialogul spune ce face furnizorul ales și oferă setarea cheii API dacă lipsește. Traducerea apare într-un panou în dreapta textului original.

- Dacă transcrierea are marcaje de timp, este tradusă propoziție cu propoziție, cu textul spus înainte și după fiecare parte drept context, deci traducerea începe cu marcajele de timp ale fiecărei propoziții: evidențiază propoziția redată, iar un clic pe o propoziție o redă.
- Dacă transcrierea nu are marcaje de timp, tot textul ei este tradus deodată.
- Cele două texte derulează împreună, deci arată aceeași parte a sunetului. Butonul rotund de pe mânerul dintre ele activează și dezactivează acest lucru. Trageți mânerul pentru a le redimensiona sau faceți dublu clic pe el pentru a reveni la dimensiunile inițiale.

Butoanele din antetul traducerii caută și înlocuiesc în ea, o copiază, o exportă, oferă **Tradu din nou** (cu același furnizor și model) și **Ascunde traducerea**. Butonul **Tradu** permite și afișarea ei din nou, **Tradu în altă limbă…** sau **Șterge traducerea**.

### Mai multe limbi

O transcriere poate fi tradusă în mai multe limbi, chiar în același timp, și fiecare traducere este păstrată. Titlul panoului alege traducerea afișată, arată cât din fiecare este tradus și se încheie cu opțiunea de a traduce în altă limbă. Traducerea într-o limbă care are deja o traducere o înlocuiește, după confirmare, deoarece corecturile ei se pierd. Meniul titlului arată câte subtitrări din fiecare traducere neterminată sunt traduse (de ex. `Engleză · 148/150`).

### Progresul traducerii

Progresul se numără în subtitrări: una este tradusă când are text. Deasupra traducerii, un rând arată câte sunt traduse (de ex. `Tradus: 148/150 · 98 %`). Procentul este rotunjit în jos, așa că `100 %` apare doar când sunt toate traduse.

Cât timp mai rămân unele, săgețile de lângă el merg la subtitrarea anterioară și următoare **Netradus încă**, evidențiind-o pe fiecare, și arată la care sunteți (de ex. `1 din 2`). Treceți cu mouse-ul peste una dintre ele pentru a afișa butonul **Tradu textul…** în dreapta ei, care deschide dialogul pentru a o traduce.

### Corectați și retemporizați traducerea

O traducere are adesea nevoie de altă temporizare decât originalul, de ex. subtitrări care se citesc mai greu. Faceți clic dreapta pe o subtitrare a traducerii pentru:

- **Editează textul…**: a-i schimba textul.
- **Editează temporizarea…**: a schimba când începe și se termină, la milisecundă. Scrieți timpii ca `00:01:05,900`, `01:05,9` sau `65.9`.
- **Adaugă subtitrare după…**: a adăuga o subtitrare, care implicit umple pauza până la următoarea.
- **Șterge subtitrarea**.

Puteți și să schimbați temporizarea transcrierii și să îi adăugați subtitrări: vedeți [Corectați transcrierea](/ro/guides/transcript/#corectați-transcrierea).

### Traduceți-o singur

Pentru a scrie singur traducerea, alegeți **Manual** în **Tradu cu:**. Nu are nevoie de o cheie API. Traducerea începe cu o subtitrare goală pentru fiecare subtitrare a transcrierii, afișată ca **Netradus încă**, iar panoul arată câte au mai rămas. Faceți clic dreapta pe una și alegeți **Tradu textul…**: dialogul arată textul original spus în acel interval. Trecând cu mouse-ul peste una apare un buton **Tradu textul…** în dreapta ei, care deschide același dialog.

### Subtitrări și export

- În transcrierile videoclipurilor, bifați **Afișează ca subtitrări ale videoclipului** în meniul **Tradu** pentru a afișa traducerea ca subtitrări. Meniul videoclipului le schimbă și el. Consultați [Urmăriți videoclipuri cu subtitrări](/ro/guides/transcript/#urmăriți-videoclipuri-cu-subtitrări).
- Pentru a salva traducerea într-un fișier, faceți clic pe butonul de export al panoului ei. Se exportă în aceleași [formate](/ro/guides/transcript/#copiați-și-exportați) ca transcrierea, cu limba ei în numele fișierului (de ex. `video.es.srt`), astfel încât playerele video o încarcă împreună cu videoclipul. Subtitrările netraduse încă nu se exportă. Același meniu face o [copie a videoclipului cu subtitrările](/ro/guides/transcript/#exportați-videoclipul-cu-subtitrările).

:::tip
Pentru a obține transcrierea direct în altă limbă, fără furnizor, puteți traduce și în timpul transcrierii. Consultați [Limbă](/ro/guides/transcription-settings/#limbă).
:::

## Furnizori

Furnizorii se aleg în **Preferințe** → **Furnizori**, separat pentru rezumate, întrebări și traduceri.

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

[Ollama](https://ollama.com) rulează modelele pe computerul dumneavoastră, fără cheie API și fără a trimite textul nicăieri. Instalați-l, descărcați un model (de ex. `ollama pull llama3.2`) și alegeți **Ollama** ca furnizor. Dacă nu rulează la adresa implicită, schimbați **URL-ul serverului** în **Preferințe** → **Furnizori** (implicit `http://localhost:11434`).

:::note
Fiecare furnizor taxează utilizarea API-ului său, pentru care Audiotext nu este responsabil. Cheile API sunt păstrate în depozitul de credențiale al sistemului. Consultați [Fișiere și date](/ro/reference/files-and-data/).
:::
