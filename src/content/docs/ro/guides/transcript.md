---
title: Transcrierea
description: Redați, căutați, corectați, verificați, copiați și exportați o transcriere și urmăriți sau exportați videoclipuri cu subtitrări.
sidebar:
  order: 3
---

Selectați o transcriere în [istoric](/ro/guides/history/) pentru a o deschide. Bara de instrumente comută între patru moduri, **Subtitrări**, **Text simplu**, **Rezumat** și **Întreabă**, și are butonul **Tradu** și meniul `⋯`.

Transcrierea este afișată într-un card cu limba ei ca titlu. Butoanele din antetul cardului caută și înlocuiesc în ea, o copiază, o exportă și permit **Transcrie din nou** (după confirmare, deoarece corecturile textului se pierd).

## Subtitrări

Afișează transcrierea împărțită în subtitrările videoclipului, cu momentul în care începe și se termină fiecare și, dacă vorbitorii au fost identificați, cu vorbitorul. Lungimea lor urmează [preferințele subtitrărilor](/ro/reference/preferences/#subtitrări).

Implicit, timpii sunt afișați la milisecundă, ca în subtitrări (`00:01:05,900 – 00:01:09,350`). Pentru a-i simplifica (`01:05 – 01:09`), debifați **Marcaje de timp precise (HH:MM:SS,mmm)** în meniul `⋯`.

Deasupra subtitrărilor, un rând le numără și, dacă vorbitorii au fost identificați, îi numără și pe ei (de ex. `Subtitrări: 120 · Vorbitori: 3`). Un segment lung împărțit în mai multe subtitrări contează ca mai multe.

Marcajele de timp sunt disponibile doar cu **WhisperX** și cu modelele `whisper-1` și `gpt-4o-transcribe-diarize` ale **API-ului Whisper**. Fără ele, transcrierea nu poate fi redată subtitrare cu subtitrare; folosiți în schimb modul **Text simplu**.

### Redați sunetul

- **Faceți clic pe o subtitrare** pentru a reda sunetul de acolo. Subtitrarea redată este evidențiată și păstrată în mijlocul textului. Cu temporizarea pe cuvânt, este evidențiat și fiecare cuvânt.
- Bara playerului permite redarea, pauza, saltul în orice punct și schimbarea **vitezei**, de la `0.5×` la `2×`, păstrând tonul vocilor.
- Comenzi rapide: `Spațiu` redă sau pune pauză, iar `←`/`→` merg înapoi sau înainte cu 5 secunde.

Dacă fișierul sursă a fost mutat sau șters, sunetul nu este disponibil, dar textul da. Înregistrările de la microfon sunt păstrate de Audiotext, deci pot fi redate oricând.

![O transcriere în redare, cu segmentul curent evidențiat](/screenshots/transcript.png)

### Urmăriți videoclipuri cu subtitrări

Transcrierile videoclipurilor afișează videoclipul deasupra textului. Meniul lui permite **Afișează subtitrările pe videoclip** și alegerea **Dimensiunii** (mică, medie sau mare), a **Poziției** (jos sau sus) și a **Stilului** (fundal întunecat sau contur). Dacă transcrierea are [traduceri](/ro/guides/summary-and-translation/#traducere), meniul alege și dacă subtitrările arată **Transcrierea** sau **Traducerea** într-o limbă. Butonul **Subtitrări** din bara playerului le afișează sau le ascunde și el, iar săgeata de lângă el deschide același meniu.

## Căutați și înlocuiți

Apăsați `Ctrl+F` (`⌘F` pe macOS) sau faceți clic pe lupa din antet pentru a deschide fereastra de căutare și înlocuire în textul la care lucrați: transcrierea sau traducerea ei. Găsește textul pe măsură ce tastați (marcajele de timp și vorbitorii nu sunt căutați) și arată câte potriviri există.

- `Enter` și `Shift+Enter`, sau săgețile, trec la potrivirea următoare și anterioară.
- **Înlocuiește** înlocuiește potrivirea curentă, iar **Înlocuiește tot** pe toate, de ex. un nume scris greșit. Bifați **Potrivire majuscule** pentru a găsi doar textul cu aceleași majuscule.
- Fereastra nu este modală, deci puteți citi și reda textul cât timp este deschisă. **Păstrează deasupra** o ține deasupra ferestrei principale.
- `Esc` o închide.

În modul **Text simplu**, fereastra doar caută (**Caută în transcriere**), deoarece o potrivire de acolo nu poate fi legată de o subtitrare. Reveniți la **Subtitrări** pentru a înlocui.

## Corectați transcrierea

Pentru a corecta transcrierea păstrând marcajele de timp (folosite de subtitrări și redare), folosiți fereastra [Caută și înlocuiește](#căutați-și-înlocuiți) sau faceți clic dreapta pe o subtitrare:

- **Redă de aici**: o redă.
- **Copiază**: îi copiază textul.
- **Editează textul…**: îi schimbă textul.
- **Editează temporizarea…**: schimbă când începe și se termină, la milisecundă. Scrieți timpii ca `00:01:05,900`, `01:05,9` sau `65.9`.
- **Adaugă subtitrare după…**: adaugă o subtitrare lipsă, care implicit umple pauza până la următoarea. Dacă vorbitorii au fost identificați, alegeți cine o spune (implicit, vorbitorul subtitrării anterioare) sau scrieți unul nou. Se adaugă după ce îi scrieți textul.
- **Schimbă vorbitorul…**: dacă vorbitorii au fost identificați, alege cine o spune, sau un vorbitor nou. Spre deosebire de **Redenumește vorbitorii…**, schimbă doar această subtitrare.
- **Redenumește vorbitorii…**: dă un nume fiecărui vorbitor (`SPEAKER_00` → `Ana`). Dacă doi vorbitori primesc același nume, sunt uniți. Este și în meniul `⋯`.
- **Șterge subtitrarea**: o șterge. Dacă are text, cere mai întâi confirmarea.

Cuvintele care nu se schimbă își păstrează temporizarea, deci sunt în continuare evidențiate la redare. O subtitrare căreia îi schimbați temporizarea, sau pe care o adăugați, nu are temporizarea cuvintelor, deci cuvintele ei nu sunt evidențiate și nici subliniate ca nesigure.

## Verificați cuvintele cu încredere scăzută

Cuvintele de care motorul este cel mai puțin sigur sunt subliniate, ca să știți ce să verificați întâi. WhisperX evaluează fiecare cuvânt când îi stabilește temporizarea (**Temporizare pe cuvânt**, activată implicit), iar modelul `whisper-1` al API-ului Whisper evaluează fiecare segment, deci segmentele lui sunt subliniate în întregime.

O bară deasupra textului arată câte cuvinte mai sunt de verificat (de ex. `3 din 12 de verificat`):

- Săgețile ei, sau `Ctrl+J` și `Shift+Ctrl+J` (`⌘J` și `⇧⌘J` pe macOS), trec la cuvântul următor și anterior și mută playerul la el. Cu **Redare automată**, fiecare cuvânt este redat cu puțin context în jur.
- `Enter` acceptă cuvântul la care ați ajuns așa cum este și trece la următorul. **Acceptă restul** acceptă toate cuvintele rămase, iar **Anulează** anulează ultima verificare.
- Faceți clic pe un cuvânt pentru a-l corecta pe loc: tastați textul corect și apăsați `Enter` (sau **Acceptă** fără modificări). **Redă din nou** (`Ctrl+R`, `⌘R` pe macOS) îl redă din nou, iar `Esc` închide.
- **Doar cele marcate** afișează doar subtitrările cu cuvinte de verificat.
- Cuvintele sunt marcate și sub poziția sunetului. Faceți clic pe un marcaj pentru a merge la cuvântul lui.

Când toate sunt verificate, **Verifică din nou cuvintele acceptate** readuce cuvintele pe care le-ați acceptat. Cuvintele corectate rămân verificate.

Cuvintele sunt subliniate când scorul lor este sub 40%. Alegeți alt prag, de la 20% la 70%, în `⋯` → **Prag de încredere scăzută** sau din **Ajustează pragul** în bară. Pentru a nu le mai sublinia și a ascunde bara, debifați **Evidențiază cuvintele cu încredere scăzută** în meniul `⋯`.

Dacă o transcriere nu are scoruri, meniul `⋯` spune de ce: **Activează „Temporizare pe cuvânt” și transcrie din nou**, **Nu există un model de aliniere pentru limba sa**, **Transcrie din nou pentru a evalua cuvintele** (a fost făcută înainte ca acestea să fie evaluate) sau **Doar WhisperX și whisper-1 evaluează cuvintele**.

## Text simplu

Modul **Text simplu** afișează textul transcrierii fără marcaje de timp. Este construit din subtitrări, deci este doar pentru citire, cum spune nota de lângă moduri: pentru a-l schimba, [corectați subtitrările](#corectați-transcrierea), iar textul simplu le urmează. Astfel, toate exporturile și traducerile folosesc același text.

Transcrierile fără marcaje de timp (de ex. de la API-ul Google) nu au subtitrări, așa că textul lor simplu poate fi editat liber, ca într-un editor de text. Modificările se salvează automat.

:::note
Versiunile anterioare permiteau editarea textului simplu al transcrierilor cu subtitrări. Când se deschide una dintre aceste transcrieri (sau traduceri), textul ei simplu este reconstruit din subtitrări, așa că acele editări sunt înlocuite.
:::

## Copiați și exportați

Butonul de copiere din antet copiază textul transcrierii.

Butonul de export (sau `Ctrl+S`, `⌘S` pe macOS) o salvează ca:

| Format | Conținut |
| --- | --- |
| Document Word (`.docx`) | La fel ca Markdown, gata de editat sau tipărit |
| JSON (`.json`) | Textul, segmentele cu marcaje de timp, cuvinte și vorbitori, și rezumatul, dacă există |
| Markdown (`.md`) | Rezumatul, dacă există, și textul în paragrafe cu marcajul de timp și vorbitorul fiecăruia |
| Subtitrări (`.srt`) | Subtitrări pentru playere video |
| Subtitrări cu stil (`.ass`) | Subtitrări cu o culoare pentru fiecare vorbitor, pentru playere și editoare video |
| Subtitrări web (`.vtt`) | Subtitrări pentru web |
| Tabel (`.tsv`) | Un rând pe segment, cu începutul și sfârșitul (în milisecunde) și textul |
| Text simplu (`.txt`) | Textul |

Subtitrările și tabelul necesită marcaje de timp. [Traducerile](/ro/guides/summary-and-translation/#subtitrări-și-export) și [rezumatul](/ro/guides/summary-and-translation/#rezumat) se exportă din propriile panouri.

### Exportați videoclipul cu subtitrările

Pentru a partaja un videoclip acolo unde nu se pot încărca fișiere de subtitrări (de ex. o rețea socială), alegeți **Videoclip cu subtitrări (.mp4)…** în meniul de export al transcrierii sau al unei traduceri. Audiotext face o copie a videoclipului cu subtitrările desenate pe el, așa cum apar în aplicație: cu dimensiunea, poziția și stilul lor (consultați [Urmăriți videoclipuri cu subtitrări](#urmăriți-videoclipuri-cu-subtitrări)).

Copia se face în fundal, iar starea îi arată progresul. Pentru a o anula, alegeți **Oprește adăugarea subtitrărilor în videoclip** în același meniu. Copia este un fișier MP4 (video H.264 și audio AAC), iar videoclipul original nu se schimbă.

Dacă niciun font al sistemului nu are unele caractere ale subtitrărilor, ele sunt desenate ca pătrățele, iar Audiotext le enumeră la final. Consultați [Depanare](/ro/help/troubleshooting/#videoclipul-cu-subtitrări-arată-pătrățele).

## Redenumire, etichete și note

Antetul transcrierii arată numele, sursa, data și eticheta. Faceți dublu clic pe nume pentru a o redenumi, clic pe etichetă pentru a o schimba sau clic pe **Adaugă notă** pentru a scrie o notă. Faceți clic pe notă, sau pe creionul ei, pentru a o edita, și pe coșul ei pentru a o șterge.

Meniul `⋯` are și aceste opțiuni și deschide dosarul fișierului sursă sau **dosarul fișierelor salvate**. Mai multe opțiuni sunt în [istoric](/ro/guides/history/).
