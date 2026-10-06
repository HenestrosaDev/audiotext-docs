---
title: Prima dumneavoastră transcriere
description: Un tur al ferestrei Audiotext și pașii pentru a transcrie un fișier audio sau video.
sidebar:
  order: 2
---

## Fereastra

Fereastra Audiotext are trei părți:

- **Bara de sus**: butoanele pentru o **Transcriere nouă** dintr-un **Fișier**, un **URL**, **Microfon** sau un **Dosar**, starea aplicației și rotița care deschide [Preferințele](/ro/reference/preferences/). Butonul din stânga afișează sau ascunde istoricul.
- **Istoricul**, în stânga: toate transcrierile dumneavoastră, pe care le puteți căuta, fixa, grupa și redenumi. Consultați [Istoric](/ro/guides/history/).
- **Zona principală**: sursa pe care o configurați, progresul unei transcrieri sau transcrierea selectată în istoric.

![Părțile ferestrei Audiotext: bara de sus, istoricul și zona principală](/screenshots/window.png)

La deschiderea aplicației, zona principală întreabă **Ce doriți să transcrieți?** și afișează un card pentru fiecare tip de sursă.

:::tip
Trageți un fișier sau un dosar oriunde în fereastră pentru a-l transcrie.
:::

## Transcrieți un fișier

1. Faceți clic pe **Fișier** în bara de sus (sau apăsați `Ctrl+O`, `⌘O` pe macOS) și alegeți un fișier audio sau video, ori trageți-l în fereastră. Apoi faceți clic pe **Continuă**.
2. Verificați setările. Valorile implicite funcționează bine pentru majoritatea înregistrărilor:
   - **Motor**: WhisperX, care rulează pe computerul dumneavoastră. Alegeți un **Model** mai mic (de exemplu `small`) dacă computerul este lent.
   - **Limbă**: **Limba audio** este detectată automat. Alegeți-o dacă o cunoașteți, pentru a evita erorile. Pentru a traduce, alegeți altă **Limba transcrierii**.
   - **Context** și **Opțiuni**: indicii și funcții opționale, cum ar fi identificarea vorbitorilor.

   Le găsiți pe toate în [Setările transcrierii](/ro/guides/transcription-settings/).
3. Faceți clic pe **Începe transcrierea** (sau apăsați `Ctrl+Enter`, `⌘↩` pe macOS).

În timpul lucrului se afișează progresul fiecărui pas (încărcarea modelului, transcrierea, alinierea cuvintelor…). Între timp puteți folosi în continuare Audiotext: rezultatul este salvat în istoric și se deschide când este gata. Pentru a o anula, faceți clic pe **Anulează** sau apăsați `Esc`.

Dacă o altă transcriere este în curs, butonul devine **Adaugă în coadă**, iar cea nouă începe când se termină cea curentă.

## Citiți și folosiți rezultatul

Când se termină, transcrierea se deschide:

- Faceți clic pe un segment pentru a reda sunetul de acolo.
- Comutați între **Transcriere cu marcaje**, **Text simplu** și **Rezumat**.
- Folosiți **Tradu**, **Copiază** și **Exportă** pentru a o traduce, copia sau salva ca fișier.

Consultați [Transcrierea](/ro/guides/transcript/) pentru tot ce puteți face cu ea.

## Comenzi rapide de la tastatură

| Comandă | Acțiune |
| --- | --- |
| `Ctrl+Enter` / `⌘↩` | Pornirea transcrierii sau pornirea și oprirea înregistrării |
| `Ctrl+O` / `⌘O` | Alegerea unui fișier (sau a unui dosar, pentru sursa Dosar) |
| `Ctrl+S` / `⌘S` | Exportul transcrierii afișate |
| `Ctrl+F` / `⌘F` | Căutarea în transcriere |
| `Esc` | Anularea transcrierii în curs |
| `Spațiu` | Redarea sau întreruperea sunetului |
| `←` / `→` | Înapoi sau înainte cu 5 secunde |
