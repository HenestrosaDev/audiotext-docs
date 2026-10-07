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

Als de transcriptie mislukt met **Voor sprekerherkenning is een Hugging Face-token nodig.** of **Het model voor sprekerherkenning kon niet worden gedownload.**, ontbreekt het token, is het ongeldig of heeft het geen toegang tot het model.

Voor sprekerherkenning zijn een Hugging Face-token en het accepteren van de voorwaarden van het model nodig. Controleer of:

- Je de voorwaarden van [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) met hetzelfde account hebt geaccepteerd.
- Het token de rol `Read` heeft en is ingesteld bij **Voorkeuren** → **API-sleutels**.

Zie [Sprekers herkennen](/nl/guides/transcription-settings/#sprekers-herkennen).

## Er wordt geen microfoon gevonden, of er wordt niets opgenomen

- Controleer of de microfoon is aangesloten en klik op de vernieuwknop naast de lijst met microfoons.
- Sta Audiotext op macOS toe bij **Systeeminstellingen** → **Privacy en beveiliging** → **Microfoon**, en op Windows bij **Instellingen** → **Privacy** → **Microfoon**.
- Als de niveaumeter **Geen geluid** toont, kies dan een andere microfoon in de lijst of controleer of hij niet is gedempt.
- Als **Er is geen audio opgenomen.** wordt getoond, stopte de opname voordat de microfoon geluid stuurde. Neem opnieuw op, of kies een andere microfoon.

## De live tekst wordt niet getoond

Als tijdens het opnemen **De tekst kan niet worden getoond tijdens het opnemen.** wordt getoond, kon het **Livemodel** niet worden geladen: het wordt bijvoorbeeld bij het eerste gebruik gedownload, waarvoor een internetverbinding nodig is, of er is niet genoeg geheugen. De opname heeft er geen last van en wordt zoals gewoonlijk getranscribeerd als je stopt. Kies een kleiner **Livemodel** (bijv. `tiny` of `base`) in de kaart **Livetekst**.

## De audio van een transcriptie kan niet worden afgespeeld

Het bronbestand is verplaatst of verwijderd. De tekst blijft bewaard, maar de audio kan alleen vanuit het oorspronkelijke bestand worden afgespeeld. Microfoonopnamen en de audio van URL's bewaart Audiotext zelf.

## Een YouTube-video kan niet worden gedownload

Controleer of de URL klopt en de video openbaar is. YouTube verandert vaak; als het blijft mislukken, kijk dan of er een nieuwere versie van Audiotext is.

Wordt in plaats daarvan **De YouTube-video heeft geen audiospoor.** getoond, dan heeft de video geen geluid om te transcriberen.

## Een link kan niet worden getranscribeerd

- **De URL verwijst niet naar een audio- of videobestand.**: de link opent een webpagina, geen bestand. Alleen links van YouTube-video's en directe links naar audio- of videobestanden werken. Zoek op de pagina de link die het bestand downloadt (bijv. de aflevering van een podcast) en gebruik die, of download het bestand en transcribeer het met de bron **Bestand**.
- **Het bestand kon niet worden gedownload: …**: het bestand was niet bereikbaar. Controleer of de link in je browser opent en of je verbonden bent met internet. Links waarvoor je moet inloggen kunnen niet worden gedownload: download het bestand zelf en gebruik de bron **Bestand**.

## Een map transcribeert geen enkel bestand

Bestanden die al een transcriptie hebben, worden overgeslagen. Zet **Bestaande bestanden overschrijven** aan om ze opnieuw te transcriberen. De map moet ook [ondersteunde bestanden](/nl/reference/formats-and-languages/) bevatten.

## De Google-API vraagt om de taal

De Google-API kan de taal niet detecteren. Kies de **Taal van de audio** in de instellingen.

## Een samenvatting of vertaling mislukt

- **DeepL kan niet naar het … vertalen.**: DeepL ondersteunt die taal niet. Kies een andere aanbieder, zoals een taalmodel.
- **Het antwoord van het model was te lang.**, **Het model gaf geen geldige samenvatting terug.** of **Het model gaf geen geldige vertaling terug.**: het model schreef de samenvatting of de vertaling niet in de verwachte vorm. Probeer het opnieuw, of kies een groter model via **Voorkeuren** → **AI**. De kleine modellen van Ollama mislukken vaker.
- Controleer bij elke andere fout of de API-sleutel van de aanbieder is ingesteld via **Voorkeuren** → **API-sleutels** en of je account tegoed heeft.

## Er kan niet op updates worden gecontroleerd

**Kan niet controleren op updates.** betekent dat Audiotext GitHub niet kon bereiken. Controleer je internetverbinding, of een firewall of proxy die blokkeert. Je kunt de nieuwste versie altijd downloaden via de [releasepagina](https://github.com/HenestrosaDev/audiotext/releases/latest).

## Iets anders

Zoek in de [issues](https://github.com/HenestrosaDev/audiotext/issues) of stel je vraag in de [discussies](https://github.com/HenestrosaDev/audiotext/discussions). Heb je een bug gevonden, [meld die dan](https://github.com/HenestrosaDev/audiotext/issues/new/choose) met je systeem, de versie van Audiotext en de stappen om hem te reproduceren.
