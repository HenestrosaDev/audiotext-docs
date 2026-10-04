---
title: Transcrierea
description: Redați, căutați, corectați, copiați și exportați o transcriere și urmăriți videoclipuri cu subtitrări.
sidebar:
  order: 3
---

Selectați o transcriere în [istoric](/ro/guides/history/) pentru a o deschide. Bara de instrumente comută între trei moduri, **Transcriere cu marcaje**, **Text simplu** și **Rezumat**, și are butoanele **Tradu**, **Copiază** și **Exportă**.

## Transcriere cu marcaje

Afișează fiecare propoziție cu marcajul ei de timp și, dacă vorbitorii au fost identificați, cu vorbitorul.

Marcajele de timp sunt disponibile doar cu **WhisperX** și cu modelele `whisper-1` și `gpt-4o-transcribe-diarize` ale **API-ului Whisper**. Fără ele, transcrierea nu poate fi redată propoziție cu propoziție; folosiți în schimb modul **Text simplu**.

### Redați sunetul

- **Faceți clic pe o propoziție** pentru a reda sunetul de acolo. Propoziția redată este evidențiată, iar textul urmează redarea. Cu temporizarea pe cuvânt, este evidențiat și fiecare cuvânt.
- Bara playerului permite redarea, pauza, saltul în orice punct și schimbarea **vitezei**, de la `0.5×` la `2×`, păstrând tonul vocilor.
- Comenzi rapide: `Spațiu` redă sau pune pauză, iar `←`/`→` merg înapoi sau înainte cu 5 secunde.

Dacă fișierul sursă a fost mutat sau șters, sunetul nu este disponibil, dar textul da. Înregistrările de la microfon sunt păstrate de Audiotext, deci pot fi redate oricând.

![O transcriere în redare, cu propoziția curentă evidențiată](/screenshots/transcript.png)

### Urmăriți videoclipuri cu subtitrări

Transcrierile videoclipurilor afișează videoclipul deasupra textului. Meniul lui permite **Afișează subtitrările pe videoclip** și alegerea **Dimensiunii** (mică, medie sau mare), a **Poziției** (jos sau sus) și a **Stilului** (fundal întunecat sau contur).

### Căutați

Apăsați `Ctrl+F` (`⌘F` pe macOS) și tastați. `Enter` și `Shift+Enter` trec la potrivirea următoare și anterioară, iar `Esc` golește căutarea.

## Corectați transcrierea

Pentru a corecta transcrierea păstrând marcajele de timp (folosite de subtitrări și redare), folosiți opțiunile meniului `⋯` sau faceți clic dreapta pe o propoziție:

- **Caută și înlocuiește…**: înlocuiește un cuvânt sau o expresie în toată transcrierea, de ex. un nume scris greșit. Arată de câte ori apare textul înainte de înlocuire și poate folosi **Potrivire majuscule**.
- **Redenumește vorbitorii…**: dă un nume fiecărui vorbitor (`SPEAKER_00` → `Ana`). Dacă doi vorbitori primesc același nume, sunt uniți.
- **Editează textul…**: faceți clic dreapta pe o propoziție pentru a-i schimba textul.
- **Redă de aici**: faceți clic dreapta pe o propoziție pentru a o reda.

Cuvintele care nu se schimbă își păstrează temporizarea, deci sunt în continuare evidențiate la redare.

## Text simplu

Modul **Text simplu** vă permite să editați liber textul, ca într-un editor de text. Modificările se salvează automat. Transcrierea cu marcaje păstrează textul original cu marcajele de timp, deci subtitrările nu folosesc editările textului simplu.

## Copiați și exportați

**Copiază** copiază textul modului curent (transcrierea, rezumatul sau traducerea).

**Exportă** (sau `Ctrl+S`, `⌘S` pe macOS) salvează transcrierea ca:

| Format | Conținut |
| --- | --- |
| Text simplu (`.txt`) | Textul |
| Markdown (`.md`) | Rezumatul, dacă există, și textul în paragrafe cu marcajul de timp și vorbitorul fiecăruia |
| Document Word (`.docx`) | La fel ca Markdown, gata de editat sau tipărit |
| Subtitrări (`.srt`) | Subtitrări pentru playere video |
| Subtitrări web (`.vtt`) | Subtitrări pentru web |
| Tabel (`.tsv`) | Un rând pe propoziție, cu începutul și sfârșitul (în milisecunde) și textul |
| JSON (`.json`) | Textul, segmentele cu marcaje de timp, cuvinte și vorbitori, și rezumatul, dacă există |

Subtitrările și tabelul necesită marcaje de timp.

## Redenumire, etichete și note

Antetul transcrierii arată numele, sursa, data și eticheta. Faceți dublu clic pe nume pentru a o redenumi, clic pe etichetă pentru a o schimba sau clic pe **Adaugă notă** pentru a scrie o notă. Mai multe opțiuni sunt în [istoric](/ro/guides/history/).
