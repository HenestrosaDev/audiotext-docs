---
title: Setările transcrierii
description: Alegeți motorul, limbile, contextul, opțiunile și ieșirea fiecărei transcrieri.
sidebar:
  order: 2
---

Înainte de a transcrie, Audiotext afișează setările transcrierii, grupate în carduri. Acestea sunt reținute pentru data viitoare, iar fiecare transcriere păstrează setările cu care a fost făcută.

![Setările transcrierii unui fișier](/screenshots/transcription-settings.png)

## Motor

**Metodă de transcriere**:

| Motor | Unde rulează | Cost | Observații |
| --- | --- | --- | --- |
| **WhisperX** (implicit) | Computerul dumneavoastră | Gratuit și nelimitat | Privat și offline. Mai multe opțiuni: vorbitori, temporizare pe cuvânt, text live. |
| **API Whisper** | Serverele OpenAI | Plătit pe minut | Necesită o [cheie API OpenAI](/ro/reference/preferences/#chei-api). Pentru computerele care nu rulează WhisperX fluent. |
| **API Google** | Serverele Google | Nivel gratuit sau plătit | Calitate mai slabă și fără marcaje de timp. Cheia API este opțională. |

**Modelul** depinde de motor. La WhisperX, modelele mai mari sunt mai precise, dar mai lente. La API-ul Whisper, determină dacă transcrierea are marcaje de timp și vorbitori. Comparați-le în [Motoare](/ro/reference/engines/).

## Limbă

- **Limba audio**: implicit **Detectare automată**. Alegerea ei evită erorile în înregistrările scurte sau mixte. API-ul Google nu o poate detecta, așa că trebuie să o alegeți.
- **Limba transcrierii**: implicit **La fel ca audio**. Alegeți altă limbă pentru a traduce sunetul în timpul transcrierii.

Când limbile diferă, apar opțiunile de **Traducere**:

- **Tradu cu Whisper (recomandat)**: Whisper transcrie și traduce sunetul într-un singur pas. Poate traduce doar în engleză.
- **Scrie-o direct în limba: _limba_ (experimental)**: i se cere lui Whisper să scrie transcrierea direct în acea limbă. Funcționează bine pentru multe limbi, dar verificați rezultatul.

API-ul Google nu poate traduce. Pentru a traduce ulterior o transcriere în orice limbă, cu mai mulți furnizori, folosiți butonul [Tradu](/ro/guides/summary-and-translation/#traducere) al transcrierii.

## Context

Două câmpuri opționale care ajută modelul:

- **Cuvinte cheie**: nume, termeni sau acronime rostite în înregistrare, separate prin virgulă (de ex. `Audiotext, WhisperX, Henestrosa`), ca să fie scrise corect. Sunt doar indicii: un cuvânt cheie este scris doar dacă este rostit.
- **Descriere**: despre ce este înregistrarea, de exemplu subiectul sau cadrul (de ex. `Un interviu despre recunoașterea vorbirii`).

Sunt folosite de WhisperX și de API-ul Whisper, cu excepția modelului `gpt-4o-transcribe-diarize`. API-ul Google nu le folosește.

## Opțiuni

- **Temporizare pe cuvânt** (WhisperX): aliniază fiecare cuvânt cu sunetul, pentru a-l evidenția la redare. Durează puțin mai mult. Subtitrările o folosesc deja.
- **Extrage vocea**: reduce muzica și zgomotul de fond înainte de transcriere.
- **Identifică vorbitorii** (WhisperX): indică cine vorbește în fiecare parte, de ex. `SPEAKER_00`. Dacă știți câte persoane vorbesc, introduceți numărul în **Număr de vorbitori** (`0` îl detectează). Necesită un token Hugging Face gratuit; consultați [Identificarea vorbitorilor](#identificarea-vorbitorilor). La API-ul Whisper, vorbitorii sunt identificați de modelul `gpt-4o-transcribe-diarize`.

### Identificarea vorbitorilor

Modelul care identifică vorbitorii, [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1), este gratuit, dar necesită un token Hugging Face:

1. Creați un cont pe [Hugging Face](https://huggingface.co/join) și acceptați condițiile [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1).
2. Creați un token cu rolul `Read` în [setările dumneavoastră](https://huggingface.co/settings/tokens).
3. Faceți clic pe **Setează tokenul Hugging Face…** și lipiți-l.

Modelul este descărcat la prima utilizare. Apoi vorbitorii sunt identificați offline.

## Text live

Afișat doar pentru microfon. Consultați [Text live](/ro/guides/sources/#text-live).

## Dosar și Ieșire

Afișate doar pentru dosare:

- **Monitorizează dosarul**: consultați [Monitorizați un dosar](/ro/guides/sources/#monitorizați-un-dosar).
- **Tipuri de fișiere**: la WhisperX, unul sau mai multe dintre `.txt`, `.srt`, `.vtt`, `.json`, `.tsv` și `.aud`. La API-ul Whisper, formatul fișierelor (`text`, `json`, `verbose_json`, `srt` sau `vtt`); subtitrările necesită un model cu marcaje de timp. API-ul Google returnează text simplu (`.txt`).
- **Locație**: fișierele sunt salvate lângă fiecare fișier sursă. Faceți clic pe **Schimbă…** pentru a le salva în alt dosar (subdosarele lui sunt recreate) sau pe **Lângă sursă** pentru a reveni.
- **Suprascrie fișierele existente**: transcrie din nou fișierele care au deja o transcriere și o înlocuiește.

Opțiunile subtitrărilor (lățimea rândului, numărul de rânduri, cuvintele evidențiate) sunt în [Preferințe](/ro/reference/preferences/#subtitrări).
