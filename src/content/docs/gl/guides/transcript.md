---
title: A transcrición
description: Reproduce, busca, corrixe, copia e exporta unha transcrición, e mira os vídeos cos seus subtítulos.
sidebar:
  order: 3
---

Selecciona unha transcrición no [historial](/gl/guides/history/) para abrila. A barra de ferramentas cambia entre tres modos, **Transcrición**, **Texto plano** e **Resumo**, e ten os botóns **Traducir**, **Copiar** e **Exportar**.

## Transcrición

Mostra cada segmento da transcrición (unha frase ou unha parte dunha frase longa) con cando comeza e remata e, se se identificaron os falantes, o seu falante.

Por defecto, os tempos móstranse simplificados (`01:05 – 01:09`). Para velos ao milisegundo, como nos subtítulos (`00:01:05,900 – 00:01:09,350`), marca **Marcas de tempo precisas (00:00:01,000)** no menú `⋯`.

As marcas de tempo só están dispoñibles con **WhisperX** e cos modelos `whisper-1` e `gpt-4o-transcribe-diarize` da **API de Whisper**. Sen elas, a transcrición non se pode reproducir segmento a segmento; usa o modo **Texto plano**.

### Reproduce o audio

- **Fai clic nun segmento** para reproducir o audio desde aí. O segmento que se reproduce resáltase, e o texto segue a reprodución. Cos tempos por palabra, tamén se resalta cada palabra.
- Usa a barra do reprodutor para reproducir, pausar, moverte a calquera punto e cambiar a **velocidade**, de `0.5×` a `2×`, mantendo o ton das voces.
- Atallos de teclado: `Espazo` reproduce ou pausa, e `←`/`→` retroceden ou avanzan 5 segundos.

Se o ficheiro de orixe se moveu ou eliminou, o audio non está dispoñible, pero o texto si. Audiotext garda as gravacións do micrófono, así que sempre se poden reproducir.

![Unha transcrición reproducíndose, co segmento actual resaltado](/screenshots/transcript.png)

### Mira vídeos con subtítulos

As transcricións de vídeos mostran o vídeo enriba do texto. O seu menú permíteche **Mostrar os subtítulos no vídeo** e escoller o seu **Tamaño** (pequeno, mediano ou grande), a súa **Posición** (abaixo ou arriba) e o seu **Estilo** (fondo escuro ou contorno). Se a transcrición ten unha [tradución](/gl/guides/summary-and-translation/#tradución), o menú tamén escolle se os subtítulos mostran a **Transcrición** ou a **Tradución ao idioma…**.

### Busca

Preme `Ctrl+F` (`⌘F` en macOS) e escribe. `Intro` e `Maiús+Intro` van á coincidencia seguinte e anterior, e `Esc` borra a busca.

## Corrixe a transcrición

Para corrixir a transcrición sen perder as súas marcas de tempo (que usan os subtítulos e a reprodución), usa as opcións do menú `⋯` ou fai clic dereito nun segmento:

- **Buscar e substituír…**: substitúe unha palabra ou unha frase en toda a transcrición, p. ex. un nome mal escrito. Mostra cantas veces aparece o texto antes de substituílo, e pode **Distinguir maiúsculas**.
- **Renomear falantes…**: dálle un nome a cada falante (`SPEAKER_00` → `Ana`). Darlles o mesmo nome a dous falantes fusiónaos.
- **Editar o texto…**: fai clic dereito nun segmento para cambiar o seu texto.
- **Reproducir desde aquí**: fai clic dereito nun segmento para reproducilo.

As palabras que non cambian manteñen os seus tempos, así que se seguen resaltando ao reproducir.

## Texto plano

O modo **Texto plano** permíteche editar o texto libremente, como nun editor de texto. Os cambios gárdanse automaticamente. A transcrición conserva o texto orixinal coas súas marcas de tempo, así que os subtítulos non usan os cambios do texto plano.

## Copia e exporta

**Copiar** copia o texto do modo actual (a transcrición, o resumo ou a tradución).

**Exportar** (ou `Ctrl+S`, `⌘S` en macOS) garda a transcrición como:

| Formato | Contido |
| --- | --- |
| Texto plano (`.txt`) | O texto |
| Markdown (`.md`) | O resumo, se o hai, e o texto en parágrafos coa marca de tempo e o falante de cada un |
| Documento de Word (`.docx`) | O mesmo que Markdown, listo para editar ou imprimir |
| Subtítulos (`.srt`) | Subtítulos para reprodutores de vídeo |
| Subtítulos web (`.vtt`) | Subtítulos para a web |
| Táboa (`.tsv`) | Unha fila por segmento, co seu inicio e a súa fin (en milisegundos) e o seu texto |
| JSON (`.json`) | O texto, os segmentos coas súas marcas de tempo, palabras e falantes, e o resumo, se o hai |

Os subtítulos e a táboa precisan marcas de tempo.

Se a transcrición ten unha tradución, escolle **Tradución ao idioma…** no mesmo menú (ou fai clic no botón de exportar da tradución) para exportar a tradución nos mesmos formatos. O nome do ficheiro inclúe o seu idioma (p. ex. `video.es.srt`), así que os reprodutores de vídeo cárgana co vídeo.

## Renomea, etiqueta e engade notas

A cabeceira da transcrición mostra o seu nome, a súa orixe, a súa data e a súa etiqueta. Fai dobre clic no nome para renomeala, fai clic na etiqueta para cambiala ou fai clic en **Engadir nota** para escribir unha nota sobre ela. Fai clic na nota, ou no seu lapis, para editala, e na súa papeleira para eliminala. Hai máis opcións no [historial](/gl/guides/history/).
