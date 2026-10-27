---
title: Surse audio
description: Transcrieți fișiere, videoclipuri YouTube și linkuri, înregistrări de la microfon, dosare și dosare monitorizate.
sidebar:
  order: 1
---

Audiotext transcrie din patru tipuri de surse, pe care le alegeți în bara de sus, la **Transcriere nouă**.

## Fișier

Transcrie un fișier audio sau video. Faceți clic pe **Alege fișier…** sau trageți fișierul în fereastră. Fereastra de selecție afișează implicit **Toate fișierele acceptate**; puteți afișa doar **Fișiere audio** sau **Fișiere video**. Formatele acceptate sunt în [Formate și limbi](/ro/reference/formats-and-languages/).

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

### Înregistrarea sunetului computerului

Pentru a transcrie ce redă computerul (un apel video, un webinar, un videoclip care nu poate fi descărcat), înregistrați-l de pe un dispozitiv care trimite sunetul difuzoarelor către o intrare. Configurați-l o dată, faceți clic pe butonul de reîmprospătare și alegeți-l din lista de microfoane. Se înregistrează tot ce redă computerul, inclusiv notificările, dar nu și vocea dvs.

- **Windows**: rulați `mmsys.cpl` și, în fila **Înregistrare**, faceți clic dreapta pe listă pentru a afișa dispozitivele dezactivate și activați **Stereo Mix**. Dacă placa de sunet nu îl are, instalați [VB-CABLE](https://vb-audio.com/Cable/), setați **CABLE Input** ca dispozitiv de ieșire și alegeți **CABLE Output** în Audiotext. Pentru a auzi în continuare sunetul, bifați **Ascultați acest dispozitiv** în proprietățile **CABLE Output**.
- **macOS**: instalați [BlackHole](https://existential.audio/blackhole/) (`brew install blackhole-2ch`) și alegeți **BlackHole 2ch** în Audiotext. Pentru a auzi în continuare sunetul, creați un [dispozitiv cu ieșiri multiple](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device) cu difuzoarele și BlackHole și setați-l ca dispozitiv de ieșire.
- **Linux** (PulseAudio sau PipeWire): alegeți **pulse** în Audiotext și începeți înregistrarea. Apoi, în fila **Recording** din `pavucontrol`, schimbați sursa Audiotext cu monitorul difuzoarelor.

## Dosar

Transcrie toate fișierele audio și video dintr-un dosar și, dacă **Include subdosarele** este activat pe cardul **Dosar**, din subdosarele lui. Faceți clic pe **Alege dosar…** sau plasați dosarul în fereastră. Audiotext vă spune câte fișiere a găsit. Pentru a omite unele fișiere, scrieți numele sau căile lor, separate prin virgule, în **Omite fișierele care corespund cu** (de ex. `*.wav, drafts/*`). Fișierele ascunse sunt omise întotdeauna.

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

Dacă două fișiere au același nume și altă extensie (de ex. `talk.mp3` și `talk.mp4`), transcrierile lor păstrează extensia în nume (`talk.mp3.txt` și `talk.mp4.txt`), ca să nu se înlocuiască una pe alta.

Fișierele care au deja o transcriere sunt **omise**: un fișier este omis doar dacă are toate tipurile de fișiere pe care le-ați selectat, așa că adăugarea unui tip de fișier îl transcrie din nou. Dacă un fișier nu poate fi transcris, celelalte sunt transcrise oricum.

### Fișierele unui dosar

Pagina unui dosar din istoric îi listează fișierele, cu starea, durata și dimensiunea fiecăruia și o previzualizare a textului. Le puteți căuta, filtra după stare (**Toate**, **Finalizate**, **Eșuate** sau **În așteptare**) și sorta după nume, stare, durată sau dimensiune. Fișierele mutate sau șterse sunt marcate cu **Fișierul nu a fost găsit**.

- Faceți clic pe un fișier pentru a-i deschide transcrierea, sau faceți clic pe butonul lui `⋯` (ori clic dreapta pe el) pentru a-i copia textul, a-l deschide direct în export, rezumat sau traducere, a-l afișa în managerul de fișiere sau a alege **Transcrie din nou acest fișier**.
- Selectați mai multe fișiere cu `Ctrl`/`⌘` sau `Shift`, ori toate fișierele afișate cu `Ctrl+A` / `⌘A`, și alegeți **Transcrie din nou**, **Exportă…** (pentru a le exporta împreună într-un singur fișier TXT, Markdown sau Word) sau **Elimină din istoric…**. `Enter` deschide fișierul selectat, iar `Esc` anulează selecția.
- **Reîncearcă cele eșuate** transcrie din nou fișierele eșuate. **Scanează din nou dosarul** transcrie doar fișierele fără transcriere, cum ar fi cele noi, și spune câte au fost omise pentru că aveau deja una.
- Meniul `⋯` al dosarului are **Transcrie din nou tot…** (transcrie din nou toate fișierele lui, înlocuindu-le transcrierile), **Exportă tot…** (într-un singur fișier), o opțiune pentru a scoate din listă fișierele lipsă, și opțiunile pentru a deschide dosarul sursă sau dosarul fișierelor salvate.
- Când schimbați setările dosarului, sunt indicate fișierele transcrise cu alte setări (motor, model, limbă…), cu butonul **Transcrie-le din nou**.

Antetul arată unde sunt salvate fișierele și are un link către dosarul sursă. **Editează setările** schimbă setările dosarului, iar **Salvează și scanează din nou** transcrie cu ele fișierele cărora le lipsește o transcriere.

### Monitorizați un dosar

Activați **Monitorizează dosarul** pe cardul **Dosar** pentru a transcrie în continuare fișierele adăugate în dosar (sau în subdosarele lui) până când faceți clic pe **Oprește monitorizarea**. Este util pentru înregistrările unui reportofon sau ale unui instrument de ședințe copiate într-un dosar.

- Fișierele pe care dosarul le conține deja sunt omise, cu excepția cazului în care activați **Transcrie fișierele aflate deja în dosar**: atunci cele fără transcriere sunt transcrise mai întâi.
- Un fișier este transcris după ce a fost copiat complet (când dimensiunea lui nu se mai schimbă), deci fișierele mari nu sunt transcrise pe jumătate.
- Dosarele monitorizate când Audiotext a fost închis sunt monitorizate din nou când se deschide, continuând de la fișierele pe care le văzuseră deja. Dosarele oprite pot fi monitorizate din nou cu **Reia monitorizarea**.
- Dacă dosarul nu este disponibil (de ex. se află pe o unitate care nu este conectată), Audiotext îl așteaptă în loc să eșueze.
- Pentru a transcrie altceva sau a înregistra, dosarul este pus pe pauză (noua transcriere afișează **Se pornește…** până atunci) și apoi monitorizat din nou.
- Erorile nu opresc monitorizarea, iar fișierele transcrise împreună sunt anunțate într-o singură notificare.

## Coada

Puteți configura o transcriere nouă în timp ce alta este în curs: butonul devine **Adaugă în coadă**, iar ea începe când se termină cea curentă. Transcrierile din coadă și cele în curs apar în istoric.
