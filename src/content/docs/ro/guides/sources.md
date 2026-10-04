---
title: Surse audio
description: Transcrieți fișiere, videoclipuri YouTube și linkuri, înregistrări de la microfon, dosare și dosare monitorizate.
sidebar:
  order: 1
---

Audiotext transcrie din patru tipuri de surse, pe care le alegeți în bara de sus, la **Transcriere nouă**.

## Fișier

Transcrie un fișier audio sau video. Faceți clic pe **Alege un fișier…** sau trageți fișierul în fereastră. Fereastra de selecție afișează implicit **Toate fișierele acceptate**; puteți afișa doar **Fișiere audio** sau **Fișiere video**. Formatele acceptate sunt în [Formate și limbi](/ro/reference/formats-and-languages/).

Se poate adăuga un singur fișier odată. Pentru a transcrie mai multe fișiere, folosiți sursa [Dosar](#dosar).

## URL

Transcrie un **videoclip YouTube** sau un **link direct către un fișier audio sau video** (de exemplu, episodul unui podcast). Lipiți URL-ul (cu **Lipește** sau `Ctrl+V`) și faceți clic pe **Continuă**. URL-ul trebuie să înceapă cu `http://` sau `https://`.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

Mai întâi se descarcă sunetul, deci este necesară conexiunea la internet.

## Microfon

Înregistrează vocea dumneavoastră sau o ședință și o transcrie. Înregistrarea rămâne în istoric, ca să o puteți reda mai târziu.

1. Alegeți microfonul din listă (faceți clic pe butonul de reîmprospătare dacă tocmai l-ați conectat).
2. Faceți clic pe butonul de înregistrare (sau apăsați `Ctrl+Enter`, `⌘↩` pe macOS) pentru a începe. Indicatorul de nivel arată dacă sunetul este **Prea încet**, are un **Nivel bun** sau este **Prea tare**.
3. Faceți clic din nou pentru a opri și a transcrie.

### Text live

Cu **WhisperX**, activați **Afișează textul în timpul înregistrării** pe cardul **Text live** pentru a vedea o ciornă a textului în timp ce vorbiți. Ciorna este scrisă de un **Model live** rapid (implicit `small`). La oprire, întreaga înregistrare este transcrisă din nou cu modelul motorului, mai precis, iar ciorna este înlocuită.

![Textul live în timpul înregistrării de la microfon](/screenshots/live-text.png)

:::caution
Sistemul trebuie să detecteze un dispozitiv de intrare și să permită aplicației să îl folosească. Altfel se afișează **Nu s-a găsit niciun microfon**. Pe macOS, permiteți accesul pentru Audiotext în **Configurări sistem** → **Confidențialitate și securitate** → **Microfon**.
:::

## Dosar

Transcrie toate fișierele audio și video dintr-un dosar **și din subdosarele lui**. Faceți clic pe **Alege un dosar…** sau trageți dosarul în fereastră. Audiotext arată câte fișiere a găsit.

Transcrierea fiecărui fișier este salvată lângă acesta (sau în alt dosar ales pe cardul **Ieșire**), cu același nume și extensia fiecărui **tip de fișier** selectat. De exemplu, cu `.txt` și `.vtt`:

```text
files-to-transcribe
├── paranoid-android.mp3
├── paranoid-android.txt
├── paranoid-android.vtt
└── movies
    ├── mulholland-dr.avi
    ├── mulholland-dr.txt
    └── mulholland-dr.vtt
```

Fișierele care au deja o transcriere sunt **omise**, cu excepția cazului în care activați **Suprascrie fișierele existente**. Astfel, dacă adăugați un fișier în dosar și îl transcrieți din nou, se transcrie doar fișierul nou.

Dacă un fișier nu poate fi transcris, celelalte sunt transcrise oricum, iar vizualizarea dosarului arată care au eșuat și de ce. **Transcrie din nou** repetă dosarul, iar butonul dosarului deschide dosarul cu fișierele salvate.

### Monitorizați un dosar

Activați **Monitorizează dosarul** pe cardul **Dosar** pentru a transcrie în continuare fișierele adăugate în dosar (sau în subdosarele lui) până când faceți clic pe **Oprește monitorizarea**. Este util pentru înregistrările unui reportofon sau ale unui instrument de ședințe copiate într-un dosar.

- Fișierele pe care dosarul le conține deja sunt omise. Pentru a le transcrie, transcrieți dosarul fără monitorizare.
- Un fișier este transcris după ce a fost copiat complet (când dimensiunea lui nu se mai schimbă), deci fișierele mari nu sunt transcrise pe jumătate.
- Erorile nu opresc monitorizarea.

## Coada

Puteți configura o transcriere nouă în timp ce alta este în curs: butonul devine **Adaugă în coadă**, iar ea începe când se termină cea curentă. Transcrierile din coadă și cele în curs apar în istoric.
