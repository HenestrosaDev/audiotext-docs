---
title: Preferințe
description: Toate setările ferestrei Preferințe, filă cu filă.
sidebar:
  order: 2
---

**Preferințele** conțin setările care nu se schimbă la fiecare transcriere. Deschideți-le cu rotița din dreapta sus a ferestrei. Modificările se salvează automat.

## General

- **Aspect**: **Sistem** (urmează sistemul), **Luminos** sau **Întunecat**.
- **Dimensiunea interfeței**: dimensiunea textului și a comenzilor, de la 80% la 200%. Implicit `100%`. Modificarea se aplică imediat.
- **Limba interfeței**: limba Audiotext sau **Limba sistemului**. Consultați [limbile disponibile](/ro/reference/formats-and-languages/#limbile-interfeței).
- **Formatul datei**: cum sunt afișate datele transcrierilor, în limba interfeței: scurt (`04.10.2026`), mediu (`4 oct. 2026`, implicit), lung (`4 octombrie 2026`) sau ISO (`2026-10-04`). Meniul arată fiecare format cu un exemplu.
- **Formatul orei**: **Automat** (ceasul limbii interfeței), de 12 ore (`1:30 p.m.`) sau de 24 de ore (`13:30`).
- **Notificări**: afișează o notificare de sistem când o transcriere este gata (pentru un dosar, când sunt gata toate fișierele lui, iar pentru un dosar monitorizat, de fiecare dată când este gata un fișier nou). Activat implicit. Pe macOS provin de la **Script Editor**, iar pe Windows de la **Windows PowerShell**, așa că se permit sau se dezactivează pentru aceste aplicații în setările sistemului. Pe Linux necesită `notify-send` (pachetul `libnotify-bin` sau `libnotify`).
- **Caută automat actualizări**: verifică dacă există o versiune nouă la deschiderea aplicației și, dacă există, afișează în bara de sus butonul **Versiunea … este disponibilă**, care deschide pagina de descărcare. Versiunile preliminare nu sunt oferite. Activat implicit.

## Furnizori

Furnizorii [rezumatelor, întrebărilor și traducerilor](/ro/guides/summary-and-translation/):

- **Rezumat** → **Furnizor** și **Model**.
- **Întreabă** → **Furnizor** și **Model**: cei care răspund la întrebările despre transcrieri. Până îi schimbați, sunt cei ai rezumatelor.
- **Traducere** → **Furnizor** și **Model**. DeepL și Google Translate nu au modele de ales.
- **Ollama** → **URL-ul serverului**: adresa Ollama, implicit `http://localhost:11434`.

Lăsați **Modelul** gol pentru a folosi modelul implicit al furnizorului. Butonul de lângă furnizor setează cheia API a acestuia.

## Chei API

Cheile fiecărui serviciu. Faceți clic pe **Setează cheia API…** pentru a introduce o cheie sau pe **Schimbă cheia API…** pentru a o înlocui (lăsați câmpul gol pentru a o elimina). Sunt păstrate în depozitul de credențiale al sistemului. Sunt grupate după ce folosesc, iar cele setate au o bifă.

| Grup | Cheie | Folosită pentru |
| --- | --- | --- |
| **Furnizori de LLM** | Cheie API OpenAI | API-ul Whisper și rezumarea, întrebările și traducerea cu OpenAI |
| | Cheie API Anthropic | Rezumarea, întrebările și traducerea cu Claude |
| | Cheie API DeepSeek | Rezumarea, întrebările și traducerea cu DeepSeek |
| | Cheie API Gemini | Rezumarea, întrebările și traducerea cu Gemini (din Google AI Studio) |
| | Cheie API Mistral | Rezumarea, întrebările și traducerea cu Mistral |
| | Cheie API xAI | Rezumarea, întrebările și traducerea cu Grok |
| **Traducere** | Cheie API DeepL | Traducerea cu DeepL (funcționează și cheile planului gratuit) |
| | Cheie API Google | Google Speech-to-Text peste nivelul gratuit și Google Translate (Cloud Translation API) |
| **Transcriere** | Token Hugging Face | Identificarea vorbitorilor cu WhisperX |

:::caution
Fiecare furnizor taxează utilizarea API-ului său, pentru care Audiotext nu este responsabil. Dacă OpenAI returnează eroarea `429` cu o cheie nouă, consultați [Depanare](/ro/help/troubleshooting/#api-ul-whisper-returnează-eroarea-429).
:::

## Transcriere

Opțiunile motoarelor, fiecare în propria secțiune.

### WhisperX

**Tip de calcul**, **Dimensiunea lotului** și **Folosește CPU**. Consultați [opțiunile avansate WhisperX](/ro/reference/engines/#opțiuni-avansate). Pe un Mac cu Apple Silicon, WhisperX transcrie pe placa lui video, dacă **Folosește CPU** nu este activat. Consultați [Pe un Mac](/ro/reference/engines/#pe-un-mac). Pe placa grafică a Mac-ului, indicațiile pentru **Tip de calcul** și **Dimensiunea lotului** spun că nu se aplică, iar **Folosește CPU** are un link către **Modele acceptate**.

### Whisper API

**Temperatură** și **Marcaje de timp ale cuvintelor**. Consultați [opțiunile API-ului Whisper](/ro/reference/engines/#opțiuni).

## Subtitrări

Cum se împart subtitrările: cele afișate pe videoclip și în modul **Subtitrări**, fișierele de subtitrări exportate și [videoclipurile cu subtitrări](/ro/guides/transcript/#exportați-videoclipul-cu-subtitrările). Fiecare opțiune are o valoare pentru videoclipurile orizontale și alta pentru cele verticale (mai înalte decât late, de ex. pentru telefoane), care sunt mai înguste:

| Opțiune | Orizontal | Vertical |
| --- | :---: | :---: |
| **Nr. max. de rânduri pe subtitrare** | `2` | `2` |
| **Nr. max. de caractere pe rând** | `42` | `24` |
| **Chineză, japoneză și coreeană**: caracterele pe rând în aceste limbi, ale căror caractere sunt cam de două ori mai late decât cele latine | `16` | `10` |

Rândurile unei subtitrări sunt echilibrate, iar limbile scrise fără spații sunt rupte între caractere.

**Evidențiază cuvintele** subliniază în fișierele `.srt` și `.vtt` fiecare cuvânt în momentul în care este rostit. Dezactivat implicit.

## Despre

Versiunea Audiotext și linkuri către această documentație, codul sursă de pe GitHub și pagina de donații. **Caută actualizări** verifică imediat dacă există o versiune nouă: dacă există, butonul devine **Descarcă** și deschide pagina acesteia.
