---
title: Bestanden en gegevens
description: Waar Audiotext de instellingen, de geschiedenis, de opnamen en de API-sleutels opslaat, en welke omgevingsvariabelen het leest.
sidebar:
  order: 5
---

Audiotext bewaart je gegevens op je computer. Er wordt niets verstuurd, tenzij je een externe engine gebruikt (de Whisper-API of de Google-API) of een andere AI-aanbieder dan Ollama. Bij het openen vraagt het ook aan GitHub of er een nieuwe versie is, wat je kunt uitzetten via **Voorkeuren** → **Algemeen** → **Updates**.

## Configuratiemap van de gebruiker

De instellingen, de geschiedenis en de opnamen worden opgeslagen in je configuratiemap, dus ze blijven bewaard bij updates:

| Systeem | Map |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (of `$XDG_CONFIG_HOME/audiotext`) |

Deze bevat:

- `config.ini`: je instellingen. Verwijder het bestand om de standaardwaarden te herstellen.
- `history.json`: je transcripties, met hun samenvattingen, vertalingen en correcties.
- `media/`: de microfoonopnamen en de audio die van URL's is gedownload, zodat die later kan worden afgespeeld. Ze worden verwijderd als de bijbehorende transcriptie uit de geschiedenis wordt verwijderd.

Stel de omgevingsvariabele `AUDIOTEXT_CONFIG_DIR` in om een andere map te gebruiken, bijv. voor een draagbare installatie.

:::note
Het bestand `config.ini` in de map van de app bevat de standaardinstellingen en wordt nooit gewijzigd.
:::

## API-sleutels

De API-sleutels en het Hugging Face-token worden bewaard in de wachtwoordopslag van je systeem:

- **macOS**: de Sleutelhanger.
- **Windows**: Referentiebeheer.
- **Linux**: de Secret Service (bijv. GNOME Keyring of KWallet).

Als het systeem er geen heeft (bijv. een server zonder bureaublad), worden ze opgeslagen in een `.env`-bestand in de configuratiemap, dat alleen jouw gebruiker kan lezen. Sleutels die eerdere versies in dat bestand opsloegen, worden de eerste keer dat de app opent naar de wachtwoordopslag verplaatst.

De sleutels worden **alleen** gebruikt om verzoeken te doen aan de API van elke dienst.

## Omgevingsvariabelen

Omgevingsvariabelen met de namen van de sleutels hebben voorrang op de sleutels die in de app zijn ingesteld:

| Variabele | Dienst |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (Whisper-API, samenvattingen, vertalingen) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text en Google Translate |
| `HF_TOKEN` | Hugging Face (sprekerherkenning) |
| `AUDIOTEXT_CONFIG_DIR` | De map van de instellingen en de geschiedenis |

## Modellen

De modellen van WhisperX en van de sprekerherkenning worden gedownload wanneer ze voor het eerst worden gebruikt en door Hugging Face opgeslagen in `~/.cache/huggingface` (`%USERPROFILE%\.cache\huggingface` op Windows). De modellen die de woorden van het Engels, Frans, Duits, Spaans en Italiaans uitlijnen, worden door PyTorch opgeslagen in `~/.cache/torch` (`%USERPROFILE%\.cache\torch` op Windows). Verwijder die mappen om de ruimte die ze innemen vrij te maken. Ook andere apps kunnen daar hun modellen bewaren, en downloaden ze opnieuw wanneer ze nodig zijn, net als Audiotext.
