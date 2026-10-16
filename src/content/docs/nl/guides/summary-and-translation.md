---
title: Samenvatting, vragen en vertaling
description: Vat transcripties samen, stel er vragen over en vertaal ze met OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL of Google Translate.
sidebar:
  order: 4
---

Zodra een transcriptie klaar is, kan Audiotext hem samenvatten, er vragen over beantwoorden en hem vertalen met een taalmodel of een vertaaldienst. Alles wordt in de geschiedenis bewaard, dus het wordt maar één keer gemaakt.

## Samenvatting

Open de modus **Samenvatting** van een transcriptie en klik op **Samenvatting maken**. Het taalmodel schrijft:

- Een **samenvatting** van de transcriptie.
- De **belangrijkste punten**.
- De **hoofdstukken**, als hij tijdstempels heeft. Klik op een hoofdstuk om de audio vanaf het begin ervan af te spelen.

Onder de titel toont het paneel welk model hem heeft gemaakt en wanneer. De knoppen in de kop:

- **Zoeken** (`Ctrl+F`, `⌘F` op macOS): zoekt een tekst in de samenvatting.
- **Kopiëren**: kopieert hem.
- **Exporteren**: slaat hem apart op als platte tekst, Markdown of Word-document, met een naam als `video.summary.md`, zodat hij de transcriptie niet vervangt. De [exports](/nl/guides/transcript/#kopiëren-en-exporteren) van de transcriptie naar Markdown en Word bevatten hem ook.
- **Samenvatting opnieuw genereren**: schrijft hem opnieuw (bijv. na het kiezen van een ander model), na bevestiging, want de huidige wordt vervangen.

Als de API-sleutel van de aanbieder niet is ingesteld, biedt de modus **Samenvatting** aan om die in te stellen. Zeer lange transcripties (ongeveer drie uur spraak of meer) worden alleen vanaf het begin samengevat.

![De samenvatting van een transcriptie, met de kernpunten en hoofdstukken](/screenshots/summary.png)

## Vragen over de transcriptie stellen

Open de modus **Vragen**, typ een vraag bij **Stel een vraag over de transcriptie…** (bijv. wat er is besloten, of wie iets heeft gezegd) en druk op `Enter` of klik op **Vragen**.

- Het taalmodel antwoordt op basis van de transcriptie en van de vorige vragen en antwoorden, dus een vraag kan daarnaar verwijzen (bijv. „Waarom?”).
- Als de transcriptie tijdstempels heeft, verwijst elk antwoord naar de delen van de transcriptie waar het wordt gezegd. Klik op een ervan om de audio vanaf daar af te spelen.
- De vragen en antwoorden worden met de transcriptie in de geschiedenis bewaard. De prullenbak in de kop wist het gesprek, na bevestiging.

De vragen worden beantwoord door de aanbieder die ervoor is gekozen bij **Voorkeuren** → **AI** → **Vragen**, en dat is die van de samenvattingen totdat je hem wijzigt. Net als bij de samenvattingen wordt van zeer lange transcripties alleen het begin gelezen.

## Vertaling

Klik op **Vertalen**, kies de taal bij **Vertalen naar:** en de aanbieder bij **Vertalen met:**, en bevestig. Het dialoogvenster zegt wat de gekozen aanbieder doet, en biedt aan de API-sleutel in te stellen als die ontbreekt. De vertaling verschijnt in een paneel rechts van de oorspronkelijke tekst.

- Als de transcriptie tijdstempels heeft, wordt ze zin voor zin vertaald, met de tekst die ervoor en erna wordt gezegd als context, zodat de vertaling met de tijdstempels van elke zin begint: de zin die wordt afgespeeld, wordt gemarkeerd, en een klik op een zin speelt die af.
- Als je de platte tekst hebt bewerkt, wordt de bewerkte tekst vertaald, zonder tijdstempels.
- Beide teksten scrollen samen, zodat ze hetzelfde deel van de audio tonen. De ronde knop op de greep ertussen zet dat aan en uit. Sleep de greep om hun grootte te wijzigen, of dubbelklik erop om de grootte te herstellen.

Met de knoppen in de kop van de vertaling zoek en vervang je erin, kopieer en exporteer je hem, kies je **Opnieuw vertalen** (met dezelfde aanbieder en hetzelfde model) en **Vertaling verbergen**. Met de knop **Vertalen** kun je hem ook weer tonen, **Vertalen naar een andere taal…** of de **Vertaling verwijderen**.

### Meerdere talen

Een transcriptie kan naar meerdere talen worden vertaald, ook tegelijk, en elke vertaling wordt bewaard. De titel van het paneel kiest welke wordt getoond, zegt hoeveel van elke vertaling klaar is en eindigt met de optie om naar een andere taal te vertalen. Vertalen naar een taal die al een vertaling heeft, vervangt die na bevestiging, want de correcties ervan gaan verloren.

### De vertaling corrigeren en opnieuw timen

Een vertaling heeft vaak een andere timing nodig dan het origineel, bijv. ondertitels die langer duren om te lezen. Klik met de rechtermuisknop op een segment van de vertaling om:

- **Tekst bewerken…**: de tekst te wijzigen.
- **Timing bewerken…**: tot op de milliseconde te wijzigen wanneer het begint en eindigt. Typ de tijden als `00:01:05,900`, `01:05,9` of `65.9`.
- **Segment erna toevoegen…**: een segment toe te voegen, dat standaard de ruimte tot het volgende vult.
- **Segment verwijderen**.

### Zelf vertalen

Om de vertaling zelf te schrijven, kies je **Handmatig** bij **Vertalen met:**. Daarvoor is geen API-sleutel nodig. De vertaling begint met een leeg segment voor elke ondertitel van de transcriptie, getoond als **Nog niet vertaald**, en het paneel toont hoeveel er nog over zijn. Klik met de rechtermuisknop op een ervan en kies **Tekst vertalen…**: het dialoogvenster toont de oorspronkelijke tekst die in die tijd wordt gezegd.

### Ondertitels en export

- Vink bij transcripties van video's **Als ondertitels van de video tonen** aan in het menu **Vertalen** om de vertaling als ondertitels te tonen. Ook het menu van de video schakelt ze om. Zie [Video's met ondertitels bekijken](/nl/guides/transcript/#videos-met-ondertitels-bekijken).
- Om de vertaling als bestand op te slaan, klik je op de exportknop van het paneel. Ze wordt geëxporteerd in dezelfde [formaten](/nl/guides/transcript/#kopiëren-en-exporteren) als de transcriptie, met de taal in de bestandsnaam (bijv. `video.es.srt`), zodat videospelers ze met de video laden. Segmenten die nog niet vertaald zijn, worden uit de ondertitels weggelaten. Hetzelfde menu maakt een [kopie van de video met de ondertitels](/nl/guides/transcript/#de-video-met-ondertitels-exporteren).

:::tip
Om de transcriptie direct in een andere taal te krijgen, zonder aanbieder, kun je ook tijdens het transcriberen vertalen. Zie [Taal](/nl/guides/transcription-settings/#taal).
:::

## Aanbieders

De aanbieders kies je bij **Voorkeuren** → **AI**, apart voor samenvattingen, vragen en vertalingen.

| Aanbieder | Standaardmodel | API-sleutel |
| --- | --- | --- |
| OpenAI (standaard) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (lokaal) | `llama3.2` | Niet nodig |

Laat het **Model** leeg om het standaardmodel van de aanbieder te gebruiken, of typ de naam van een ander model van de aanbieder (bijv. `claude-sonnet-5-5` of `deepseek-reasoner`).

Vertalingen kunnen ook gemaakt worden door:

- **DeepL**, waarvoor een [DeepL-API-sleutel](https://www.deepl.com/your-account/keys) nodig is. Sleutels van het gratis abonnement werken ook.
- **Google Translate**, dat de Google-API-sleutel gebruikt met de Cloud Translation API ingeschakeld.

### Ollama

[Ollama](https://ollama.com) draait de modellen op je computer, zonder API-sleutel en zonder de tekst ergens naartoe te sturen. Installeer het, download een model (bijv. `ollama pull llama3.2`) en kies **Ollama** als aanbieder. Draait het niet op het standaardadres, wijzig dan de **Server-URL** bij **Voorkeuren** → **AI** (standaard `http://localhost:11434`).

:::note
Elke aanbieder rekent kosten voor het gebruik van zijn API, waarvoor Audiotext niet verantwoordelijk is. De API-sleutels worden bewaard in de wachtwoordopslag van je systeem. Zie [Bestanden en gegevens](/nl/reference/files-and-data/).
:::
