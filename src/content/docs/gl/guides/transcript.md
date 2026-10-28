---
title: A transcrición
description: Reproduce, busca, corrixe, revisa, copia e exporta unha transcrición, e mira ou exporta os vídeos cos seus subtítulos.
sidebar:
  order: 3
---

Selecciona unha transcrición no [historial](/gl/guides/history/) para abrila. A barra de ferramentas cambia entre catro modos, **Subtítulos**, **Texto simple**, **Resumo** e **Preguntar**, e ten o botón **Traducir** e o menú `⋯`.

A transcrición móstrase nunha tarxeta titulada co seu idioma. Os botóns da súa cabeceira buscan e substitúen nela, cópiana, expórtana e **Volven transcribila** (despois de preguntarche, xa que se perden as correccións do seu texto).

## Subtítulos

Mostra a transcrición dividida nos subtítulos do vídeo, con cando comeza e remata cada un e, se se identificaron os falantes, o seu falante. A súa lonxitude segue as [preferencias dos subtítulos](/gl/reference/preferences/#subtítulos).

Por defecto, os tempos móstranse ao milisegundo, como nos subtítulos (`00:01:05,900 – 00:01:09,350`). Para simplificalos (`01:05 – 01:09`), desmarca **Marcas de tempo precisas (HH:MM:SS,mmm)** no menú `⋯`.

Enriba dos subtítulos, unha liña cóntaos e, se se identificaron os falantes, tamén a eles (p. ex. `Subtítulos: 120 · Falantes: 3`). Un segmento longo dividido en varios subtítulos conta como varios.

As marcas de tempo só están dispoñibles con **WhisperX** e cos modelos `whisper-1` e `gpt-4o-transcribe-diarize` da **API de Whisper**. Sen elas, a transcrición non se pode reproducir subtítulo a subtítulo; usa o modo **Texto simple**.

### Reproduce o audio

- **Fai clic nun subtítulo** para reproducir o audio desde aí. O subtítulo que se reproduce resáltase e mantense no centro do texto. Cos tempos por palabra, tamén se resalta cada palabra.
- Usa a barra do reprodutor para reproducir, pausar, moverte a calquera punto e cambiar a **velocidade**, de `0.5×` a `2×`, mantendo o ton das voces.
- Atallos de teclado: `Espazo` reproduce ou pausa, e `←`/`→` retroceden ou avanzan 5 segundos.

Se o ficheiro de orixe se moveu ou eliminou, o audio non está dispoñible, pero o texto si. Audiotext garda as gravacións do micrófono, así que sempre se poden reproducir.

![Unha transcrición reproducíndose, co segmento actual resaltado](/screenshots/transcript.png)

### Mira vídeos con subtítulos

As transcricións de vídeos mostran o vídeo enriba do texto. O seu menú permíteche **Mostrar subtítulos no vídeo** e escoller o seu **Tamaño** (pequeno, mediano ou grande), a súa **Posición** (abaixo ou arriba) e o seu **Estilo** (fondo escuro ou contorno). Se a transcrición ten [traducións](/gl/guides/summary-and-translation/#tradución), o menú tamén escolle se os subtítulos mostran a **Transcrición** ou a **Tradución ao idioma…** dun idioma. O botón **Subtítulos** da barra do reprodutor tamén os mostra ou oculta, e a frecha xunto a el abre o mesmo menú.

## Busca e substitúe

Preme `Ctrl+F` (`⌘F` en macOS), ou fai clic na lupa da cabeceira, para abrir a xanela de buscar e substituír no texto co que traballas: a transcrición ou a súa tradución. Busca o texto mentres o escribes (non se buscan as marcas de tempo nin os falantes) e mostra cantas coincidencias hai.

- `Intro` e `Maiús+Intro`, ou as frechas, van á coincidencia seguinte e anterior.
- **Substituír** substitúe a coincidencia actual, e **Substituír todo** todas elas, p. ex. un nome mal escrito. Marca **Distinguir maiúsculas** para atopar só o texto coas mesmas maiúsculas.
- A xanela non é modal, así que podes ler e reproducir o texto mentres está aberta. **Manter enriba** mantena sobre a xanela principal.
- `Esc` péchaa.

No modo **Texto simple**, a xanela só busca (**Buscar na transcrición**), xa que unha coincidencia aí non se pode relacionar cun subtítulo. Volve a **Subtítulos** para substituír.

## Corrixe a transcrición

Para corrixir a transcrición sen perder as súas marcas de tempo (que usan os subtítulos e a reprodución), usa a xanela de [Buscar e substituír](#busca-e-substitúe) ou fai clic dereito nun subtítulo:

- **Reproducir desde aquí**: reprodúceo.
- **Copiar**: copia o seu texto.
- **Editar texto…**: cambia o seu texto.
- **Editar tempos…**: cambia cando empeza e remata, ao milisegundo. Escribe os tempos como `00:01:05,900`, `01:05,9` ou `65.9`.
- **Engadir subtítulo despois…**: engade un subtítulo que falta, que por defecto ocupa o oco ata o seguinte. Se se identificaron os falantes, escolle quen o di (por defecto, o falante do subtítulo anterior) ou escribe un novo. Engádese cando escribes o seu texto.
- **Cambiar falante…**: se se identificaron os falantes, escolle quen o di, ou un falante novo. A diferenza de **Renomear falantes…**, só cambia este subtítulo.
- **Renomear falantes…**: dálle un nome a cada falante (`SPEAKER_00` → `Ana`). Darlles o mesmo nome a dous falantes fusiónaos. Tamén está no menú `⋯`.
- **Eliminar subtítulo**: elimínao. Se ten texto, pídeche confirmación.

As palabras que non cambian manteñen os seus tempos, así que se seguen resaltando ao reproducir. Un subtítulo cuxos tempos cambias, ou que engades, non ten tempos por palabra, así que as súas palabras non se resaltan nin se subliñan como de baixa confianza.

## Revisa as palabras de baixa confianza

As palabras das que o motor está menos seguro subliñanse, para que saibas onde revisar primeiro. WhisperX puntúa cada palabra cando calcula os seus tempos (**Tempos por palabra**, activado de forma predeterminada), e o modelo `whisper-1` da API de Whisper puntúa cada segmento, así que os seus segmentos subliñanse enteiros.

Unha barra enriba do texto mostra cantas palabras quedan por revisar (p. ex. `3 de 12 por revisar`):

- As súas frechas, ou `Ctrl+J` e `Maiús+Ctrl+J` (`⌘J` e `⇧⌘J` en macOS), van á palabra seguinte e anterior, e moven o reprodutor ata elas. Con **Reprodución automática**, cada palabra reprodúcese cun momento ao redor.
- `Intro` acepta tal cal a palabra á que fuches, e pasa á seguinte. **Aceptar as restantes** acepta todas as que quedan, e **Desfacer** desfai a última revisión.
- Fai clic nunha palabra para corrixila no seu sitio: escribe o texto correcto e preme `Intro` (ou **Acéptaa** sen cambios). **Reproducir de novo** (`Ctrl+R`, `⌘R` en macOS) reprodúcea outra vez, e `Esc` péchaa.
- **Só as marcadas** mostra só os subtítulos con palabras por revisar.
- As palabras tamén se marcan baixo a posición do audio. Fai clic nunha marca para ir á súa palabra.

Cando están todas revisadas, **Revisar de novo as palabras aceptadas** recupera as palabras que aceptaches. As palabras corrixidas seguen revisadas.

As palabras subliñanse cando a súa puntuación é inferior ao 40 %. Escolle outro limiar, do 20 % ao 70 %, en `⋯` → **Limiar de baixa confianza**, ou desde **Axustar o limiar** na barra. Para deixar de subliñalas e ocultar a barra, desmarca **Resaltar as palabras de baixa confianza** no menú `⋯`.

Se unha transcrición non ten puntuacións, o menú `⋯` di por que: **Activa «Tempos por palabra» e transcríbeo de novo**, **Non hai modelo de aliñamento para o seu idioma**, **Transcríbeo de novo para puntuar as palabras** (fíxose antes de que se puntuasen as palabras) ou **Só WhisperX e whisper-1 puntúan as palabras**.

## Texto simple

O modo **Texto simple** mostra o texto da transcrición sen marcas de tempo. Constrúese a partir dos subtítulos, así que é de só lectura, como di a nota xunto aos modos: para cambialo, [corrixe os subtítulos](#corrixe-a-transcrición), e o texto simple ségueos. Así, todas as exportacións e traducións usan o mesmo texto.

As transcricións sen marcas de tempo (p. ex. da API de Google) non teñen subtítulos, así que o seu texto simple pódese editar libremente, como nun editor de texto. Os cambios gárdanse automaticamente.

:::note
As versións anteriores permitían editar o texto simple das transcricións con subtítulos. Ao abrir unha desas transcricións (ou traducións), o seu texto simple vólvese construír a partir dos seus subtítulos, así que eses cambios substitúense.
:::

## Copia e exporta

O botón de copiar da cabeceira copia o texto da transcrición.

O botón de exportar (ou `Ctrl+S`, `⌘S` en macOS) gárdaa como:

| Formato | Contido |
| --- | --- |
| Documento de Word (`.docx`) | O mesmo que Markdown, listo para editar ou imprimir |
| JSON (`.json`) | O texto, os segmentos coas súas marcas de tempo, palabras e falantes, e o resumo, se o hai |
| Markdown (`.md`) | O resumo, se o hai, e o texto en parágrafos coa marca de tempo e o falante de cada un |
| Subtítulos (`.srt`) | Subtítulos para reprodutores de vídeo |
| Subtítulos con estilo (`.ass`) | Subtítulos cunha cor para cada falante, para reprodutores e editores de vídeo |
| Subtítulos web (`.vtt`) | Subtítulos para a web |
| Táboa (`.tsv`) | Unha fila por segmento, co seu inicio e a súa fin (en milisegundos) e o seu texto |
| Texto simple (`.txt`) | O texto |

Os subtítulos e a táboa precisan marcas de tempo. As [traducións](/gl/guides/summary-and-translation/#subtítulos-e-exportación) e o [resumo](/gl/guides/summary-and-translation/#resumo) expórtanse desde os seus propios paneis.

### Exporta o vídeo cos seus subtítulos

Para compartir un vídeo onde non se poden cargar ficheiros de subtítulos (p. ex. unha rede social), escolle **Vídeo con subtítulos (.mp4)…** no menú de exportar da transcrición, ou dunha tradución. Audiotext fai unha copia do vídeo cos subtítulos debuxados enriba, tal como se mostran na aplicación: co seu tamaño, a súa posición e o seu estilo (consulta [Mira vídeos con subtítulos](#mira-vídeos-con-subtítulos)).

Faise en segundo plano, e o estado mostra o seu progreso. Para cancelalo, escolle **Deixar de engadir subtítulos ao vídeo** no mesmo menú. A copia é un ficheiro MP4 (vídeo H.264 e audio AAC), e o vídeo orixinal non cambia.

Se ningunha fonte do teu sistema ten algúns caracteres dos subtítulos, debúxanse como cadros, e Audiotext enuméraos ao rematar. Consulta [Solución de problemas](/gl/help/troubleshooting/#o-vídeo-con-subtítulos-mostra-cadros).

## Renomea, etiqueta e engade notas

A cabeceira da transcrición mostra o seu nome, a súa orixe, a súa data e a súa etiqueta. Fai dobre clic no nome para renomeala, fai clic na etiqueta para cambiala ou fai clic en **Engadir nota** para escribir unha nota sobre ela. Fai clic na nota, ou no seu lapis, para editala, e na súa papeleira para eliminala.

O menú `⋯` tamén ten estas opcións, e abre o cartafol do ficheiro de orixe ou o **cartafol dos ficheiros gardados**. Hai máis opcións no [historial](/gl/guides/history/).
