---
title: Nastavení přepisu
description: Vyberte nástroj, jazyky, kontext, možnosti a výstup každého přepisu.
sidebar:
  order: 2
---

Před přepisem Audiotext zobrazí jeho nastavení seskupené do karet. Pamatují se pro příště a každý přepis si uchovává nastavení, se kterým vznikl.

![Nastavení přepisu souboru](/screenshots/transcription-settings.png)

## Nástroj

**Metoda přepisu**:

| Nástroj | Kde běží | Cena | Poznámky |
| --- | --- | --- | --- |
| **WhisperX** (výchozí) | Váš počítač | Zdarma a bez omezení | Soukromě a offline. Více možností: mluvčí, časování slov, živý text. |
| **Whisper API** | Servery OpenAI | Placené za minutu | Vyžaduje [klíč API OpenAI](/cs/reference/preferences/#klíče-api). Pro počítače, na kterých WhisperX neběží plynule. |
| **Google API** | Servery Googlu | Bezplatný limit nebo placené | Nižší kvalita a bez časových značek. Klíč API je volitelný. |

**Model** závisí na nástroji. U WhisperX jsou větší modely přesnější, ale pomalejší. U Whisper API určuje, zda bude mít přepis časové značky a mluvčí. Porovnání najdete v části [Nástroje](/cs/reference/engines/).

## Jazyk

- **Jazyk zvuku**: ve výchozím stavu **Automaticky rozpoznat**. Když ho vyberete, předejdete chybám u krátkých nebo smíšených nahrávek. Google API ho rozpoznat neumí, takže ho tam musíte vybrat.
- **Jazyk přepisu**: ve výchozím stavu **Stejný jako zvuk**. Vyberte jiný jazyk, chcete-li zvuk během přepisu přeložit.

Když se jazyky liší, objeví se možnosti v části **Překlad**:

- **Přeložit pomocí Whisper (doporučeno)**: Whisper přepíše a přeloží zvuk v jednom kroku. Překládá jen do angličtiny.
- **Napsat přímo v jazyce: _jazyk_ (experimentální)**: Whisper dostane pokyn napsat přepis přímo v tomto jazyce. V mnoha jazycích to funguje dobře, ale výsledek zkontrolujte.

Google API překládat neumí. Chcete-li přepis později přeložit do libovolného jazyka s dalšími poskytovateli, použijte tlačítko [Přeložit](/cs/guides/summary-and-translation/#překlad) v přepisu.

## Kontext

Dvě volitelná pole, která pomáhají modelu:

- **Klíčová slova**: jména, termíny nebo zkratky, které v nahrávce zazní, oddělené čárkami (např. `Audiotext, WhisperX, Henestrosa`), aby se správně napsaly. Jsou to jen nápovědy: klíčové slovo se zapíše, jen pokud v nahrávce zazní.
- **Popis**: o čem nahrávka je, například téma nebo prostředí (např. `Rozhovor o rozpoznávání řeči`).

Používá je WhisperX a Whisper API, kromě modelu `gpt-4o-transcribe-diarize`. Google API je nepoužívá.

## Možnosti

- **Časování slov** (WhisperX): zarovná každé slovo se zvukem, aby se při přehrávání zvýrazňovalo. Trvá o něco déle. Titulky ho už používají.
- **Extrahovat řeč**: před přepisem potlačí hudbu a hluk v pozadí.
- **Rozpoznat mluvčí** (WhisperX): označí, kdo v které části mluví, např. `SPEAKER_00`. Pokud víte, kolik lidí mluví, zadejte to do pole **Počet mluvčích** (`0` ho rozpozná automaticky). Vyžaduje bezplatný token Hugging Face; viz [Rozpoznání mluvčích](#rozpoznání-mluvčích). U Whisper API rozpoznává mluvčí model `gpt-4o-transcribe-diarize`.

### Rozpoznání mluvčích

Model, který rozpoznává mluvčí, [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1), je zdarma, ale vyžaduje token Hugging Face:

1. Vytvořte si účet na [Hugging Face](https://huggingface.co/join) a přijměte podmínky [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1).
2. Ve [svém nastavení](https://huggingface.co/settings/tokens) vytvořte token s rolí `Read`.
3. Klikněte na **Nastavit token Hugging Face…** a vložte ho.

Model se stáhne při prvním použití. Pak se mluvčí rozpoznávají offline.

## Živý text

Zobrazuje se jen pro mikrofon. Viz [Živý text](/cs/guides/sources/#živý-text).

## Složka a Výstup

Zobrazují se jen pro složky:

- **Sledovat složku**: viz [Sledování složky](/cs/guides/sources/#sledování-složky).
- **Typy souborů**: u WhisperX jeden nebo více z `.txt`, `.srt`, `.vtt`, `.json`, `.tsv` a `.aud`. U Whisper API formát souborů (`text`, `json`, `verbose_json`, `srt` nebo `vtt`); titulky vyžadují model s časovými značkami. Google API vrací prostý text (`.txt`).
- **Umístění**: soubory se ukládají vedle každého zdrojového souboru. Kliknutím na **Změnit…** je uložíte do jiné složky (její podsložky se znovu vytvoří), kliknutím na **Vedle zdroje** se vrátíte.
- **Přepsat existující soubory**: znovu přepíše soubory, které už přepis mají, a nahradí ho.

Možnosti titulků (šířka řádku, počet řádků, zvýrazněná slova) najdete v [Předvolbách](/cs/reference/preferences/#titulky).
