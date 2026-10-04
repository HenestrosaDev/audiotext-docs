---
title: Preferințe
description: Toate setările ferestrei Preferințe, filă cu filă.
sidebar:
  order: 2
---

**Preferințele** conțin setările care nu se schimbă la fiecare transcriere. Deschideți-le cu rotița din dreapta sus a ferestrei. Modificările se salvează automat.

## General

- **Aspect**: **Sistem** (urmează sistemul), **Luminos** sau **Întunecat**.
- **Limba interfeței**: limba Audiotext sau **Limba sistemului**. Poate fi schimbată când nu este nicio transcriere în curs. Consultați [limbile disponibile](/ro/reference/formats-and-languages/#limbile-interfeței).
- **Notificări**: afișează o notificare de sistem când o transcriere este gata (pentru un dosar, când sunt gata toate fișierele lui, iar pentru un dosar monitorizat, de fiecare dată când este gata un fișier nou). Activat implicit. Pe macOS provin de la **Script Editor**, iar pe Windows de la **Windows PowerShell**, așa că se permit sau se dezactivează pentru aceste aplicații în setările sistemului. Pe Linux necesită `notify-send` (pachetul `libnotify-bin` sau `libnotify`).

## IA

Furnizorii [rezumatelor și traducerilor](/ro/guides/summary-and-translation/):

- **Rezumat** → **Furnizor** și **Model**.
- **Traducere** → **Furnizor** și **Model**. DeepL și Google Translate nu au modele de ales.
- **Ollama** → **URL-ul serverului**: adresa Ollama, implicit `http://localhost:11434`.

Lăsați **Modelul** gol pentru a folosi modelul implicit al furnizorului. Butonul de lângă furnizor setează cheia API a acestuia.

## Chei API

Cheile fiecărui serviciu. Faceți clic pe **Setează…** pentru a introduce o cheie sau pe **Schimbă…** pentru a o înlocui (lăsați câmpul gol pentru a o elimina). Sunt păstrate în depozitul de credențiale al sistemului.

| Cheie | Folosită pentru |
| --- | --- |
| Cheie API OpenAI | API-ul Whisper și rezumarea și traducerea cu OpenAI |
| Cheie API Anthropic | Rezumarea și traducerea cu Claude |
| Cheie API DeepSeek | Rezumarea și traducerea cu DeepSeek |
| Cheie API Gemini | Rezumarea și traducerea cu Gemini (din Google AI Studio) |
| Cheie API Mistral | Rezumarea și traducerea cu Mistral |
| Cheie API xAI | Rezumarea și traducerea cu Grok |
| Cheie API DeepL | Traducerea cu DeepL (funcționează și cheile planului gratuit) |
| Cheie API Google | Google Speech-to-Text peste nivelul gratuit și Google Translate (Cloud Translation API) |
| Token Hugging Face | Identificarea vorbitorilor cu WhisperX |

:::caution
Fiecare furnizor taxează utilizarea API-ului său, pentru care Audiotext nu este responsabil. Dacă OpenAI returnează eroarea `429` cu o cheie nouă, consultați [Depanare](/ro/help/troubleshooting/#api-ul-whisper-returnează-eroarea-429).
:::

## WhisperX

**Tip de calcul**, **Dimensiunea lotului** și **Folosește CPU**. Consultați [opțiunile avansate WhisperX](/ro/reference/engines/#opțiuni-avansate).

## Subtitrări

Opțiunile fișierelor `.srt` și `.vtt` salvate la transcrierea unui dosar cu WhisperX:

- **Evidențiază cuvintele**: subliniază fiecare cuvânt în momentul în care este rostit. Dezactivat implicit.
- **Nr. max. de rânduri**: numărul maxim de rânduri ale fiecărei subtitrări. Implicit `2`.
- **Lățime max. a rândului**: numărul maxim de caractere ale unui rând înainte de a fi rupt. Implicit `42`.

## Whisper API

**Temperatură** și **Marcaje de timp ale cuvintelor**. Consultați [opțiunile API-ului Whisper](/ro/reference/engines/#opțiuni).

## Despre

Versiunea Audiotext și linkuri către această documentație, codul sursă de pe GitHub și pagina de donații.
