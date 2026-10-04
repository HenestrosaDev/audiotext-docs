---
title: Problemen oplossen
description: Oplossingen voor de meest voorkomende problemen met Audiotext.
sidebar:
  order: 1
---

## De eerste transcriptie met WhisperX duurt lang

Bij het eerste gebruik wordt een model gedownload, wat enkele minuten kan duren, afhankelijk van je verbinding en de grootte van het model (tot ~3 GB). De voortgang laat zien wanneer het wordt geladen. Het model blijft in het geheugen zolang de opties niet veranderen, dus de volgende transcripties starten meteen.

## WhisperX mislukt met `CUDA out of memory`

Je GPU heeft niet genoeg geheugen voor de instellingen. Probeer in deze volgorde:

1. Verlaag de **Batchgrootte** (bijv. `4`) bij **Voorkeuren** → **WhisperX**.
2. Gebruik een kleiner model (bijv. `small` of `base`).
3. Gebruik een lichter **Rekentype** (bijv. `int8`).

De laatste twee kunnen de kwaliteit verlagen. Zie [Engines](/nl/reference/engines/#model) voor het geheugen dat elk model nodig heeft.

## Transcriberen duurt te lang

De snelheid van WhisperX hangt af van je hardware, dus verwacht geen directe resultaten op bescheiden CPU's. Probeer een kleiner model, zoals `small`, of `large-v3-turbo` op een GPU, of het rekentype `int8`. Je kunt ook de **Whisper-API** of de **Google-API** gebruiken, die op externe servers draaien.

## De Whisper-API geeft de fout `429`

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

Je OpenAI-account heeft geen tegoed meer, of je moet tegoed toevoegen voordat je de API voor het eerst gebruikt (zelfs als je gratis tegoed hebt). Koop tegoed in het onderdeel [Billing](https://platform.openai.com/settings/organization/billing/overview) van je OpenAI-account. Het kan tot 10 minuten duren voordat je account actief is.

Als je de API-sleutel hebt gemaakt voordat je voor het eerst tegoed toevoegde en de fout na 10 minuten blijft, maak dan een nieuwe sleutel en stel die in bij **Voorkeuren** → **API-sleutels**.

## De sprekers worden niet herkend

Voor sprekerherkenning zijn een Hugging Face-token en het accepteren van de voorwaarden van het model nodig. Controleer of:

- Je de voorwaarden van [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) met hetzelfde account hebt geaccepteerd.
- Het token de rol `Read` heeft en is ingesteld bij **Voorkeuren** → **API-sleutels**.

Zie [Sprekers herkennen](/nl/guides/transcription-settings/#sprekers-herkennen).

## Er wordt geen microfoon gevonden, of er wordt niets opgenomen

- Controleer of de microfoon is aangesloten en klik op de vernieuwknop naast de lijst met microfoons.
- Sta Audiotext op macOS toe bij **Systeeminstellingen** → **Privacy en beveiliging** → **Microfoon**, en op Windows bij **Instellingen** → **Privacy** → **Microfoon**.
- Als de niveaumeter **Geen geluid** toont, kies dan een andere microfoon in de lijst of controleer of hij niet is gedempt.

## De audio van een transcriptie kan niet worden afgespeeld

Het bronbestand is verplaatst of verwijderd. De tekst blijft bewaard, maar de audio kan alleen vanuit het oorspronkelijke bestand worden afgespeeld. Microfoonopnamen en de audio van URL's bewaart Audiotext zelf.

## Een YouTube-video kan niet worden gedownload

Controleer of de URL klopt en de video openbaar is. YouTube verandert vaak; als het blijft mislukken, kijk dan of er een nieuwere versie van Audiotext is.

## Een map transcribeert geen enkel bestand

Bestanden die al een transcriptie hebben, worden overgeslagen. Zet **Bestaande bestanden overschrijven** aan om ze opnieuw te transcriberen. De map moet ook [ondersteunde bestanden](/nl/reference/formats-and-languages/) bevatten.

## De Google-API vraagt om de taal

De Google-API kan de taal niet detecteren. Kies de **Taal van de audio** in de instellingen.

## Iets anders

Zoek in de [issues](https://github.com/HenestrosaDev/audiotext/issues) of stel je vraag in de [discussies](https://github.com/HenestrosaDev/audiotext/discussions). Heb je een bug gevonden, [meld die dan](https://github.com/HenestrosaDev/audiotext/issues/new/choose) met je systeem, de versie van Audiotext en de stappen om hem te reproduceren.
