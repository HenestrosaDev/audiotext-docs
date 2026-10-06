---
title: Nástroje
description: Porovnejte WhisperX, Whisper API a Google API a vyberte jejich modely a pokročilé možnosti.
sidebar:
  order: 1
---

Audiotext přepisuje pomocí jednoho ze tří nástrojů, který vyberete na kartě **Nástroj** v [nastavení přepisu](/cs/guides/transcription-settings/#nástroj).

| | WhisperX | Whisper API | Google API |
| --- | --- | --- | --- |
| Běží na | Vašem počítači | Serverech OpenAI | Serverech Googlu |
| Internet | Jen pro stažení modelů | Nutný | Nutný |
| Cena | Zdarma, bez omezení | Placené | Bezplatný limit (60 min/měsíc) nebo placené s klíčem API |
| Rozpozná jazyk | ✓ | ✓ | ✗ |
| Překládá | ✓ | ✓ | ✗ |
| Časové značky | ✓ | Podle modelu | ✗ |
| Rozpozná mluvčí | ✓ (token Hugging Face) | `gpt-4o-transcribe-diarize` | ✗ |
| Časování slov | ✓ | `whisper-1` | ✗ |
| Živý text | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) je rychlá implementace Whisperu od OpenAI, která běží na vašem počítači, takže zvuk ho nikdy neopustí. Běží na procesoru, nebo mnohem rychleji na grafické kartě NVIDIA s CUDA.

### Model

Větší modely jsou přesnější, ale pomalejší a spotřebují více paměti. Model se stáhne při prvním použití.

| Model | Parametry | Potřebná VRAM |
| :---: | :---: | :---: |
| `tiny`, `tiny.en` | 39 M | ~1 GB |
| `base`, `base.en` | 74 M | ~1 GB |
| `small`, `small.en` | 244 M | ~2 GB |
| `distil-small.en` | 166 M | ~2 GB |
| `medium`, `medium.en` | 769 M | ~5 GB |
| `distil-medium.en` | 394 M | ~3 GB |
| `large-v1`, `large-v2`, `large-v3` | 1550 M | <8 GB |
| `large-v3-turbo` | 809 M | ~6 GB |
| `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5` | 756 M | ~5 GB |

- **`large-v2`** je výchozí, protože `large-v3` častěji halucinuje a opakuje text, zvláště v některých jazycích, jako je japonština, a vynechává více interpunkce.
- **`large-v3-turbo`** je odlehčená verze `large-v3`, mnohem rychlejší a téměř stejně přesná.
- Modely končící na **`.en`** (`tiny.en`, `base.en`, `small.en`, `medium.en`) a **destilované** modely (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) přepisují jen angličtinu. Jsou rychlejší než vícejazyčné modely stejné velikosti.

:::tip
Pro rychlé vyzkoušení Audiotextu vyberte `tiny` nebo `small`. Pro nejlepší kvalitu použijte `large-v2` nebo `large-v3-turbo` na grafické kartě.
:::

### Pokročilé možnosti

Najdete je v **Předvolby** → **WhisperX**. Měňte je jen při problémech nebo pokud víte, co děláte: grafická karta bez volné paměti může systém zamrazit.

- **Typ výpočtu**: přesnost čísel modelu. `float16` je rychlejší na grafických kartách (výchozí s CUDA). `int8` spotřebuje méně paměti a je výchozí na procesoru, protože mnoho procesorů `float16` efektivně nepodporuje. `float32` je nejpřesnější, pro grafické karty s více než 8 GB VRAM.
- **Velikost dávky**: kolik částí zvuku se zpracovává najednou (výchozí `8`). Nemění kvalitu, jen rychlost. Pokud dochází paměť, snižte ji; doporučuje se nejvýše `16`.
- **Použít CPU**: spouští WhisperX na procesoru. Je vždy zapnuto, pokud nebyla nalezena grafická karta s CUDA.

## Whisper API

Používá [API OpenAI pro převod řeči na text](https://platform.openai.com/docs/guides/speech-to-text). Je určeno pro počítače, na kterých WhisperX neběží plynule, a vyžaduje klíč API OpenAI (viz [Klíče API](/cs/reference/preferences/#klíče-api)).

| Model | Časové značky | Mluvčí | Poznámky |
| --- | :---: | :---: | --- |
| `whisper-1` (výchozí) | ✓ | ✗ | Lze přehrávat segment po segmentu a převést na titulky. Překládá do angličtiny. |
| `gpt-transcribe` | ✗ | ✗ | Přesnější, ale bez časových značek. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Rozpozná mluvčí. Nepoužívá klíčová slova ani popis. |

Překlady do angličtiny vždy provádí `whisper-1`, protože je to jediný model, který překládá.

Dlouhé nahrávky se dělí na části do 10 minut, střižené v tichu, aby se žádné slovo nerozdělilo, protože API odmítá soubory větší než 25 MB. U `whisper-1` se konec každé části předá jako kontext další části; u `gpt-4o-transcribe-diarize` se s dalšími částmi posílá vzorek hlasu každého mluvčího, aby si zachovali označení.

### Možnosti

- **Formát odpovědi** (karta Výstup, pro složky): `text` (výchozí), `json`, `verbose_json`, `srt` nebo `vtt`. Titulky a `verbose_json` vyžadují model s časovými značkami.
- **Teplota** (Předvolby → Whisper API): mezi 0 a 1. Vysoké hodnoty jako 0,8 činí výsledek náhodnějším, nízké jako 0,2 cílenějším. Při 0 (výchozí) ji model podle potřeby sám zvýší.
- **Časové značky slov** (Předvolby → Whisper API): zda `whisper-1` vrací i časové značky každého slova, aby se při přehrávání zvýrazňovalo. Trvá déle. Ve výchozím stavu zapnuto.

## Google API

Používá [Google Speech-to-Text API](https://cloud.google.com/speech-to-text). Nedoplňuje interpunkci (tu přidává Audiotext) a jeho kvalita je nižší než u Whisperu, takže přepisy často vyžadují opravy. Neumí rozpoznat jazyk ani překládat a vrací prostý text bez časových značek.

Bez klíče API se používá bezplatný limit 60 minut měsíčně. Chcete-li ho rozšířit, nastavte klíč Google API. Google si používání účtuje a Audiotext za to neodpovídá.
