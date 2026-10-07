---
title: Filer och data
description: Var Audiotext sparar inställningar, historik, inspelningar och API-nycklar, och vilka miljövariabler det läser.
sidebar:
  order: 5
---

Audiotext behåller dina data på din dator. Inget skickas någonstans om du inte använder en fjärrmotor (Whisper-API:t eller Google-API:t) eller en annan AI-leverantör än Ollama. När den öppnas frågar den också GitHub om det finns en ny version, vilket du kan stänga av under **Inställningar** → **Allmänt** → **Uppdateringar**.

## Användarens konfigurationsmapp

Inställningarna, historiken och inspelningarna sparas i din användarkonfigurationsmapp, så de finns kvar efter uppdateringar:

| System | Mapp |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (eller `$XDG_CONFIG_HOME/audiotext`) |

Den innehåller:

- `config.ini`: dina inställningar. Ta bort filen för att återställa standardvärdena.
- `history.json`: dina transkriberingar, med sammanfattningar, översättningar och korrigeringar.
- `media/`: mikrofoninspelningarna och ljudet som laddats ner från URL:er, så att de kan spelas upp senare. De tas bort när deras transkribering tas bort ur historiken.

För att använda en annan mapp, t.ex. för en portabel installation, anger du miljövariabeln `AUDIOTEXT_CONFIG_DIR`.

:::note
Filen `config.ini` i appens mapp innehåller standardinställningarna och ändras aldrig.
:::

## API-nycklar

API-nycklarna och Hugging Face-token sparas i systemets lösenordsarkiv:

- **macOS**: Nyckelringen.
- **Windows**: Autentiseringshanteraren.
- **Linux**: Secret Service (t.ex. GNOME Keyring eller KWallet).

Om systemet saknar ett (t.ex. en server utan skrivbord) sparas de i en `.env`-fil i konfigurationsmappen, som bara din användare kan läsa. Nycklar som tidigare versioner sparade i den filen flyttas till lösenordsarkivet första gången appen öppnas.

Nycklarna används **bara** för att göra anrop till varje tjänsts API.

## Miljövariabler

Miljövariabler med nycklarnas namn har företräde framför de som angetts i appen:

| Variabel | Tjänst |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (Whisper-API, sammanfattningar, översättningar) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text och Google Translate |
| `HF_TOKEN` | Hugging Face (talaridentifiering) |
| `AUDIOTEXT_CONFIG_DIR` | Mappen för inställningarna och historiken |

## Modeller

Modellerna för WhisperX och talaridentifieringen laddas ned första gången de används och cachelagras av Hugging Face i `~/.cache/huggingface` (`%USERPROFILE%\.cache\huggingface` i Windows). Modellerna som justerar orden på engelska, franska, tyska, spanska och italienska cachelagras av PyTorch i `~/.cache/torch` (`%USERPROFILE%\.cache\torch` i Windows). Ta bort de mapparna för att frigöra utrymmet de tar. Andra appar kan också ha sina modeller där, och laddar ned dem igen när de behövs, precis som Audiotext.
